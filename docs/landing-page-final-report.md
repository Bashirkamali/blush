# Blush Landing Page Final Report

Date: 2026-06-08

## What Changed

- Rebuilt the landing page narrative from a decorative cinematic page into a premium Persian-first floral experience landing page.
- Replaced the static-first hero with a video-ready cinematic hero architecture using the real Blush hero image as the fallback poster.
- Updated the production hero image again to a calmer existing Blush floral composition with more ivory space and a lower file size.
- Removed splash screen, custom cursor, wave dividers, glow particles, fake testimonials, and unverified numerical proof.
- Added a persistent minimal navigation with clear WhatsApp CTA.
- Rewrote copy across hero, brand story, services, process, standards, FAQ, final CTA, and footer.
- Curated gallery order using original filenames so the strongest visual assets appear first.
- Added `postcss.config.js`; before this, Tailwind was not being processed and built CSS still contained raw `@tailwind` and `@apply`.
- Added `.eslintrc.cjs` so the existing lint script works.

## Expert Pass Summary

- Brand strategy: shifted positioning from flower-shop/ecommerce language to floral experience studio and refined gifting guide.
- Luxury copywriting: rewrote Persian copy to be calmer, more precise, and less promotional.
- UX/conversion: made WhatsApp, Instagram, vitrine, and ordering path visible and repeated without aggressive CTAs.
- Visual art direction: simplified palette, spacing, typography, section rhythm, and container model.
- Photography/content: prioritized existing Blush images; avoided generic generated assets for production.
- Performance: removed nonessential animation surfaces and video-first loading; kept below-fold gallery images lazy.
- SEO: improved title, description, keywords, semantic headings, and alt text.
- GEO: added clear brand description, FAQ content, and JSON-LD with verified-only business signals.
- QA/public safety: removed fake testimonials, hard metrics, ownership implications, and unsafe internal narrative.

## Performance Actions

- Hero poster image is preloaded and remains the fallback until final video assets are available.
- Video sources are configured but disabled until compressed desktop/mobile loops are added.
- Current hero image is a local WebP around 43 KB, replacing the previous heavier and more colorful hero asset.
- Gallery images remain WebP and lazy-load after the first visible images.
- CSS now builds correctly through Tailwind and Autoprefixer.
- No new runtime dependencies were added.
- Production build output: CSS ~26 KB, JS ~311 KB before gzip; JS gzip ~101 KB.

## SEO/GEO Actions

- Updated `index.html` title and meta description for Persian local discovery.
- Added Open Graph and Twitter metadata.
- Added JSON-LD graph for `Florist`, `WebSite`, and `FAQPage`.
- Used only verified data from the repo: brand name, URL, phone, WhatsApp, Instagram, city/country, hero image.
- Did not fabricate address, opening hours, ratings, legal name, ownership, or formal management claims.

## Visual And Content Actions

- Hero now communicates: Blush, a premium floral feeling, emotional promise, primary CTA, secondary CTA, and practical ordering focus with a cinematic media stage.
- Services are presented as editorial rows rather than generic feature cards.
- Standards replace fabricated testimonials.
- FAQ supports both visitor clarity and answer-engine parsing.
- Footer uses neutral brand-centered language.

## Verification

- `npm install` was run because local dependencies were missing.
- `npm run build`: passed.
- `npm run lint`: passed after adding ESLint config.
- Production preview served at `http://127.0.0.1:4173/`.
- Desktop and mobile screenshots were captured from the production preview with installed Google Chrome headless and visually inspected with `view_image`.
- Temporary screenshot PNG files were removed before handoff.

## QA Notes And Limitations

- Chrome extension Playwright controls timed out on this host, so final screenshots used installed Google Chrome headless.
- Headless Chrome mobile screenshots on this local macOS/RTL combination showed a left-crop artifact in the first viewport even after constraining overflow and switching the document scroll origin. Desktop screenshot rendered correctly.
- Because of that artifact, mobile should also be checked manually in the live browser at `http://127.0.0.1:4173/`.
- Chrome headless emitted macOS/GPU/updater warnings; screenshots were still written successfully.
- `npm install` reported existing dependency vulnerabilities; no forced upgrade was applied to avoid unrelated breaking changes.

## Remaining TODOs

- Confirm whether `+989900190067` is the only official public phone/WhatsApp number.
- Confirm whether a precise address, working hours, delivery zones, or branch distinction can be public.
- Generate or film the selected Cinematic Bloom Ritual video and then enable `siteConfig.heroVideo.enabled`.
- Consider reducing Framer Motion if future Lighthouse work shows JS budget pressure.

## How To Test

```bash
npm run build
npm run lint
npm run preview -- --host 127.0.0.1 --port 4173
```

Then open `http://127.0.0.1:4173/` and verify:

- Hero first impression and CTAs.
- WhatsApp and Instagram links.
- Gallery lightbox.
- FAQ accordion.
- Mobile viewport with browser device emulation.
