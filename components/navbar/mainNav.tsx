"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { navbarRoutes } from "@/routes";
import { RxGlobe } from "react-icons/rx";
import { usePathname } from "next/navigation";

export function MainNavigation() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <RxGlobe className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">Thomas Hoang</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {navbarRoutes.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "transition-colors hover:text-foreground/80",
              item.matcher(pathname) ? "text-foreground" : "text-foreground/60",
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
