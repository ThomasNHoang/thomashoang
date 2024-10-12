"use client";

import Link from "next/link";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
export function SignedOutContent() {
  return (
    <>
      <DropdownMenuItem className="h-14 focus:bg-background" asChild>
        <p className="font-semibold">
          You are not
          <br />
          logged in
        </p>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        className="focus:bg-success/25 focus:text-success cursor-pointer"
        asChild
      >
        <Link href="/auth/login">Login</Link>
      </DropdownMenuItem>
    </>
  );
}
