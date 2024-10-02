"use client";

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Social } from "@/components/auth/social";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, loginSchemaType } from "@/schema";

export function LoginForm() {
  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: loginSchemaType) {
    console.log(values);
  }

  return (
    <div className="space-y-4">
      <Social />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel><span className="text-semibold">Email</span></FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Sign In with Email</Button>
        </form>
      </Form>
    </div>
  )
}