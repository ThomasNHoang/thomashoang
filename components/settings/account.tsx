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
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { signIn, useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountAction } from "@/lib/actions/user/settings";
import { accountFormSchema, accountSchemaType } from "@/schema";
import { unlinkGithubAccount, unlinkGoogleAccount } from "@/lib/actions/user/account";

export function AccountForm(user: accountSchemaType) {
  const router = useRouter();
  const { update } = useSession();
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const form = useForm<accountSchemaType>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: user,
  })

  const watchFields = form.watch();

  useEffect(() => {
    const hasChanges =
      watchFields.name !== user.name ||
      watchFields.googleConnected !== user.googleConnected ||
      watchFields.githubConnected !== user.githubConnected;

    setIsButtonEnabled(hasChanges);
  }, [watchFields, user]);

  async function onSubmit(data: accountSchemaType) {
    try {
      const result = await accountAction(data);

      if (result.error) {
        toast.error(result.error);
      }

      if (result.success) {
        update();
        toast.success(result.success);
      }

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }

    if (data.googleConnected !== user.googleConnected) {
      console.log("Changed!")
      if (data.googleConnected) { // Wants to connect google
        try {
          await signIn("google", {
            redirect: false
          });
        } catch (error) {
          console.log(error);
        }
      } else { // Wants to disconnect google
        await unlinkGoogleAccount();
      }
    }

    if (data.githubConnected !== user.githubConnected) {
      console.log("Changed!")
      if (data.githubConnected) { // Wants to connect github
        try {
          await signIn("github", {
            redirect: false
          });
        } catch (error) {
          console.log(error);
        }
      } else { // Wants to disconnect github
        await unlinkGithubAccount();
      }

      router.refresh();
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
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormDescription>
                This is the name that will be displayed on your profile.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="googleConnected"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Link Google</FormLabel>
                <FormDescription>
                  Allow login with google
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="githubConnected"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Link Github</FormLabel>
                <FormDescription>
                  Allow login with github
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!isButtonEnabled}>Update account</Button>
      </form>
    </Form>
  )
}