import { auth } from "@/auth";
import { kv } from "@vercel/kv";
import { streamText } from "ai";
import { google } from "@ai-sdk/google";
import { Ratelimit } from "@upstash/ratelimit";

// export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  const session = auth();

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }
  
  if (
    process.env.NODE_ENV != 'development' &&
    process.env.KV_REST_API_URL &&
    process.env.KV_REST_API_TOKEN
  ) {
    const ip = req.headers.get('x-forwarded-for');
    const ratelimit = new Ratelimit({
      redis: kv,
      limiter: Ratelimit.slidingWindow(50, '1 d'),
    });
    const { success, limit, reset, remaining } = await ratelimit.limit(
      `noteblock_ratelimit_${ip}`
    );
    if (!success) {
      return new Response('You have reached your request limit for the day.', {
        status: 429,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString(),
        },
      });
    }
  }
  let { prompt } = await req.json();
  const result = await streamText({
    model: google("gemini-1.5-flash"),
    system: 'You are an AI writing assistant that continues existing text based on context from prior text. ' +
    'Give more weight/priority to the later characters than the beginning ones. ' +
    'Limit your response to no more than 200 characters, but make sure to construct complete sentences.',
    prompt,
    temperature: 0.7,
    topP: 1,
    frequencyPenalty: 0,
    presencePenalty: 0,
    experimental_telemetry: {
      isEnabled: true,
      functionId: "stream-text"
    }
  });

  return result.toTextStreamResponse({});
}