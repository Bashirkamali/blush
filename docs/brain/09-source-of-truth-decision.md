# Source Of Truth Decision

Audit date: 2026-06-04

## Current Entry Behavior

Vite currently uses the repository-root `index.html` as its default HTML entry because `vite.config.ts` does not override `root` or `build.rollupOptions.input`.

Current observed behavior:

- `package.json` runs `vite` for development and `tsc && vite build` for production.
- `vite.config.ts` uses the React plugin but does not point Vite at `src/index.html`.
- Root `index.html` is a complete standalone static landing page with no `<div id="root">` and no `<script type="module" src="/src/main.tsx">`.
- `src/index.html` does include the React mount element and script, but it is not the active Vite entry under the current config.

Therefore, the currently active Vite entry is the standalone root `index.html`, not the React app in `src/`.

## Competing Implementations

| Area | Root index.html | React/Vite src app | Notes |
| ---- | --------------- | ------------------ | ----- |
| Hero | Complete vertical cinematic static hero with two videos, logo, overlay effects, Persian guide text, and loading/fallback scripts | Full-screen React hero with background video, soft bloom overlay, brand name, tagline, and two CTAs | Root hero has richer campaign mechanics; React hero is cleaner and more maintainable but currently references missing media |
| CTAs | WhatsApp, website, Instagram, and phone icon CTAs; visible WhatsApp uses `989357060067`; scripts also reference `989900190067` | `View Collections` to `#daily-vitrine`; WhatsApp to `989900190067`; gallery `See more` to missing `#featured` | Root has broader conversion flow; both implementations have CTA conflicts |
| Gallery | Static `#collections` grid with 21 WebP images, Persian alt text, and all items linking to `https://blush-flower.com/` | Dynamic `#daily-vitrine` grid from `import.meta.glob`, limited to 12 items, with lightbox | React gallery has better interaction; root gallery has more curated Persian alt text |
| Copywriting | Stronger local/Persian guidance plus English luxury headline/subtitle | English-only hero and generic gallery defaults | Persian campaign copy should be migrated or intentionally archived before stripping root HTML |
| SEO/meta | Production-like title, description, canonical, OG/Twitter tags, Persian/English keywords, and LocalBusiness/Florist schema | `src/index.html` has placeholder title/canonical and is not active | Active SEO currently lives in root HTML |
| Assets | Uses root `logo.svg`, root videos, root `hero.webp`, and gallery paths under `src/assets/vitrine`; references missing `Hero Smaller.mp4` | Expects `public/hero.webp`, `/media/hero.webm`, and `/media/hero.mp4`; gallery images imported from `src/assets/vitrine` | React hero assets are broken or absent; root has some real media but also heavy/missing references |
| Responsiveness | Mobile-first vertical hero frame, media query source for `Hero Smaller.mp4`, responsive CTA sizing | Uses `100svh`, responsive CTA stack, 2-column mobile gallery | Root has more campaign-specific mobile layout; React has simpler responsive structure |
| Animations | Inline CSS/JS fade-ins, guide CTA/dot behavior, video fallback/skeleton scripts | React state-driven parallax, hover scale, lightbox keyboard navigation, reduced-motion check | React is easier to maintain; scroll state needs performance cleanup |
| Brand fidelity | Stronger cinematic mobile presentation and Persian luxury guidance; heavier implementation | Minimal and branded, but thin and unfinished | Best future path is React with selected root content migrated |
| Conversion flow | Four conversion paths and Persian explanations | Two hero actions plus gallery lightbox | React must gain official CTA structure before replacing root behavior |
| Maintainability | Large inline HTML/CSS/JS page, CDN Tailwind, duplicate deployment artifacts | Small component structure with Vite/Tailwind pipeline | React/Vite is the better long-term source of truth |

## Missing Content

Content or behavior present in root `index.html` but missing from the React app:

- Persian guide text explaining the four user actions.
- Instagram CTA.
- Website CTA to `https://blush-flower.com/`.
- Phone CTA.
- LocalBusiness/Florist structured data.
- Production-like SEO metadata and Persian/English keyword targeting.
- Larger static vitrine set with 21 curated Persian alt texts.
- Root `logo.svg` usage.
- Video skeleton/fallback scripting.
- Click behavior that appends tracking-like query data to `blush-flower.com` links.
- Mobile-specific video source reference to `Hero Smaller.mp4`, although that file was not found in this worktree.
- Store names/addresses in JSON-LD.

## Duplicate Or Conflicting Content

- Two page implementations exist: root standalone `index.html` and React app under `src/`.
- Two HTML shells exist: root `index.html` and `src/index.html`.
- WhatsApp numbers conflict:
  - React hero: `989900190067`
  - Root visible CTA: `989357060067`
  - Root `openWhatsApp()` script: `989900190067`
  - `_deploy` visible CTA: `989900190067`
