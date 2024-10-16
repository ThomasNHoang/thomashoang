import Link from "next/link";
import { cn } from "@/lib/utils";
import { VscGithubInverted } from "react-icons/vsc";
import { buttonVariants } from "@/components/ui/button";
import { MainNavigation } from "@/components/navbar/mainNav";
import { CommandMenu } from "@/components/navbar/commandMenu";
import { UserButton } from "@/components/navbar/user/userButton";
import { MobileNavigation } from "@/components/navbar/mobileNav";
import { ThemeSwitcher } from "@/components/navbar/themeSwitcher";

export function NavigationHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNavigation />
        <MobileNavigation />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <Link
              href="https://github.com/ThomasNHoang/thomasnhoang.github.io"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "h-8 w-8 px-0",
                )}
              >
                <VscGithubInverted className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeSwitcher />
            <UserButton />
          </nav>
        </div>
      </div>
    </header>
  );
}
