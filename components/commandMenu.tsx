"use client";

import {
  RxSun,
  RxMoon,
  RxLaptop,
  RxFile,
  RxMagnifyingGlass,
} from "react-icons/rx";
import {
  CommandDialog,
  CommandList,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DialogProps } from "@radix-ui/react-dialog";
import { useEffect, useState, useCallback } from "react";


export function CommandMenu(props: DialogProps) {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64",
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <RxMagnifyingGlass className="mr-2 h-5 w-5" />
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
                runCommand(() => router.push("/"));
              }}
            >
              <RxFile className="mr-2 h-4 w-4" />
              Placeholder
            </CommandItem>
            <CommandItem
              value="Placeholder"
              onSelect={() => {
                runCommand(() => router.push("/"));
              }}
            >
              <RxFile className="mr-2 h-4 w-4" />
              Placeholder
            </CommandItem>
            <CommandItem
              value="Placeholder"
              onSelect={() => {
                runCommand(() => router.push("/"));
              }}
            >
              <RxFile className="mr-2 h-4 w-4" />
              Placeholder
            </CommandItem>
            <CommandItem
              value="Placeholder"
              onSelect={() => {
                runCommand(() => router.push("/"));
              }}
            >
              <RxFile className="mr-2 h-4 w-4" />
              Placeholder
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <RxSun className="mr-2 h-4 w-4" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <RxMoon className="mr-2 h-4 w-4" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <RxLaptop className="mr-2 h-4 w-4" />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
