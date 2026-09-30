import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/site/page-header"
import { Prose } from "@/components/site/prose"
import { SafetyWarningBox } from "@/components/compliance/disclaimers"

export const metadata: Metadata = {
  title: "Community Guidelines",
  description:
    "What is allowed and not allowed on peptides.cx, how moderation works, the warning system, and how to appeal.",
}

export default function GuidelinesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Policy"
        title="Community Guidelines"
        description="Open enough for honest experience, controlled enough to keep the community safe and legal. Read this before posting."
      />
      <div className="container max-w-3xl py-10">
        <Prose>
          <h2>What is allowed</h2>
          <ul>
            <li>Discussion of peptides, studies, mechanisms, and evidence</li>
            <li>First-person experience reports, including personal dose and administration context</li>
            <li>Side effects, adverse reactions, lab values, and quality/COA discussion</li>
            <li>Regulatory developments and general safety topics</li>
            <li>Vendor transparency and clearly labeled affiliate advertising in permitted areas</li>
          </ul>

          <h2>What is not allowed</h2>
          <ul>
            <li>Uncontrolled member-to-member sales, or source/supplier requests</li>
            <li>Unverified vendors, vendor spam, or hidden affiliate links and discount codes</li>
            <li>Telegram/WhatsApp sourcing groups</li>
            <li>Fake reviews, cure claims, and misleading health claims</li>
            <li>Individual medical advice or dose calculation for another person</li>
            <li>Step-by-step injection or reconstitution tutorials</li>
            <li>Advising minors, or advertising prescription medicines to consumers where not permitted</li>
          </ul>

          <SafetyWarningBox title="Automatic review, not automatic deletion">
            <p>
              Certain keywords (for example: source, supplier, discount code, calculate dose, inject,
              reconstitute, cure, guaranteed, minor) route a post into the moderation queue. Content is
              reviewed by a human before any action — it is not deleted automatically.
            </p>
          </SafetyWarningBox>

          <h2>Affiliate & commercial rules</h2>
          <p>
            Affiliate links and discount codes are only allowed through verified vendor and commercial areas.
            If an ordinary member posts an external shop link, it is converted to plain text or removed and the
            post is queued for review. See the{" "}
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> for details.
          </p>

          <h2>Moderation actions</h2>
          <p>
            Moderators may approve, edit with a note, add a warning label, move a category, remove a link, hide
            a post, request clarification, warn a user, suspend or ban an account, or escalate to an admin.
          </p>

          <h2>Warning system</h2>
          <ol>
            <li>Soft reminder</li>
            <li>Official warning</li>
            <li>Temporary suspension</li>
            <li>Permanent ban</li>
          </ol>

          <h2>Appeals</h2>
          <p>
            Moderation decisions can be appealed. Submit an appeal from your account, and a different moderator
            or an admin reviews it. We keep audit logs of moderation decisions for accountability.
          </p>
        </Prose>
      </div>
    </div>
  )
}
