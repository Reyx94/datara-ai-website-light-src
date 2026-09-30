import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/site/page-header"
import { Prose } from "@/components/site/prose"
import { AffiliateDisclosure } from "@/components/compliance/disclaimers"

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "How affiliate links, sponsored placements, and advertising work on peptides.cx, where they may and may not appear, and how tracking consent is handled.",
}

export default function AffiliateDisclosurePage() {
  return (
    <div>
      <PageHeader eyebrow="Transparency" title="Affiliate Disclosure & Advertising Policy" />
      <div className="container max-w-3xl space-y-6 py-10">
        <AffiliateDisclosure />
        <Prose>
          <h2>The short version</h2>
          <p>
            Some links on peptides.cx are affiliate links or paid placements. If you click or purchase through
            them, we may earn a commission. These relationships are always clearly marked and never influence
            our editorial standards, moderation rules, or safety policies. Affiliate placement is not a medical
            endorsement.
          </p>

          <h2>Where affiliate links may appear</h2>
          <ul>
            <li>Vendor directory and vendor profiles</li>
            <li>The <Link href="/deals">Deals</Link> page and comparison pages</li>
            <li>Sponsored articles and the newsletter</li>
            <li>Library entries, only where the product category is legally permitted</li>
            <li>Research tools, lab testing, wearables, and education pages</li>
          </ul>

          <h2>Where they may never appear</h2>
          <ul>
            <li>Ordinary member posts and comments</li>
            <li>Private messages</li>
            <li>Experience reports, side-effect reports, dosing-context and administration-safety threads</li>
            <li>Posts by non-commercial users</li>
          </ul>

          <h2>Automatic handling</h2>
          <p>
            If an ordinary member posts an external shop link, it is automatically converted to plain text or
            removed and the post is placed in the moderation queue, with a notice that commercial links are only
            allowed through verified vendor areas.
          </p>

          <h2>Labels we use</h2>
          <p>
            Advertising is labeled as <strong>Ad</strong>, <strong>Sponsored</strong>,{" "}
            <strong>Affiliate Link</strong>, <strong>Paid Placement</strong>, or <strong>Partner Offer</strong>.
          </p>

          <h2>Tracking & consent</h2>
          <p>
            Affiliate tracking and other non-essential technologies stay disabled until you opt in through our
            consent banner. You can accept or reject by category (Necessary, Analytics, Affiliate Tracking,
            Marketing), and refusing is exactly as easy as accepting. Manage your choice any time on the{" "}
            <Link href="/cookie-settings">Cookie Settings</Link> page.
          </p>

          <h2>Prescription medicines</h2>
          <p>
            We do not run consumer affiliate promotion or public deals for prescription-only medicines, and we
            do not facilitate access to them.
          </p>
        </Prose>
      </div>
    </div>
  )
}
