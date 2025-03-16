"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu when navigating to a new page
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ororablack2-7Xk3j9Pk01WOqlzsPJDxr5LeRWNnWy.png"
              alt="Ororasoft Logo"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-foreground/60",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:flex">
            <Link href="/contact">Get Started</Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0 border-r-0">
                <div className="flex flex-col h-full bg-gradient-to-br from-background to-background/95">
                  <SheetHeader className="border-b p-4">
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ororablack2-7Xk3j9Pk01WOqlzsPJDxr5LeRWNnWy.png"
                          alt="Ororasoft Logo"
                          width={150}
                          height={40}
                          className="h-8 w-auto"
                        />
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setOpen(false)}
                        className="rounded-full hover:bg-primary/10"
                      >
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close</span>
                      </Button>
                    </div>
                  </SheetHeader>
                  <div className="flex-1 overflow-auto py-6">
                    <nav className="flex flex-col space-y-1 px-4">
                      {navigation.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "group flex items-center rounded-md px-4 py-3.5 text-base font-medium transition-all duration-200 ease-in-out",
                            pathname === item.href
                              ? "bg-primary/10 text-primary"
                              : "text-foreground/70 hover:bg-accent hover:text-accent-foreground",
                          )}
                          onClick={() => setOpen(false)}
                          style={{
                            animationDelay: `${index * 50}ms`,
                            animation: "fadeInRight 0.3s ease forwards",
                            opacity: 0,
                            transform: "translateX(-10px)",
                          }}
                        >
                          {item.name}
                          <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                            <ChevronRight className="h-4 w-4" />
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="border-t p-6 bg-muted/30">
                    <Button asChild className="w-full rounded-full shadow-sm">
                      <Link href="/contact" onClick={() => setOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                    <div className="mt-6 flex items-center justify-center">
                      <div className="rounded-full bg-background p-1.5 shadow-sm">
                        <ThemeToggle />
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

