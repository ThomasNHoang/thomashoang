"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { navbarRoutes } from "@/routes";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Root as VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <VisuallyHidden>
        <SheetTitle>
          Mobile navigation menu
        </SheetTitle>
      </VisuallyHidden>
      <VisuallyHidden>
        <SheetDescription>
          Mobile navigation menu links
        </SheetDescription>
      </VisuallyHidden>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <RxHamburgerMenu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <span className="font-bold">Thomas Hoang</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          {/* Todo: Add Navlinks Dynamically */}
          <div className="flex flex-col space-y-3">
            {
              navbarRoutes.map((item, index) => (
                <MobileLink key={index} href={item.href} onOpenChange={setOpen}>
                  {item.title}
                </MobileLink>
              ))
            }
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  children,
  className,
  onOpenChange,
  ...props
}: MobileLinkProps) {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
