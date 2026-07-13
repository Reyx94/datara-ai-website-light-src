"use client"

import { useState, useRef, useEffect } from "react"
import { Globe } from "lucide-react"
import { LOCALES, getLocaleMeta } from "@/i18n/config"
import { useI18n } from "./i18n-provider"

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = getLocaleMeta(locale)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-md border border-input bg-background px-2.5 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4" aria-hidden />
        <span aria-hidden>{current.flag}</span>
        <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-50 mt-2 max-h-80 w-56 overflow-y-auto rounded-lg border border-border bg-card p-1 shadow-lg"
        >
          {LOCALES.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={l.code === locale}
              onClick={() => {
                setLocale(l.code)
                setOpen(false)
              }}
              className={`flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-sm hover:bg-accent ${
                l.code === locale ? "font-semibold text-primary" : ""
              }`}
            >
              <span aria-hidden className="text-base">
                {l.flag}
              </span>
              <span className="flex-1">{l.label}</span>
              <span className="text-xs text-foreground/40">{l.english}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
