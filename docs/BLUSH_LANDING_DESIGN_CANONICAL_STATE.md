# BLUSH Landing Design — Canonical State

**Canonical date:** 2026-09-01

**Repository:** `https://github.com/Bashirkamali/blush`

**Working repository:** `/Users/bashirmacm/Blush`

**Primary branch:** `main`

**Published branch:** `gh-pages`

**Public preview:** `https://bashirkamali.github.io/blush/`

**Local development URL:** `http://127.0.0.1:3000/`

## 1. Purpose and authority

This document is the single handoff source for continuing the visual and UX design of the current Blush landing page in a new chat. It records the approved direction, verified implementation state, protected decisions, relevant files, QA expectations, and unresolved work.

Use the checked-out repository as the final technical source of truth. If this document and the current source differ, inspect Git history and ask before overwriting an approved newer change.

## 2. Current product definition

Blush is presented as a Persian-first, RTL, premium floral and gifting experience studio in Shiraz. The landing page is a curated consultation and trust experience rather than a conventional ecommerce catalog.

Primary conversion path:

1. Understand the Blush positioning and visual signature.
2. Review real examples and services.
3. Understand the guided ordering process.
4. Start a WhatsApp conversation.

Supporting paths are Instagram, phone contact, selected vitrine examples, FAQ, and the official website link.

## 3. Approved design direction

The current approved direction is:

- Bright, soft, minimal and premium.
- Persian-first and genuinely RTL.
- Quiet luxury rather than loud advertising.
- Real Blush floral photography as the dominant visual content.
- Pale blush and ivory surfaces with deep ink typography and restrained gold details.
- Editorial spacing, generous negative space and calm section rhythm.
- Fine botanical line art used only as a subtle artistic background layer.
- Direct, respectful copy without exaggerated sales language.
- Clear WhatsApp conversion without aggressive repetition.

### Explicitly rejected directions

- Dark cinematic or ad-like styling as the main page identity.
- Oversized, heavy or opaque vector illustrations.
- Decorative elements that compete with headings, cards or photography.
- Filled silhouettes, glow clouds, coarse masks or busy background compositions.
- Generic stock imagery replacing owned/relevant Blush work.
- Fake testimonials, fabricated ratings, invented metrics or unverified business claims.
- Enabling video merely because video assets exist.

## 4. Visual system

### Core palette

The implemented tokens in `src/index.css` are:

| Role | Value |
|---|---|
| Blush | `#f6d6e5` |
| Page blush | `#fff5f7` |
| Ivory | `#fbf8f6` |
| Deep ink | `#21191d` |
| Muted copy | `#66575d` |
| Hairline border | `#eadfd9` |
| Restrained gold | `#c0a16e` |
| Accent rose | approximately `#a65d78` |

Do not introduce saturated pinks, strong gradients, hard black blocks or additional metallic colors without a deliberate design review.

### Typography

- Persian/UI font: locally hosted `Vazirmatn`, weights 300–600.
- Latin/editorial accent: locally hosted `Playfair Display`, weights 400–600.
- Headings are light, spacious and intentionally not bold.
- Body text uses generous line height for Persian readability.
- English `BLUSH` branding may use serif tracking; Persian content must retain correct RTL shaping.

### Shape and elevation

- Photography uses tall editorial crops and rounded top arches.
- Cards use thin warm borders, translucent white surfaces and soft shadows.
- Buttons are rounded pills with clear keyboard focus states.
- Borders and shadows must remain quiet; avoid dense glassmorphism or heavy elevation.

## 5. Page architecture and section order

The active composition in `src/App.tsx` is:

1. Fixed navigation and scroll progress.
2. Hero.
3. Brand story — index `۰۱`.
4. Services / Blush signature — index `۰۲`.
5. Guided ordering process — index `۰۳`.
6. Selected vitrine gallery and lightbox — index `۰۴`.
7. Blush standards — index `۰۵`.
8. FAQ — index `۰۶`.
9. Final dark CTA — index `۰۷`.
10. Footer and back-to-top control.

The section sequence, approved Persian copy and CTA hierarchy should not be rewritten casually. Any structural or copy change should begin with a proposal and preserve the current conversion logic.

## 6. Canonical background illustration behavior

The background artwork is decorative, `aria-hidden`, pointer-inert and scroll-responsive. Its job is to create a distinctive artistic signature while preserving minimalism and legibility.

