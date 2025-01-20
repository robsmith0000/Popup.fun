import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">PopupCities</span>
          </Link>
          <nav className="flex gap-6">
            <Link href="#" className="flex items-center text-sm font-medium text-muted-foreground">
              About
            </Link>
            <Link href="#" className="flex items-center text-sm font-medium text-muted-foreground">
              Cities
            </Link>
            <Link href="#" className="flex items-center text-sm font-medium text-muted-foreground">
              Map
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="w-full max-w-xs">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search cities..." className="pl-8" />
            </div>
          </div>
          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  )
}

