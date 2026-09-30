"use client"

import { useEffect, useState } from "react"
import { readConsent, type ConsentCategories } from "@/components/compliance/cookie-consent"

export function CookieSettingsClient() {
  const [consent, setConsent] = useState<ConsentCategories | null>(null)

  useEffect(() => {
    setConsent(readConsent())
    const handler = (e: Event) => setConsent((e as CustomEvent).detail as ConsentCategories)
    window.addEventListener("consentchange", handler)
    return () => window.removeEventListener("consentchange", handler)
  }, [])

  const rows: { label: string; value: boolean }[] = [
    { label: "Necessary", value: true },
    { label: "Analytics", value: consent?.analytics ?? false },
    { label: "Affiliate Tracking", value: consent?.affiliate ?? false },
    { label: "Marketing", value: consent?.marketing ?? false },
  ]

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/60">Your current choices</h2>
      <dl className="mt-3 divide-y divide-border">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between py-2 text-sm">
            <dt className="font-medium">{r.label}</dt>
            <dd className={r.value ? "text-emerald-600" : "text-foreground/50"}>{r.value ? "On" : "Off"}</dd>
          </div>
        ))}
      </dl>
      {!consent && (
        <p className="mt-3 text-xs text-foreground/60">
          No choice saved yet — the consent banner will ask when you interact with the site.
        </p>
      )}
      <button
        onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
        className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Change cookie choices
      </button>
    </div>
  )
}
