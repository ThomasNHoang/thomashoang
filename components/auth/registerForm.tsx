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
import { registerFormSchema, registerSchemaType } from "@/schema";

export function RegisterForm() {
  const form = useForm<registerSchemaType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: registerSchemaType) {
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
          <Button type="submit" className="w-full">Register with Email</Button>
        </form>
      </Form>
    </div>
  )
}