"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DialogProps } from "@radix-ui/react-dialog";
import { CommandDialog, CommandList, CommandInput, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { useEffect, useState, useCallback } from "react";

export function CommandMenu(props: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  // Todo: Add theme

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search website...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {/* Todo: Dynamically render */}
            <CommandItem
              value="Placeholder"
              onSelect={() => {
                runCommand(() => router.push("/"))
              }}
            >
              {/* Todo: Add Icon */}
              Placeholder
            </CommandItem>
            <CommandItem
              value="Placeholder"
              onSelect={() => {
                runCommand(() => router.push("/"))
              }}
            >
              Placeholder
            </CommandItem>
            <CommandItem
              value="Placeholder"
              onSelect={() => {
                runCommand(() => router.push("/"))
              }}
            >
              Placeholder
            </CommandItem>
            <CommandItem
              value="Placeholder"
              onSelect={() => {
                runCommand(() => router.push("/"))
              }}
            >
              Placeholder
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}