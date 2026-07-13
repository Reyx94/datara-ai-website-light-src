// Supported locales: all EU official languages (+ a few common European ones).
// English is the default / fallback. Locales without a full dictionary fall back
// to English strings until translations are added.

export interface LocaleMeta {
  code: string
  label: string // endonym (native name)
  english: string
  flag: string // emoji flag
}

export const LOCALES: LocaleMeta[] = [
  { code: "en", label: "English", english: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", english: "German", flag: "🇩🇪" },
  { code: "fr", label: "Français", english: "French", flag: "🇫🇷" },
  { code: "es", label: "Español", english: "Spanish", flag: "🇪🇸" },
  { code: "it", label: "Italiano", english: "Italian", flag: "🇮🇹" },
  { code: "pt", label: "Português", english: "Portuguese", flag: "🇵🇹" },
  { code: "nl", label: "Nederlands", english: "Dutch", flag: "🇳🇱" },
  { code: "pl", label: "Polski", english: "Polish", flag: "🇵🇱" },
  { code: "sv", label: "Svenska", english: "Swedish", flag: "🇸🇪" },
  { code: "da", label: "Dansk", english: "Danish", flag: "🇩🇰" },
  { code: "fi", label: "Suomi", english: "Finnish", flag: "🇫🇮" },
  { code: "el", label: "Ελληνικά", english: "Greek", flag: "🇬🇷" },
  { code: "cs", label: "Čeština", english: "Czech", flag: "🇨🇿" },
  { code: "ro", label: "Română", english: "Romanian", flag: "🇷🇴" },
  { code: "hu", label: "Magyar", english: "Hungarian", flag: "🇭🇺" },
  { code: "bg", label: "Български", english: "Bulgarian", flag: "🇧🇬" },
  { code: "hr", label: "Hrvatski", english: "Croatian", flag: "🇭🇷" },
  { code: "sk", label: "Slovenčina", english: "Slovak", flag: "🇸🇰" },
  { code: "sl", label: "Slovenščina", english: "Slovenian", flag: "🇸🇮" },
  { code: "et", label: "Eesti", english: "Estonian", flag: "🇪🇪" },
  { code: "lv", label: "Latviešu", english: "Latvian", flag: "🇱🇻" },
  { code: "lt", label: "Lietuvių", english: "Lithuanian", flag: "🇱🇹" },
  { code: "ga", label: "Gaeilge", english: "Irish", flag: "🇮🇪" },
  { code: "mt", label: "Malti", english: "Maltese", flag: "🇲🇹" },
  { code: "no", label: "Norsk", english: "Norwegian", flag: "🇳🇴" },
]

export const LOCALE_CODES = LOCALES.map((l) => l.code)
export type LocaleCode = string

export const DEFAULT_LOCALE = "en"
export const LOCALE_COOKIE = "NEXT_LOCALE"

export function isSupportedLocale(code: string | undefined | null): boolean {
  return !!code && LOCALE_CODES.includes(code)
}

export function getLocaleMeta(code: string): LocaleMeta {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0]
}

// Best-effort match of an Accept-Language header to a supported locale.
export function matchLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return DEFAULT_LOCALE
  const parts = acceptLanguage.split(",").map((p) => p.split(";")[0].trim().toLowerCase())
  for (const p of parts) {
    const base = p.split("-")[0]
    if (LOCALE_CODES.includes(base)) return base
  }
  return DEFAULT_LOCALE
}
