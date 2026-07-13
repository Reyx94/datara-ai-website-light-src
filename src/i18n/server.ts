import { cookies, headers } from "next/headers"
import { DEFAULT_LOCALE, LOCALE_COOKIE, isSupportedLocale, matchLocale } from "./config"

// Resolves the active locale for the current request: cookie first, then the
// Accept-Language header, then the default.
//
// Wrapped in try/catch so it is safe to call from components that may be
// statically prerendered at build time: on Vercel, calling cookies()/headers()
// during static generation throws a DynamicServerError. Swallowing it lets the
// page prerender in the default locale instead of failing the build.
export async function getCurrentLocale(): Promise<string> {
  try {
    const cookieStore = await cookies()
    const fromCookie = cookieStore.get(LOCALE_COOKIE)?.value
    if (isSupportedLocale(fromCookie)) return fromCookie as string

    const headerStore = await headers()
    return matchLocale(headerStore.get("accept-language"))
  } catch {
    return DEFAULT_LOCALE
  }
}

export async function hasLocaleCookie(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    return isSupportedLocale(cookieStore.get(LOCALE_COOKIE)?.value)
  } catch {
    return false
  }
}

export { DEFAULT_LOCALE }
