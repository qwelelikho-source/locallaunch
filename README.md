# LocalLaunch

Marketing site for LocalLaunch, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
├── page.tsx            → Homepage (Hero → Stats → Problem → Services → Industries → Portfolio → Pricing → Process → Why Us → CTA)
├── services/page.tsx
├── work/page.tsx
├── pricing/page.tsx
├── about/page.tsx
├── contact/page.tsx
components/
├── navbar.tsx
├── hero.tsx
├── browser-mockup.tsx   → reusable "demo website in a browser" visual used in hero + portfolio
├── trust-stats.tsx
├── problem.tsx
├── services.tsx
├── industries.tsx
├── portfolio.tsx
├── pricing.tsx
├── process.tsx
├── why-us.tsx
├── cta.tsx
├── contact-form.tsx
└── footer.tsx
```

## Design tokens (tailwind.config.ts)

| Token            | Hex       | Use                     |
| ---------------- | --------- | ----------------------- |
| `ll-bg`           | `#0B1220` | Main dark background    |
| `ll-card`         | `#111827` | Cards / sections        |
| `ll-light`        | `#F8FAFC` | Main light background   |
| `ll-blue`         | `#2563EB` | Primary buttons         |
| `ll-blue-hover`   | `#60A5FA` | Hover / highlights      |
| `ll-text-secondary` | `#CBD5E1` | Body / secondary text |
| `ll-heading`      | `#FFFFFF` | Headings                |

Fonts: **Space Grotesk** for headings (`font-display`), **Inter** for body copy (`font-sans`), loaded via `next/font/google` in `app/layout.tsx`.

## Still to do before launch

- [ ] Wire `components/contact-form.tsx` up to a real backend (an API route + email, Supabase table, or a service like Formspree).
- [ ] Replace the WhatsApp link placeholder number in `app/contact/page.tsx`.
- [ ] Add real social links in `components/footer.tsx`.
- [ ] Swap the `browser-mockup.tsx` demo previews for real screenshots once you build out the CapeClean / FixFlow / BuildCore / UrbanCut concept sites (or real client sites once you land your first ones).
- [ ] Add a favicon and `opengraph-image` in `app/`.
- [ ] Once you're ready to scale, add `dashboard/`, `clients/`, `invoices/`, `projects/`, `leads/` routes per the brand-direction doc — that's when LocalLaunch becomes a platform.

## Stack

Next.js 14 · TypeScript · Tailwind CSS · lucide-react icons. Supabase and Vercel deployment are recommended in the brand-direction doc for when you add booking/database features.
