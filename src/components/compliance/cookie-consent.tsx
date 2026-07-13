"use client"

import { useEffect, useState } from "react"

export type ConsentCategories = {
  necessary: true
  analytics: boolean
  affiliate: boolean
  marketing: boolean
}

const STORAGE_KEY = "peptidescx-consent"

const defaultConsent: ConsentCategories = {
  necessary: true,
  analytics: false,
  affiliate: false,
  marketing: false,
}

export function readConsent(): ConsentCategories | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as ConsentCategories) : null
  } catch {
    return null
  }
}

function writeConsent(value: ConsentCategories) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    window.dispatchEvent(new CustomEvent("consentchange", { detail: value }))
  } catch {
    /* ignore */
  }
}

/**
 * Consent Management banner. Affiliate tracking, analytics, and marketing
 * technologies must stay disabled until the user actively opts in. Rejecting is
 * exactly as easy as accepting (no dark patterns). Opening this from the Cookie
 * Settings page lets users change their choice at any time.
 */
export function CookieConsent({ forceOpen = false }: { forceOpen?: boolean }) {
  const [open, setOpen] = useState(false)
  const [prefs, setPrefs] = useState<ConsentCategories>(defaultConsent)
  const [customize, setCustomize] = useState(false)

  useEffect(() => {
    if (forceOpen) {
      setOpen(true)
      setCustomize(true)
      const existing = readConsent()
      if (existing) setPrefs(existing)
      return
    }
    const existing = readConsent()
    if (!existing) setOpen(true)
    else setPrefs(existing)
  }, [forceOpen])

  useEffect(() => {
    const handler = () => {
      setOpen(true)
      setCustomize(true)
      const existing = readConsent()
      if (existing) setPrefs(existing)
    }
    window.addEventListener("open-cookie-settings", handler)
    return () => window.removeEventListener("open-cookie-settings", handler)
  }, [])

  if (!open) return null

  const acceptAll = () => {
    const value: ConsentCategories = { necessary: true, analytics: true, affiliate: true, marketing: true }
    writeConsent(value)
    setOpen(false)
  }
  const rejectAll = () => {
    const value: ConsentCategories = { ...defaultConsent }
    writeConsent(value)
    setOpen(false)
  }
  const savePrefs = () => {
    writeConsent({ ...prefs, necessary: true })
    setOpen(false)
  }

  const Toggle = ({
    id,
    label,
    description,
    checked,
    disabled,
    onChange,
  }: {
    id: string
    label: string
    description: string
    checked: boolean
    disabled?: boolean
    onChange?: (v: boolean) => void
  }) => (
    <label htmlFor={id} className="flex cursor-pointer items-start justify-between gap-4 py-2">
      <span>
        <span className="block text-sm font-medium text-foreground">{label}</span>
        <span className="block text-xs text-foreground/70">{description}</span>
      </span>
      <input
        id={id}
        type="checkbox"
        className="mt-1 h-4 w-4 flex-none accent-[hsl(var(--primary))]"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
    </label>
  )

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4">
      <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur">
        <h2 className="text-base font-semibold text-foreground">Your privacy choices</h2>
        <p className="mt-1 text-sm text-foreground/75">
          We use necessary cookies to run the site. Analytics, affiliate tracking, and marketing technologies
          stay off until you turn them on. You can change this any time under Cookie Settings.
        </p>

        {customize && (
          <div className="mt-4 divide-y divide-border rounded-lg border border-border px-4">
            <Toggle
              id="c-necessary"
              label="Necessary"
              description="Required for core functionality. Always on."
              checked
              disabled
            />
            <Toggle
              id="c-analytics"
              label="Analytics"
              description="Privacy-friendly usage measurement."
              checked={prefs.analytics}
              onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
            />
            <Toggle
              id="c-affiliate"
              label="Affiliate Tracking"
              description="Attributes purchases made through affiliate links. Off until you opt in."
              checked={prefs.affiliate}
              onChange={(v) => setPrefs((p) => ({ ...p, affiliate: v }))}
            />
            <Toggle
              id="c-marketing"
              label="Marketing"
              description="Advertising and campaign measurement technologies."
              checked={prefs.marketing}
              onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
            />
          </div>
        )}

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button
            onClick={rejectAll}
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            Reject all
          </button>
          {customize ? (
            <button
              onClick={savePrefs}
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Save choices
            </button>
          ) : (
            <button
              onClick={() => setCustomize(true)}
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Customize
            </button>
          )}
          <button
            onClick={acceptAll}
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
