"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import ThemeToggle from "@/components/ui/theme-toggle"
import { mainNav } from "@/lib/site"
import { useI18n } from "@/components/i18n/i18n-provider"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { dict } = useI18n()

  // Map nav hrefs to translated labels, falling back to the static label.
  const labelFor = (href: string, fallback: string) => {
    const map: Record<string, string> = {
      "/": dict.nav.home,
      "/forum": dict.nav.forum,
      "/library": dict.nav.library,
      "/experience-reports": dict.nav.experienceReports,
      "/safety": dict.nav.safety,
      "/vendors": dict.nav.vendors,
      "/research": dict.nav.research,
      "/experts": dict.nav.experts,
      "/deals": dict.nav.deals,
      "/premium": dict.nav.premium,
      "/about": dict.nav.about,
    }
    return map[href] ?? fallback
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-baseline gap-1">
          <span className="text-xl font-bold gradient-text">peptides</span>
          <span className="text-xl font-bold text-foreground/70">.cx</span>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-5">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {labelFor(item.href, item.label)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href="/login"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            {dict.nav.login}
          </Link>
          <Link
            href="/login"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            {dict.nav.join}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-b border-border/60 bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="container flex flex-col py-3">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {labelFor(item.href, item.label)}
              </Link>
            ))}
            <Link
              href="/login"
              className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
              onClick={() => setIsMenuOpen(false)}
            >
              {dict.nav.login} / {dict.nav.join}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
