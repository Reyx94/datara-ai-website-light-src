import { cookies, headers } from "next/headers"
import { DEFAULT_LOCALE, LOCALE_COOKIE, isSupportedLocale, matchLocale } from "./config"

// Resolves the active locale for the current request: cookie first, then the
// Accept-Language header, then the default.
export async function getCurrentLocale(): Promise<string> {
  const cookieStore = await cookies()
  const fromCookie = cookieStore.get(LOCALE_COOKIE)?.value
  if (isSupportedLocale(fromCookie)) return fromCookie as string

  const headerStore = await headers()
  return matchLocale(headerStore.get("accept-language"))
}

export async function hasLocaleCookie(): Promise<boolean> {
  const cookieStore = await cookies()
  return isSupportedLocale(cookieStore.get(LOCALE_COOKIE)?.value)
}

export { DEFAULT_LOCALE }
