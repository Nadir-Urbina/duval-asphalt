"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Services", href: "/services" },
  { name: "Materials Pricing", href: "/materials-pricing" },
  { name: "Roll Off Containers", href: "/roll-off-containers" },
  { name: "Resources", href: "/resources" },
  { name: "News", href: "/news" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact", href: "/contact" },
]

export function HeaderMain() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md py-4" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-12 w-36 sm:h-14 sm:w-44 md:h-16 md:w-52 lg:h-20 lg:w-60 transition-all duration-300">
              <Image
                src="/images/duval-asphalt-logo.png"
                alt="Duval Asphalt Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden xl:flex items-center justify-center flex-1 max-w-4xl">
            <div className="flex items-center justify-center gap-2 md:gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-2 md:px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden xl:flex items-center min-w-[250px] justify-end">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <a
                href="tel:904.296.2020"
                className="text-xl font-bold text-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                904.296.2020
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 xl:hidden">
            <a
              href="tel:904.296.2020"
              className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              aria-label="Call us"
            >
              <Phone className="h-6 w-6 text-primary" />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open menu">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm bg-background border-l border-border p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <div className="relative h-12 w-36">
                      <Image
                        src="/images/duval-asphalt-logo.png"
                        alt="Duval Asphalt Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" aria-label="Close menu">
                        <X className="h-6 w-6" />
                      </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex-1 overflow-y-auto">
                    <div className="flex flex-col py-6 px-4 space-y-2">
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="px-3 py-3 text-xl font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </nav>
                  <div className="p-4 border-t border-border">
                    <div className="flex items-center justify-center gap-2 text-center">
                      <span className="text-base text-muted-foreground">Call Us</span>
                      <a
                        href="tel:904.296.2020"
                        className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                      >
                        904.296.2020
                      </a>
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

