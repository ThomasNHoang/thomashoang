import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { FaGoogle, FaGithub } from "react-icons/fa";

interface SocialProps {
  isSubmitting: boolean;
}

export function Social({ isSubmitting }: SocialProps) {
  async function onClick(provider: "google" | "github") {
    signIn(provider, {
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-row space-x-2">
        <Button
          className="w-full"
          variant="outline"
          type="button"
          disabled={isSubmitting}
          onClick={() => onClick("google")}
        >
          <FaGoogle className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button
          className="w-full"
          variant="outline"
          type="button"
          disabled={isSubmitting}
          onClick={() => onClick("github")}
        >
          <FaGithub className="mr-2 h-4 w-4" />
          Github
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
    </div>
  );
}