- Phone number appears as `+989177800806` in root CTA and schema.
- Website URL appears as `https://blush-flower.com/` in root, README, schema, and gallery links.
- Instagram appears as `https://www.instagram.com/blush_flower` in root and README.
- React gallery `See more` points to `#featured`, but no `#featured` section exists.
- Root standalone gallery uses `#collections`; React gallery uses `#daily-vitrine`.
- Root page references `hero.webp` at repository root, while React references `public/hero.webp` via `/hero.webp`; `public/hero.webp` is empty.
- Root page references root videos; React references `/media/hero.webm` and `/media/hero.mp4`, which are missing.
- Root page and `_deploy` are similar but not identical.
- README and `PROJECT_STRUCTURE.md` still describe idealized or stale project state.

## Recommended Source Of Truth

Recommended long-term source of truth: the React/Vite app in `src/`.

Reasoning:

- It aligns with the declared tech stack in `package.json`.
- It is easier to maintain, test, componentize, and extend.
- It supports a cleaner path for central constants, typed data, reusable CTAs, and future sections.
- It avoids long-term maintenance of a single large inline HTML/CSS/JS file.

Important constraint:

The standalone root `index.html` currently appears to be the active Vite entry and contains production-like content that the React app does not yet include. It should not be deleted or converted to a minimal shell until its useful content is migrated or intentionally archived.

Recommended transitional decision:

- Treat root `index.html` as the current active/legacy production artifact.
- Treat `src/` React/Vite app as the future production source of truth.
- Freeze root `index.html` temporarily as reference.
- Migrate/centralize official CTAs, SEO metadata, schema, Persian guide copy, and hero media paths into React.
- Only after that, convert root `index.html` into the minimal Vite shell that mounts `/src/main.tsx`.

## Migration Plan

### Step 1 — Freeze Current Baseline

No deletion yet.

Actions:

- Keep root `index.html` untouched until migration is approved.
- Keep `_deploy/` and `_deploy_backup/` untouched until owner confirms their role.
- Keep root media files untouched until the approved hero media strategy is known.
- Use this file as the baseline decision record.

### Step 2 — Create Official Constants

Create a small constants module after owner confirms official values.

Recommended future file:

- `src/config/brand.ts`

Centralize:

- Brand name: likely `Blush` or `BLUSH`, pending final owner preference.
- WhatsApp number: unresolved because current files disagree.
- Phone number: currently `+989177800806` in root, pending confirmation.
- Instagram URL: currently `https://www.instagram.com/blush_flower`.
- Main website URL: currently `https://blush-flower.com/`.
- CTA labels in chosen language(s).
- Hero poster path.
- Hero video paths.
- SEO title/description/canonical/OG image path.

Do not create this constants file until official contact values are confirmed or the owner accepts temporary values.

### Step 3 — Fix Hero Assets

Current hero asset status:

- `public/hero.webp`: exists but is empty.
- `public/logo.svg`: exists but is empty.
- `public/media/hero.webm`: missing.
- `public/media/hero.mp4`: missing.
- Root `logo.svg`: exists and is a real SVG.
- Root `IMG_1600_high_quality.mov`: exists, about 16 MB.
- Root `IMG_1600 (2).mp4`: exists, about 1.5 MB.
- Root `ezyZip.mp4`: exists, under 1 MB.
- Root `Hero Smaller.mp4`: referenced by root `index.html`, but not found.

Recommended future action:

- Choose the approved hero video/poster assets.
- Place optimized React hero media under `public/media/`.
- Replace the empty `public/hero.webp` and `public/logo.svg` with valid assets or remove references if unused.
- Avoid preloading a large `.mov` for campaign traffic.
- Do not invent or generate media without owner approval.

### Step 4 — Align SEO/Meta

Current active SEO source:

- Root `index.html` is the active Vite HTML entry and contains the stronger SEO/meta/schema.

Current React SEO issue:

- `src/index.html` has placeholder title/canonical and is not active.

Recommended future action:

- When converting root `index.html` into the React shell, move validated metadata into the root shell.
- Use `https://blush-flower.com/` only if this is confirmed as the production URL.
- Keep or revise LocalBusiness/Florist schema after confirming store names, addresses, phone, and image.
- Use a real non-empty OG image.
- Confirm Persian/English keyword strategy before final metadata.

### Step 5 — Decide What Happens To Standalone index.html

Do not execute destructive changes yet.

Recommended path:

1. Keep root `index.html` temporarily as the active legacy reference.
2. Migrate useful content into React:
   - Persian guide text
   - Official CTA set
   - SEO/meta/schema
   - Curated gallery alt text
   - Approved hero media strategy
3. After migration is reviewed, rename the standalone page to `legacy-index.html` or move it under `docs/reference/`.
4. Convert root `index.html` into the minimal Vite shell:

```html
<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>
```

5. Verify `npm run build` and rendered behavior before deployment.

Alternative:

- If the owner decides the standalone page must remain production for now, document it as active production and pause React redesign work until a migration branch is approved.

## Decision Summary

- Currently active source of truth: root standalone `index.html`.
- Recommended future source of truth: React/Vite app in `src/`.
- Root `index.html` should become a minimal Vite shell later, not immediately.
- The migration must preserve important standalone content before any conversion.
