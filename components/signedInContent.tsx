"use client";

import Link from "next/link";
import { User } from "@/next-auth";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
export function SignedInContent({user} : {user: User}) {

  return (
    <>
      <DropdownMenuItem className="h-14 focus:bg-background" asChild>
        <p className="font-semibold truncate">
          Logged in as
          <br />
          {user.name}
        </p>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <Link href="/settings" className="cursor-pointer">
          Settings
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem className="focus:bg-destructive/25 focus:text-destructive cursor-pointer" onClick={async () => await signOut()}>
        Log out
      </DropdownMenuItem>
    </>
  )
}