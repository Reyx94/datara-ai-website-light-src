import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /deals carries a noindex meta tag; it stays crawlable so bots can see it.
      },
    ],
    sitemap: "https://peptides.cx/sitemap.xml",
  }
}
