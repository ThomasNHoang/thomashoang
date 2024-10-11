"use client";

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Social } from "@/components/auth/social";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailLogin } from "@/lib/actions/auth/login";
import { loginFormSchema, loginSchemaType } from "@/schema";

export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") as string | undefined;

  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: loginSchemaType) {
    try {
      const result = await emailLogin(values, callbackUrl);
      if (result?.error) {
        toast.error(result.error);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <div className="space-y-4">
      <Social isSubmitting={isSubmitting} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="text-semibold">Email</span>
                </FormLabel>
                <FormControl>
                  <Input disabled={isSubmitting} placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Logging In" : "Login with Email"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
