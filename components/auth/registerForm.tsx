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
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, registerSchemaType } from "@/schema";
import { emailRegister } from "@/lib/actions/auth/register";

export function RegisterForm() {
  const form = useForm<registerSchemaType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
    },
  })

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: registerSchemaType) {
    try {
      const result = await emailRegister(values);
      if (result?.error) {
        toast.error(result.error);
      }

    } catch (error) {
      console.log(error)
      toast.error("Something went wrong!")
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
                <FormLabel><span className="text-semibold">Email</span></FormLabel>
                <FormControl>
                  <Input disabled={isSubmitting} placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering" : "Register with Email"}
          </Button>
        </form>
      </Form>
    </div>
  )
}