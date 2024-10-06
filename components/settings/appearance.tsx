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
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useTheme } from "next-themes"
import { useForm } from "react-hook-form";
import { RxChevronDown } from "react-icons/rx";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, buttonVariants } from "@/components/ui/button";
import { appearanceFormSchema, appearanceSchemaType } from "@/schema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function AppearanceForm() {
  const { setTheme, theme } = useTheme();

  const defaultValues: Partial<appearanceSchemaType> = {
    font: "inter",
    theme: theme as "light" | "dark" | "system" | undefined
  }

  useEffect(() => {
    const savedFont = localStorage.getItem("font")
    if (savedFont) {
      defaultValues.font = savedFont as "inter" | "geist"
    }
  }, [])

  const form = useForm<appearanceSchemaType>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  })

  function onSubmit(data: appearanceSchemaType) {
    setTheme(data.theme);
    localStorage.setItem("font", data.font);

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
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Theme</FormLabel>
              <FormDescription>
                Select the theme for the dashboard.
              </FormDescription>
              <FormMessage />
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid max-w-md grid-cols-2 gap-8 pt-2"
              >
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="light" className="sr-only" />
                    </FormControl>
                    <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                      <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                        <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-2 w-[85%] rounded-lg bg-[#ecedef]" />
                          <div className="h-2 w-[95%] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[70%] sm:w-[80%] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[70%] sm:w-[80%] rounded-lg bg-[#ecedef]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Light
                    </span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="dark" className="sr-only" />
                    </FormControl>
                    <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
                      <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                        <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                          <div className="h-2 w-[85%] rounded-lg bg-slate-400" />
                          <div className="h-2 w-[95%] rounded-lg bg-slate-400" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                          <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-slate-400" />
                          <div className="h-2 w-[70%] sm:w-[80%] rounded-lg bg-slate-400" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                          <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-slate-400" />
                          <div className="h-2 w-[70%] sm:w-[80%] rounded-lg bg-slate-400" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Dark
                    </span>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />

        <Button type="submit">Update preferences</Button>
      </form>
    </Form>
  )
}