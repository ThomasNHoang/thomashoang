import { MainNavigation } from "@/components/mainNav"
import { MobileNavigation } from "@/components/mobileNav"

export function NavigationHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNavigation />
        <MobileNavigation />
      </div>
    </header>
  )
}