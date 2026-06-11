# Blush Landing Page Audit

Date: 2026-06-08

## Current Structure

- Stack: React 18, TypeScript, Vite 5, Tailwind CSS, Framer Motion.
- Entry: root `index.html` mounts `src/main.tsx`; `src/App.tsx` composes the single landing page.
- Main content files: `Hero`, `BrandStory`, `Services`, `Process`, `DailyVitrineGallery`, `Testimonials`, `FAQ`, `FinalCTA`, `Footer`, `Navbar`.
- Assets: 21 local vitrine WebP images in `src/assets/vitrine`, a public hero image at `public/hero.webp`, a generated hero image at `public/generated-hero.png`, and a lightweight MP4 at `public/media/hero.mp4`.
- Routing: single-page anchors only.
- Deployment assumption: Vite build output in `dist`.

## Strengths

- Real Blush floral images are already available and reasonably optimized.
- WhatsApp, Instagram, website, and phone contact paths exist.
- The brand notes in `docs/brain` clearly define a refined, cinematic, floral direction.
- The build stack is simple enough to keep performance under control.

## Weaknesses Found

- The previous page leaned on heavy visual effects: custom cursor, splash screen, animated gradients, glow particles, wave dividers, and glass cards.
- Copy included generic florist phrasing, salesy emotional lines, fabricated-looking testimonial names, unverified numeric proof, and mixed-language text errors.
- Navigation appeared only after scrolling past the hero, delaying conversion for decisive visitors.
- Root SEO metadata was present but keyword-heavy and less aligned with the refined Persian positioning.
- JSON-LD used LocalBusiness/Florist signals without documenting which details were verified; exact address and opening hours were not available.
- Gallery ordering was alphabetical by generated URL rather than curated by visual strength.
- Lint script existed, but no ESLint config was present.

## Brand Mismatches

- Too much motion and decorative UI made the page feel closer to a template than a luxury floral studio.
- Some copy sounded like a general flower shop rather than an experience-led gift brand.
- Fake testimonials and hard metrics risked reducing trust.
- Hero treatment depended on atmosphere but did not quickly explain what Blush is and how to order.

## Technical And Performance Problems

- `node_modules` was missing, so `tsc` and `eslint` could not run until dependencies were installed.
- Hero used video-first logic despite a strong lightweight static hero candidate.
- Splash screen and custom cursor added perceived friction without conversion value.
- CSS contained many unused animation utilities.

## SEO/GEO Gaps

- Needed clearer Persian-first title and meta description around Blush, Shiraz, luxury floral gifts, flower boxes, bespoke bouquets, and gifting.
- Needed FAQ content that answer engines can parse.
- Needed structured data limited to verified information.
- Needed more descriptive alt text and semantic sectioning.

## Public Narrative Safety

- No public ownership/management claims should be added.
- Avoid founder-led language, personal signatures, internal history, and sensitive structure.
- Safe public language: تیم بلاش، استودیو بلاش، تجربه بلاش، نگاه طراحی بلاش، استانداردهای بلاش.

## Recommended Implementation Plan

1. Make the React/Vite page the source of truth.
2. Replace decorative hero with editorial, image-led, conversion-ready hero.
3. Rewrite copy in refined Persian with calm premium positioning.
4. Remove fabricated testimonials and unverified numerical claims.
5. Add always-visible navigation and clear WhatsApp/Instagram paths.
6. Curate the gallery order and keep images lazy-loaded.
7. Rewrite SEO metadata and JSON-LD with verified information only.
8. Add ESLint config so the existing lint script can run.
9. Verify build, lint, desktop/mobile rendering, CTA links, and public narrative safety.
