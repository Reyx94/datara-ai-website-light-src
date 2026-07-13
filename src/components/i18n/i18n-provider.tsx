"use client"

import { createContext, useContext, useCallback } from "react"
import { useRouter } from "next/navigation"
import type { Dictionary } from "@/i18n/dictionaries"
import { LOCALE_COOKIE } from "@/i18n/config"

interface I18nContextValue {
  locale: string
  dict: Dictionary
  hasLocaleCookie: boolean
  setLocale: (code: string) => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({
  locale,
  dict,
  hasLocaleCookie,
  children,
}: {
  locale: string
  dict: Dictionary
  hasLocaleCookie: boolean
  children: React.ReactNode
}) {
  const router = useRouter()

  const setLocale = useCallback(
    (code: string) => {
      // Persist for a year and refresh server components so strings update.
      document.cookie = `${LOCALE_COOKIE}=${code}; path=/; max-age=31536000; samesite=lax`
      router.refresh()
    },
    [router],
  )

  return (
    <I18nContext.Provider value={{ locale, dict, hasLocaleCookie, setLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