### Mobile — approved and protected

Mobile was explicitly reviewed and approved. Do not change it as part of desktop tuning.

- Uses two masked WebP layers in `src/components/FloralMotionBackdrop.tsx`.
- Main line-art mask: `blush-floral-line-branded-mask-v3.webp`.
- Gold branding mask: `blush-ribbon-branding-gold-mask-v2.webp`.
- Visible only below the Tailwind `md` breakpoint.
- Uses viewport-sized masks, multiply blending, scroll reveal and reduced-motion handling.

### Desktop — approved current solution

- Desktop is separated from the mobile implementation at the `md` breakpoint.
- Canonical artwork: `src/assets/brand/illustrations/blush-floral-line-minimal-spaced-v5.png`.
- Composition: two small upper botanical corners, a florist woman at lower left, and a separate floral vase at lower right with substantial negative space.
- The PNG has a white neutral field and fine mauve line work; `mix-blend-multiply` makes the white field neutral on the blush page while retaining the fine lines.
- It is rendered as a normal `backgroundImage`, not as a color mask. Using it as a mask turns its internal surfaces into coarse filled silhouettes and is forbidden.
- Width is based primarily on visible viewport height, not unrestricted viewport width: `clamp(44rem, 92dvh, 50rem)` with `max-width: 82vw`.
- It is horizontally centered using `left: 50%` plus Framer Motion `x: -50%`.
- Aspect ratio is fixed at `2 / 3`.
- Desktop opacity curve is restrained: `[0.12, 0.22, 0.17, 0.06]`.
- Scroll movement travels from `0vh` to `calc(-100% + 100vh)` so the long composition progresses through the page.
- `prefers-reduced-motion` disables positional movement.

### Background non-negotiables

- Text and CTAs must always read above the illustration.
- The florist and vase must remain visually separate.
- Upper frames must remain smaller than the main photographic content.
- The desktop art must not grow without a cap on wide Chrome windows.
- No silhouettes, opaque figures, halos, shadows, checkerboards or heavy fills.
- Do not merge desktop and mobile art back into one responsive mask.

## 7. Responsive behavior

- Tailwind is mobile-first; `md` separates mobile and desktop backdrop implementations.
- Main editorial content uses `max-w-7xl` containers and responsive horizontal padding.
- Desktop section headings may become sticky; mobile content remains linear.
- Hero switches from stacked mobile composition to a two-column desktop composition.
- Services and gallery preserve compact mobile grids while expanding progressively.
- No horizontal page scroll is acceptable.
- Decorative sizing must be tested in both the Codex in-app browser and normal Chrome because their viewport dimensions differ.
- Chrome width must not cause the background artwork to exceed its approved capped scale.

Recommended manual viewports for any future visual change:

- Mobile: approximately `390 × 844` and `440 × 956`.
- Tablet/intermediate: approximately `768 × 1024`.
- Desktop: approximately `1280 × 800`, `1440 × 900`, and `1536 × 864`.

## 8. Content and business-source rules

Canonical content and links live in `src/config/site.ts`.

Currently implemented public signals include:

- Brand: Blush / بلاش.
- Location positioning: Shiraz.
- WhatsApp and phone: `+989900190067`.
- Instagram: `blush_flower`.
- Official website link: `https://blush-flower.com/`.

Do not invent address, hours, delivery zones, branches, ownership, ratings or formal company information. Confirm these with the user before publishing them.

`siteConfig.heroVideo.enabled` is intentionally `false`. Static hero photography remains canonical until a final approved, compressed desktop/mobile video set exists and passes asset and performance checks.

## 9. Technical architecture

- Stack: React 18, TypeScript, Vite 5, Tailwind CSS 3 and Framer Motion.
- App entry: `src/App.tsx`.
- Global tokens/components: `src/index.css`.
- Business copy/config: `src/config/site.ts`.
- Gallery data: `src/data/vitrineItems.js`.
- Background motion: `src/components/FloralMotionBackdrop.tsx`.
- Build output: `dist/`.
- Vite base is relative (`./`) for GitHub Pages compatibility.
- Development server defaults to port `3000`.

## 10. Asset authority and exclusions

Production assets must be explicitly imported or referenced by current source. The repository may contain local experimental candidates that are not approved production assets.

