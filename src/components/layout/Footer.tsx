"use client"

import Link from "next/link"
import { footerNav } from "@/lib/site"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const openCookieSettings = () => {
    window.dispatchEvent(new Event("open-cookie-settings"))
  }

  return (
    <footer className="w-full border-t border-border/60 bg-background py-10">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        <div className="flex flex-col gap-2 lg:col-span-1">
          <Link href="/" className="flex items-baseline gap-1">
            <span className="text-lg font-bold gradient-text">peptides</span>
            <span className="text-lg font-bold text-foreground/70">.cx</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            The Peptide Community Exchange. Research, real-world reports, safety discussion, and verified
            vendor transparency.
          </p>
        </div>

        {footerNav.map((group) => (
          <div key={group.title} className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">{group.title}</h3>
            <nav className="flex flex-col gap-2">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              {group.title === "Legal & Compliance" && (
                <button
                  onClick={openCookieSettings}
                  className="text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Manage cookies
                </button>
              )}
            </nav>
          </div>
        ))}
      </div>

      <div className="container mt-8 border-t border-border/60 pt-6">
        <p className="text-xs leading-relaxed text-muted-foreground">
          peptides.cx is an educational community and commercial information platform. Content on this website
          is not medical advice, diagnosis, treatment, prescribing guidance, dosing instruction, or emergency
          support. Always consult a qualified medical professional before making health-related decisions.
          Vendor listings and affiliate links may be paid placements and do not equal medical endorsement.
        </p>
        <div className="mt-4 flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-sm text-muted-foreground">&copy; {currentYear} peptides.cx</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/imprint" className="text-sm text-muted-foreground hover:text-foreground">
              Imprint
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/affiliate-disclosure" className="text-sm text-muted-foreground hover:text-foreground">
              Affiliate Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
