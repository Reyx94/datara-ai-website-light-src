export type VendorPlan = "Basic" | "Pro" | "Sponsor" | "Enterprise / Lab Partner"
export type VendorStatus =
  | "Verified"
  | "Verified Pro"
  | "Sponsor"
  | "Needs Update"
  | "Under Review"

export interface Vendor {
  slug: string
  name: string
  plan: VendorPlan
  status: VendorStatus
  region: string
  shipsTo: string
  categories: string[]
  website: string
  verificationDate: string
  lastReviewDate: string
  coaAvailable: boolean
  labTested: boolean
  affiliateEnabled: boolean
  summary: string
}

// Example / placeholder directory entries. Real entries are created only after the
// paid Vendor Verification Program review described in /vendor-application.
export const vendors: Vendor[] = [
  {
    slug: "example-labs",
    name: "Example Analytical Labs",
    plan: "Enterprise / Lab Partner",
    status: "Verified Pro",
    region: "EU",
    shipsTo: "EU, UK",
    categories: ["Third-party lab testing", "Purity analysis", "COA verification"],
    website: "https://example.com",
    verificationDate: "2026-03-12",
    lastReviewDate: "2026-06-01",
    coaAvailable: true,
    labTested: true,
    affiliateEnabled: true,
    summary:
      "Independent analytical laboratory offering purity and identity testing. Listed as a Lab Partner — a testing service, not a peptide seller.",
  },
  {
    slug: "sample-research-supply",
    name: "Sample Research Supply",
    plan: "Pro",
    status: "Verified",
    region: "EU",
    shipsTo: "EU",
    categories: ["Research reagents", "Cosmetic peptides", "Lab consumables"],
    website: "https://example.org",
    verificationDate: "2026-02-01",
    lastReviewDate: "2026-05-20",
    coaAvailable: true,
    labTested: true,
    affiliateEnabled: false,
    summary:
      "Placeholder verified vendor entry demonstrating the profile layout. Product legality is the vendor's responsibility; listing is not an endorsement.",
  },
  {
    slug: "peptide-education-co",
    name: "Peptide Education Co.",
    plan: "Basic",
    status: "Verified",
    region: "US",
    shipsTo: "Worldwide (digital)",
    categories: ["Books & courses", "Education", "Software"],
    website: "https://example.net",
    verificationDate: "2026-04-05",
    lastReviewDate: "2026-06-10",
    coaAvailable: false,
    labTested: false,
    affiliateEnabled: true,
    summary:
      "Education and software partner (Green product class). Demonstrates a non-product commercial listing.",
  },
]

export function getVendor(slug: string): Vendor | undefined {
  return vendors.find((v) => v.slug === slug)
}
