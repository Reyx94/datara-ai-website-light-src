"use client"

import { LOCALES } from "@/i18n/config"
import { useI18n } from "./i18n-provider"

// First-visit language chooser. Rendered as an overlay (not a redirect) so it
// never blocks crawlers or harms SEO — bots and users can still see the page
// behind it, and choosing a flag sets the locale cookie.
export function LanguageGate() {
  const { dict, hasLocaleCookie, setLocale } = useI18n()

  if (hasLocaleCookie) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-2xl font-bold gradient-text">peptides</span>
          <span className="text-2xl font-bold text-foreground/70">.cx</span>
        </div>
        <h2 className="mt-4 text-center text-xl font-semibold">{dict.languageGate.title}</h2>
        <p className="mt-1 text-center text-sm text-foreground/70">{dict.languageGate.subtitle}</p>

        <div className="mt-6 grid max-h-72 grid-cols-2 gap-2 overflow-y-auto sm:grid-cols-3">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => setLocale(l.code)}
              className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2.5 text-left text-sm transition-colors hover:border-primary hover:bg-accent"
            >
              <span aria-hidden className="text-xl">
                {l.flag}
              </span>
              <span className="truncate font-medium">{l.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
