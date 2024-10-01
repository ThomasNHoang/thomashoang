"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNavigation() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <span className="h-6 w-6">🌐</span>
        <span className="hidden font-bold lg:inline-block">
          Thomas Hoang
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {/* Todo: Add Navlinks Dynamically */}
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Placeholder
        </Link>
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Placeholder
        </Link>
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Placeholder
        </Link>
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname.startsWith('/') ? "text-foreground" : "text-foreground/60"
          )}
        >
          Placeholder
        </Link>
      </nav>
    </div>
  )
}