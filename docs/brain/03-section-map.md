# Section Map

This map describes the current repository state. It distinguishes the current React app from the standalone root HTML artifact because both exist and they are not equivalent.

## React App Shell

**Purpose:**  
Compose the landing page from React components.

**Current implementation:**  
`src/App.tsx` renders a white full-page wrapper containing `CinematicBloom` followed by `DailyVitrineGallery`.

**Related files:**  
- `src/App.tsx`
- `src/main.tsx`
- `src/index.css`
- `src/config/site.ts`

**Issues:**  
- Very thin page structure: only hero plus gallery.
- Source of truth is unclear because root `index.html` is a standalone non-React page.

**Future improvements:**  
- Decide whether React is the production source of truth.
- If yes, move valid metadata into the active Vite root and migrate useful CTA/content patterns from standalone HTML.

## Cinematic Hero

**Purpose:**  
Create the premium first impression and present the primary conversion actions.

**Current implementation:**  
`CinematicBloom.tsx` renders a full-screen section with a background video, poster image, soft bloom overlay, centered Blush heading, tagline, and two CTAs.

Current content:

- Heading: `Blush`
- Tagline: `Daily Vitrine & Bespoke Pieces`
- CTA 1: `View Collections` linking to `#daily-vitrine`
- CTA 2: `Chat on WhatsApp` using the provisional React-side `whatsappUrl` from `src/config/site.ts`

**Related files:**  
- `src/components/CinematicBloom.tsx`
- `src/config/site.ts`
- `public/hero.webp`
- Expected but missing: `public/media/hero.webm`
- Expected but missing: `public/media/hero.mp4`
- `tailwind.config.js`

**Issues:**  
- `public/hero.webp` is empty.
- Expected video files do not exist under `public/media`.
- Preload links are created both in `useEffect` and in JSX.
- Parallax state updates on every scroll.
- Hero has no Instagram or website CTA.
- Content is English-only while other repo content is Persian/English mixed.
- WhatsApp number is centralized for React, but still differs from the standalone HTML visible CTA until owner confirmation.

**Future improvements:**  
- Confirm official WhatsApp number.
- Add real optimized poster/video assets or update references.
- Use one preload strategy.
- Add performance-safe scroll behavior.
- Consider adding compact Instagram/website CTAs if they remain project goals.
- Clarify language direction for campaign traffic.

## Daily Vitrine Gallery

**Purpose:**  
Show current Blush floral arrangements and let visitors inspect items visually.

**Current implementation:**  
`DailyVitrineGallery.tsx` renders a responsive grid from `items`, limited to the first 12 entries. Items open a lightbox with caption, optional price, optional detail link, Escape-to-close, and arrow navigation.

Default content:

- Eyebrow: `Daily Vitrine`
- Title: `Blush Daily Vitrine`
- CTA: `See more` linking to the provisional main website URL from `src/config/site.ts`

**Related files:**  
- `src/components/DailyVitrineGallery.tsx`
- `src/config/site.ts`
- `src/data/vitrineItems.js`
- `src/assets/vitrine/`

**Issues:**  
- The previous missing `#featured` target has been resolved in React by pointing the default CTA to the provisional main website URL.
- `manualMeta` keys mostly reference older SEO-friendly filenames that do not exist in the current asset folder.
- Because metadata does not match, visible captions and alt text may fall back to UUID-derived filenames.
- The data glob now imports `.webp` only; `.JPG` files remain untouched as source/archive assets.
- Gallery ordering is alphabetical by emitted asset URL, not curated by business priority.
- Lightbox does not trap focus.
- "See more" does not lead to the main website or Instagram despite project goals.

**Future improvements:**  
- Define a curated item list with current filenames, captions, alt text, optional prices, and destination URLs.
- Confirm the final `See more` destination and update `siteConfig.websiteUrl` if needed.
- Add focus trap and stronger mobile close affordance.
- Consider a WhatsApp inquiry CTA per item only if it stays visually restrained.

## Standalone Cinematic Page

**Purpose:**  
Older or alternate static landing page with richer campaign behavior.

**Current implementation:**  
Root `index.html` contains complete static HTML/CSS/JS, including a vertical video hero, logo, Persian guide text, icon CTA row, guide dots, vitrine grid, structured data, and scripts for image/video behavior.

Current CTA set:

- WhatsApp
- Website
- Instagram
- Phone

**Related files:**  
- `index.html`
- `logo.svg`
- `IMG_1600_high_quality.mov`
- `IMG_1600 (2).mp4`
- `ezyZip.mp4`
- `src/assets/vitrine/`
- `_deploy/index.html`
- `_deploy_backup/index.html`

**Issues:**  
- Root `index.html` is the default Vite entry but does not mount React.
- Contains large inline CSS and JS, making maintainability harder.
- Preloads a 16 MB `.mov`.
- References `Hero Smaller.mp4`, but that file was not found.
- Uses multiple phone/WhatsApp numbers across markup and scripts.
- Duplicates or diverges from React implementation.

**Future improvements:**  
- Decide whether to preserve this as the production page, archive it, or migrate its best ideas into React.
- If migrating, carry over Persian CTA guidance, schema, and richer conversion paths carefully.
- Replace large `.mov` strategy with optimized responsive video.

## Standalone Vitrine Grid

**Purpose:**  
Show a larger set of floral images in the standalone page.

**Current implementation:**  
Root `index.html` has a `#collections` section titled `Blush's Vitrine`, with Persian subtitle and many linked image tiles pointing to `https://blush-flower.com/`.

**Related files:**  
- `index.html`
- `src/assets/vitrine/*.webp`

**Issues:**  
- Exists outside React component structure.
- Every item links to the same website URL.
- No item-level metadata beyond alt text.
- Static list must be manually maintained.

**Future improvements:**  
- If React becomes source of truth, migrate this curated list into `vitrineItems`.
- If standalone remains, document it as the deployed artifact and remove confusion around React.

## Footer Or Final Conversion Section

**Purpose:**  
Unknown or missing in the React app. A landing page typically needs a final conversion moment.

**Current implementation:**  
No React footer/final CTA section is present.

**Related files:**  
- Unknown

**Issues:**  
- No closing CTA after gallery.
- No concise address/contact trust block in React.
- No visible Instagram or website follow-through after browsing.

**Future improvements:**  
- Add a restrained final CTA band only after source-of-truth decision.
- Keep it minimal: WhatsApp, Instagram, website, maybe phone/address if confirmed.
