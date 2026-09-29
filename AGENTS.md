<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:location-page-design-reference -->
# Location Page Design Reference — LOCKED

**When writing or updating any location page, you MUST use `src/app/mobile-tyre-fitting-chelvey/page.tsx` as the design reference.** Do NOT use `src/components/LocationPage.tsx` or any other page as your template.

## Chelvey Design Tokens (copy exactly)

| Element | Correct value |
|---|---|
| Hero background | `bg-zinc-900` |
| Hero image opacity | `opacity-30` |
| Hero gradient overlay | **None** — do not add one |
| Stats strip | `bg-orange-500 text-white` (solid orange, **not** white/zinc) |
| Stats strip values | `text-2xl font-extrabold` |
| Stats strip labels | `text-sm font-medium text-orange-100` |
| Section headings (h2/h3) | `font-extrabold` (never `font-bold`) |
| Primary buttons | `rounded-lg bg-orange-500 hover:bg-orange-600` (never `rounded-full`, never `bg-orange-600` as base) |
| Ghost/secondary buttons | `rounded-lg bg-white/10 ring-1 ring-white/20 hover:bg-white/20` |
| Cards | `ring-1 ring-zinc-100 shadow-sm` (never `border border-zinc-200`) |
| Section padding | `px-4 sm:px-6 lg:px-8` (never `px-6 sm:px-10`) |
| Section vertical padding | `py-20` (never `py-20 sm:py-28`) |
| Dark sections (roads/CTA) | `bg-zinc-900` with `opacity-20` image overlay (never `bg-zinc-950`) |
| Service/feature cards | Icon-based (`bg-orange-100 text-orange-600` icon box) — not image cards for "why mobile" / feature grids |
| Area pill links | `rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600 ring-1 ring-orange-200` |
| Area plain spans | `rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700` |
| Hero location badge | `inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1.5 text-sm font-medium text-orange-300 ring-1 ring-orange-500/30` with pin SVG |
| Step number circles | `rounded-full bg-orange-500 text-lg font-extrabold text-white` |
| Floating arrival badge on image | `rounded-xl bg-orange-500 px-5 py-3 text-white` |
| Internal text links | `text-orange-500 hover:underline` (light sections) or `text-orange-400 hover:underline` (dark sections) |

## Section Order (follow this structure)

1. Hero (`bg-zinc-900`, image `opacity-30`, no gradient, location badge, `font-extrabold` h1, two buttons)
2. Stats strip (`bg-orange-500`)
3. "Tyre Fitting Without Leaving Your Location" — icon-based flex items, image with floating badge
4. Emergency section (`bg-zinc-50`, 3 icon cards with `ring-1 ring-zinc-100`)
5. Vehicle services (image cards with `ring-1 ring-zinc-100`, orange CTA banner at bottom)
6. How it works / Steps (`bg-zinc-50`, numbered circles)
7. Roads section (`bg-zinc-900`, `opacity-20` image overlay)
8. Replacement tyres / tyre details checklist (`bg-white`)
9. `<TyreBrands />`
10. Why mobile / benefits (`bg-zinc-50`, icon cards)
11. Areas served (`bg-white`, pill links)
12. More services (`bg-zinc-50`, icon-based link cards)
13. `<Testimonials />`
14. `<Faq items={faqs} />`
15. Final CTA (`bg-zinc-900`, `opacity-20` image overlay)
<!-- END:location-page-design-reference -->

<!-- BEGIN:service-page-hero-design-reference -->
# Service Page Hero Design Reference — LOCKED

**When writing or updating the hero section of any service page** (mobile car/van/SUV tyre fitting, tyre replacement at home, emergency tyre fitting, and similar — as opposed to location pages, which follow the Chelvey reference above), **you MUST use the hero in `src/app/mobile-car-tyre-fitting-bristol/page.tsx` as the design reference.** Do not use a full-bleed dimmed-background hero for these pages — use the split two-column "hero card" layout described below.

## Hero Design Tokens (copy exactly)

| Element | Correct value |
|---|---|
| Hero section wrapper | `relative overflow-hidden bg-zinc-950 text-zinc-50` |
| Glow accents | two `aria-hidden` blurred circles: `absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl` and `absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-red-600/20 blur-3xl` |
| Content grid | `relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:py-28` |
| Eyebrow badge | `mb-4 inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.15em] text-orange-500`, text pattern `24/7 Mobile <Service> Fitting` |
| H1 | `text-4xl font-bold tracking-tight text-balance sm:text-5xl`, pattern `Mobile <Service> Fitting in Bristol` |
| Bold tagline line | `mt-3 text-lg font-medium text-zinc-200` — one short sentence stating the core promise (e.g. arrival time) |
| Body paragraph | `mt-4 max-w-xl leading-7 text-zinc-400`, with `text-orange-400 underline underline-offset-2 hover:text-orange-300` internal links |
| Benefits checklist | `mt-8 grid gap-3 sm:grid-cols-2`, each item `flex items-start gap-2 text-sm text-zinc-300` with an orange check SVG (`mt-0.5 h-4 w-4 shrink-0 text-orange-500`) — 4 short, accurate, non-fabricated claims about the service |
| Primary button | `flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500`, text pattern `Emergency Call: {phone}` |
| Secondary button | `flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900`, text `Book Online` |
| Hours pill | `mt-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-400`, text `Monday–Sunday: 24 Hours` |
| Hero image card | `relative mx-auto w-full max-w-lg` wrapping `relative overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl` around the `<Image>` (`h-auto w-full`, real `width`/`height`, `preload`) |
| Floating arrival badge | `absolute -bottom-6 -left-6 hidden rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4 shadow-xl sm:block`, value `text-2xl font-bold text-orange-500` (`45-60 min`), label `text-xs text-zinc-400` (`Average arrival time`) |

Below the hero, each service page keeps its own existing section order and content (stats strip, feature grids, steps, FAQs, etc.) — only the hero markup/styling is locked to this reference.
<!-- END:service-page-hero-design-reference -->