At the time of this canonical handoff, the following local categories were deliberately excluded from the design update commit unless already tracked and used:

- `src/assets/brand/hero-variants/`
- unused `*-candidate.png` illustration experiments
- unused `blush-floral-line-scroll*.webp` variants
- unused ribbon/wordmark mask experiments
- `src/assets/brand/motion/` experiments
- the superseded `blush-floral-line-minimal-spaced-v4.png`

Do not bulk-stage these files. Preserve them locally unless the user explicitly asks to curate or delete them.

## 11. Accessibility and UX safeguards

- Keep semantic headings and section landmarks.
- Keep the skip link and visible keyboard focus rings.
- Decorative artwork stays `aria-hidden` and cannot intercept input.
- Interactive controls must remain keyboard accessible.
- Preserve accessible labels for the mobile menu, gallery controls and FAQ state.
- Respect `prefers-reduced-motion`.
- Maintain readable contrast; background art must never reduce text clarity.
- Keep image alt text descriptive and factual.

## 12. Required verification before a design handoff

Run:

```bash
npm run build
npm run lint
```

Then verify:

1. Local server returns successfully at `http://127.0.0.1:3000/`.
2. Hero photography and fonts load without path errors.
3. Mobile background remains the approved masked version.
4. Desktop background stays centered, thin, capped and complete across normal Chrome widths.
5. No horizontal overflow appears.
6. WhatsApp, Instagram, phone and navigation anchors work.
7. Gallery lightbox, FAQ accordion, mobile menu and back-to-top work.
8. Reduced-motion mode does not translate the background.
9. Production `dist/` is generated before GitHub Pages deployment.
10. Public URL is checked after deployment; a successful local preview alone is not publication evidence.

## 13. Git and deployment rules

- Develop on `main`.
- Stage only files belonging to the approved change.
- Do not add unrelated local candidate assets.
- Commit and push `main` first.
- Build the exact pushed source.
- Publish the contents of `dist/` to `gh-pages`.
- Verify the remote branch and public HTTP response after publication.
- Never claim deployment from an open browser tab alone.

## 14. Current approved baseline

As of this document:

- The desktop illustration has been corrected from filled-mask silhouettes to fine line art.
- Desktop sizing has been decoupled from unrestricted browser width and capped for normal Chrome.
- The user confirmed the mobile presentation is correct.
- The user confirmed the final local desktop result is excellent.
- Build and lint passed before the publication request.
- This Canonical file is part of the requested GitHub update and should travel with future design work.

## 15. Open decisions and future opportunities

These are not approved implementations:

- Further refinement of section spacing after a complete multi-viewport screenshot review.
- Image compression for the desktop line-art PNG if visual quality can be preserved.
- Lighthouse performance/accessibility follow-up.
- Final hero video production and explicit enablement.
- Publishing verified address, hours, delivery zones or branch information.
- Connecting the landing experience to a future Blush OS or order desk.

## 16. Instructions for the next design chat

Start by reading this document, `src/App.tsx`, `src/index.css`, `src/config/site.ts`, and the component directly in scope. Inspect the current Git status and public deployment before making claims.

Use this operating rule:

> Preserve the approved bright, minimal, Persian RTL luxury direction and the current copy. Keep mobile background behavior unchanged unless explicitly requested. Treat the desktop line-art system as subtle decorative infrastructure: fine lines, capped scale, generous negative space, no silhouettes and no competition with content. Propose meaningful structural changes before implementing them, edit only the requested scope, test mobile and desktop, run build and lint, and never deploy without explicit authorization.

### Copy-ready opening prompt for a new chat

```text
We are continuing the Blush Persian RTL landing-page design in /Users/bashirmacm/Blush.

First read docs/BLUSH_LANDING_DESIGN_CANONICAL_STATE.md completely and treat it as the design handoff. Then inspect the current repository and Git status before making changes.

Preserve the approved bright, minimal, quiet-luxury direction, current Persian copy, real Blush photography, WhatsApp conversion path, and accessibility safeguards. The mobile floral background is approved and must not change unless I explicitly request it. The desktop background must remain fine line art, centered, size-capped, airy, and never rendered as a filled mask or silhouette.

Do not stage unrelated experimental assets. Do not deploy or change the live site without my explicit approval. Separate verified current state from recommendations and open decisions.

My next design request is:
[WRITE THE NEXT REQUEST HERE]
```
