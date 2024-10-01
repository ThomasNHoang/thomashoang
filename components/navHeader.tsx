import { MainNavigation } from "@/components/mainNav";
import { CommandMenu } from "@/components/commandMenu";
import { MobileNavigation } from "@/components/mobileNav";
import { ThemeSwitcher } from "@/components/themeSwitcher";

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
          <nav>
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </header>
  )
}