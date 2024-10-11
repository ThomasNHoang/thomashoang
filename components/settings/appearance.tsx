"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { RxChevronDown } from "react-icons/rx";
import { zodResolver } from "@hookform/resolvers/zod";
import { appearanceAction } from "@/lib/actions/user/settings";
import { Button, buttonVariants } from "@/components/ui/button";
import { appearanceFormSchema, appearanceSchemaType } from "@/schema";

export function AppearanceForm(user: appearanceSchemaType) {
  const router = useRouter();
  const { update } = useSession();
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const form = useForm<appearanceSchemaType>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: user,
  })

  const watchFields = form.watch();

  type FieldKey = 'font';

  useEffect(() => {
    const hasChanges = (Object.keys(watchFields) as FieldKey[]).some(
      (key) => watchFields[key] !== user[key]
    );

    setIsButtonEnabled(hasChanges);
  }, [watchFields]);

  async function onSubmit(data: appearanceSchemaType) {
    try {
      const result = await appearanceAction(data);

      if (result.error) {
        toast.error(result.error);
      }

      if (result.success) {
        update();
        toast.success(result.success);
        router.refresh();
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
          name="font"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Font</FormLabel>
              <div className="relative w-max">
                <FormControl>
                  <select
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-[200px] appearance-none font-normal"
                    )}
                    {...field}
                  >
                    <option value="inter">Inter</option>
                    <option value="geist">Geist</option>
                  </select>
                </FormControl>
                <RxChevronDown className="absolute right-3 top-2.5 h-4 w-4 opacity-50" />
              </div>
              <FormDescription>
                Set the font you want to use in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={!isButtonEnabled}>Update preferences</Button>
      </form>
    </Form>
  )
}