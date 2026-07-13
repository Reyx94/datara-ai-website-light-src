# peptides.cx — The Peptide Community Exchange

An educational community platform for peptide research, real-world experience reports, safety
discussion, and verified vendor transparency. **Content is not medical advice.**

Built with Next.js 15 (App Router), Tailwind CSS, and shadcn/ui.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Structure

| Area | Path |
| --- | --- |
| Homepage | `src/app/page.tsx` |
| Forum categories | `src/app/forum/` (config in `src/lib/site.ts`) |
| Peptide Library (evidence-scored) | `src/app/library/` (data in `src/lib/peptides.ts`) |
| Experience report form | `src/app/new-experience-report/` |
| Vendors & application | `src/app/vendors/`, `src/app/vendor-application/` |
| Deals (labeled advertising) | `src/app/deals/` |
| Compliance UI (disclaimers, ad labels, cookie consent, report button) | `src/components/compliance/` |
| Legal pages | `src/app/{privacy,terms,imprint,guidelines,affiliate-disclosure,cookie-settings}/` |

## Compliance notes

- All advertising is labeled (Ad / Sponsored / Affiliate Link / Paid Placement).
- Non-essential cookies (analytics, affiliate tracking, marketing) stay off until the user opts in;
  rejecting is as easy as accepting (`src/components/compliance/cookie-consent.tsx`).
- Privacy, Terms, and Imprint pages are structural templates — replace with reviewed legal text
  before launch.
