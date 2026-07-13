export interface NavItem {
  label: string
  href: string
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Forum", href: "/forum" },
  { label: "Library", href: "/library" },
  { label: "Experience Reports", href: "/experience-reports" },
  { label: "Safety", href: "/safety" },
  { label: "Vendors", href: "/vendors" },
  { label: "Research", href: "/research" },
  { label: "Experts", href: "/experts" },
  { label: "Deals", href: "/deals" },
  { label: "Premium", href: "/premium" },
  { label: "About", href: "/about" },
]

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Community",
    items: [
      { label: "Forum", href: "/forum" },
      { label: "Experience Reports", href: "/experience-reports" },
      { label: "Experts", href: "/experts" },
      { label: "Community Guidelines", href: "/guidelines" },
    ],
  },
  {
    title: "Knowledge",
    items: [
      { label: "Peptide Library", href: "/library" },
      { label: "Safety & Side Effects", href: "/safety" },
      { label: "Research Digest", href: "/research" },
    ],
  },
  {
    title: "Commercial",
    items: [
      { label: "Verified Vendors", href: "/vendors" },
      { label: "Deals", href: "/deals" },
      { label: "Advertise", href: "/advertise" },
      { label: "Become a Vendor", href: "/vendor-application" },
      { label: "Premium", href: "/premium" },
    ],
  },
  {
    title: "Legal & Compliance",
    items: [
      { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Imprint", href: "/imprint" },
      { label: "Cookie Settings", href: "/cookie-settings" },
    ],
  },
]

export interface ForumCategory {
  slug: string
  title: string
  description: string
  subcategories: string[]
  restricted?: string // note about who can post / special rules
}

export const forumCategories: ForumCategory[] = [
  {
    slug: "start-here",
    title: "Start Here",
    description:
      "Start here before posting. Learn how the community works, what is allowed, what is not, and how to participate responsibly.",
    subcategories: [
      "Welcome",
      "Community Guidelines",
      "How to Use Peptides.cx",
      "Safety Notice",
      "Forum Announcements",
      "Feature Requests",
    ],
  },
  {
    slug: "peptide-basics",
    title: "Peptide Basics",
    description: "Foundational knowledge for beginners and advanced members.",
    subcategories: [
      "What Are Peptides?",
      "Peptides vs Proteins",
      "Peptides vs Hormones",
      "Research Use vs Medical Use",
      "Approved Peptide Drugs",
      "Glossary",
      "Beginner Questions",
    ],
  },
  {
    slug: "peptide-library",
    title: "Peptide Library Discussion",
    description: "Discussion of individual peptides, each linked to its Library page.",
    subcategories: [
      "BPC-157",
      "TB-500 / Thymosin Beta-4",
      "GHK-Cu",
      "KPV",
      "Semax",
      "Selank",
      "Epitalon",
      "MOTS-c",
      "DSIP",
      "Other Peptides",
    ],
  },
  {
    slug: "research-evidence",
    title: "Research & Evidence",
    description: "Studies, papers, mechanisms, and evidence appraisal.",
    subcategories: [
      "Human Studies",
      "Animal Studies",
      "Mechanisms of Action",
      "Clinical Trials",
      "Reviews & Meta-Analysis",
      "Evidence Gaps",
      "Study Requests",
    ],
  },
  {
    slug: "experience-reports",
    title: "Experience Reports",
    description:
      "Structured, first-person reports. Dose and administration context may appear as personal history — never as a recommendation.",
    subcategories: [
      "Injury & Recovery",
      "Skin & Hair",
      "Gut & Inflammation",
      "Sleep & Mood",
      "Cognitive",
      "Side Effect Reports",
      "No Effect / Negative Reports",
      "Doctor-Supervised Reports",
    ],
    restricted:
      "Posts here are created through a structured form, not a free text box. Every report is a personal anecdote, not medical advice.",
  },
  {
    slug: "dosing-context",
    title: "Dosing Context",
    description:
      "Discuss dose context found in studies, prescriptions, and clinical settings. This area is not for individualized dosing advice, dose calculation, protocol requests, or medical recommendations.",
    subcategories: [
      "Doses in Studies",
      "Doses in Supervised Reports",
      "Study vs Anecdote",
      "General Safety Discussion",
    ],
    restricted:
      "Not allowed: “what should I take”, dose calculation for a person, protocol requests, or stacks. Every thread carries a dose-context-only warning box.",
  },
  {
    slug: "administration-safety",
    title: "Administration Safety",
    description:
      "Discuss administration-related experiences, adverse reactions, irritation, sterility concerns, and when to seek professional help.",
    subcategories: [
      "Administration Experiences",
      "Site Reactions",
      "Irritation & Swelling",
      "Sterility Concerns",
      "Storage & Handling",
      "When to Seek Medical Help",
    ],
    restricted:
      "Step-by-step injection tutorials, reconstitution guides, and procedural instructions are not allowed.",
  },
  {
    slug: "safety-side-effects",
    title: "Safety & Side Effects",
    description: "Safety discussion and structured adverse-reaction reports.",
    subcategories: [
      "Side Effects",
      "Adverse Reactions",
      "Risk Signals",
      "Interactions",
      "Contraindications",
      "Lab Markers",
      "Emergency Warning Signs",
      "Safety Alerts",
    ],
  },
  {
    slug: "vendors",
    title: "Vendors",
    description: "Commercial area for verified vendors. Only verified commercial accounts may post here.",
    subcategories: [
      "Vendor Announcements",
      "Vendor Q&A",
      "COA & Lab Testing",
      "Shipping & Regions",
      "Product Quality Discussion",
      "Vendor Support",
      "Vendor Complaints",
    ],
    restricted:
      "Only verified commercial accounts may post. Members may ask questions, review, or file complaints. Vendors may not advertise inside ordinary experience reports.",
  },
  {
    slug: "vendor-reviews",
    title: "Vendor Reviews",
    description: "Moderated reviews of verified vendors. Affiliate links and discount codes from members are not allowed.",
    subcategories: ["Delivery & Packaging", "Support Experience", "COA & Quality", "Complaints"],
    restricted:
      "Reviews are moderated to prevent fake reviews, extortion, spam, and health claims. Medical-outcome claims are not permitted.",
  },
]

export const userRoles = [
  { name: "Guest", rights: "Read public content, vendor directory, deals. No posting, reviews, or DMs." },
  { name: "Registered Member", rights: "Post, comment, create experience reports and vendor reviews, report content, limited DMs." },
  { name: "Trusted Member", rights: "Higher posting limits, less pre-moderation, can suggest tags and flag content for review." },
  { name: "Premium Member", rights: "Premium content, research archive, watchlists, advanced search, deal alerts." },
  { name: "Verified Expert", rights: "Expert badge, expert comments, AMA participation. No product promotion beyond disclosed conflicts." },
  { name: "Verified Vendor", rights: "Vendor profile and badge, vendor areas. No experience reports, DM acquisition, or hidden ads." },
  { name: "Vendor Pro", rights: "Featured placement, vendor Q&A write access, deal submissions." },
  { name: "Sponsor Vendor", rights: "Banner ads, sponsored newsletter and explainers, AMAs (quality/safety only)." },
  { name: "Moderator", rights: "Review posts, move categories, warn users, handle reports, review vendor posts." },
  { name: "Admin", rights: "Full rights: vendor approval, billing, compliance settings, ad management, audit logs." },
]
