"use client";

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormMessage,
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingAction } from "@/lib/actions/user/onboarding";
import { onboardingFormSchema, onboardingSchemaType } from "@/schema";

export function OnboardingForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") as string | undefined;

  const form = useForm<onboardingSchemaType>({
    resolver: zodResolver(onboardingFormSchema),
    defaultValues: {
      name: undefined,
    },
  });

  async function onSubmit(values: onboardingSchemaType) {
    try {
      const result = await onboardingAction(values, callbackUrl);

      if (result?.error) {
        toast.error(result.error);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
