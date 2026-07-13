import type { MetadataRoute } from "next"
import { peptides } from "@/lib/peptides"
import { vendors } from "@/lib/vendors"
import { forumCategories } from "@/lib/site"

const BASE = "https://peptides.cx"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "daily" },
    { path: "/library", priority: 0.9, changeFrequency: "weekly" },
    { path: "/forum", priority: 0.9, changeFrequency: "daily" },
    { path: "/experience-reports", priority: 0.8, changeFrequency: "daily" },
    { path: "/safety", priority: 0.8, changeFrequency: "weekly" },
    { path: "/research", priority: 0.8, changeFrequency: "weekly" },
    { path: "/vendors", priority: 0.7, changeFrequency: "weekly" },
    { path: "/experts", priority: 0.6, changeFrequency: "monthly" },
    { path: "/premium", priority: 0.5, changeFrequency: "monthly" },
    { path: "/about", priority: 0.5, changeFrequency: "monthly" },
    { path: "/guidelines", priority: 0.5, changeFrequency: "monthly" },
    { path: "/advertise", priority: 0.4, changeFrequency: "monthly" },
    { path: "/vendor-application", priority: 0.4, changeFrequency: "monthly" },
    { path: "/affiliate-disclosure", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
    { path: "/imprint", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cookie-settings", priority: 0.2, changeFrequency: "yearly" },
  ]

  const libraryPages = peptides.map((p) => ({
    url: `${BASE}/library/${p.slug}`,
    lastModified: new Date(p.lastReviewed),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  const forumPages = forumCategories.map((c) => ({
    url: `${BASE}/forum/${c.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.7,
  }))

  const vendorPages = vendors.map((v) => ({
    url: `${BASE}/vendors/${v.slug}`,
    lastModified: new Date(v.lastReviewDate),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  // /deals is intentionally excluded: it is a labeled advertising page with noindex.
  return [
    ...staticPages.map((p) => ({
      url: `${BASE}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...libraryPages,
    ...forumPages,
    ...vendorPages,
  ]
}
