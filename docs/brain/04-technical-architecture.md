# Technical Architecture

## Framework

React 18 is used for the source app in `src/`.

## Build Tool

Vite 5 is configured in `vite.config.ts`.

Current config:

- React plugin enabled.
- Dev server port: `3000`.
- Dev server opens browser automatically.
- Production output: `dist`.
- Sourcemaps: enabled.

Important architecture concern: Vite uses root `index.html` by default. The current root `index.html` is a complete standalone static page and does not appear to mount the React app. A React shell exists at `src/index.html`, but this is not the default Vite entry.

## Styling Method

Current React styling uses:

- Tailwind utility classes in components.
- Tailwind base/components/utilities in `src/index.css`.
- Custom `.shadow-soft` and `.line-clamp-1` utilities in `src/index.css`.
- Tailwind theme extension in `tailwind.config.js`.

The standalone root `index.html` uses inline CSS and CDN Tailwind, separate from the React/Tailwind build pipeline.

## Component Structure

Current React components:

- `CinematicBloom`: hero/video/CTA section.
- `DailyVitrineGallery`: gallery grid and lightbox.

Data:

- `src/config/site.ts` centralizes provisional React-side brand, CTA, SEO, and hero media constants.
- `src/data/vitrineItems.js` collects WebP vitrine images using `import.meta.glob`.

The current component structure is small and easy to reason about, but it does not yet model a full campaign landing page.

## Asset Handling

React app:

- Gallery assets are imported from `src/assets/vitrine/` through Vite.
- Hero poster is referenced as `/hero.webp` from `public/hero.webp`.
- Hero videos are referenced as `/media/hero.webm` and `/media/hero.mp4`.
- React-side paths are centralized in `src/config/site.ts`.

Current asset state:

- `public/hero.webp` is empty.
- `public/logo.svg` is empty.
- No `public/media` directory was found.
- Root-level videos exist, including `IMG_1600_high_quality.mov` at about 16 MB, `IMG_1600 (2).mp4` at about 1.5 MB, and `ezyZip.mp4` under 1 MB.
- Many gallery images exist as both `.JPG` and `.webp`; the React gallery now imports `.webp` files only.

Standalone page:

- References root-level video files and root `logo.svg`.
- References `Hero Smaller.mp4`, but that file was not found.
- References gallery images directly under `src/assets/vitrine/`.

## Routing

No client routing is visible. The app is a single page with hash anchors:

- `#daily-vitrine` exists in the React gallery.
- The React gallery default CTA now points to the provisional main website URL instead of missing `#featured`.
- `#collections` exists in the standalone root HTML.

## SEO And Meta Handling

Root `index.html` contains stronger SEO metadata:

- Title
- Description
- Canonical for `https://blush-flower.com/`
- Open Graph tags
- Twitter tags
- Keywords including Persian terms
- LocalBusiness/Florist schema

`src/index.html` contains React-oriented metadata but includes:

- Blush baseline title and description.
- Canonical for `https://blush-flower.com/`, pending owner confirmation of the final campaign domain.

Because the active entry is unclear, SEO handling is currently risky.

## Performance-Sensitive Files

- `src/components/CinematicBloom.tsx`: video preload, poster preload, parallax scroll state, hero rendering.
- `src/components/DailyVitrineGallery.tsx`: image grid, lightbox, lazy loading.
- `src/config/site.ts`: provisional brand/CTA/media constants that must be confirmed by the owner.
- `src/data/vitrineItems.js`: WebP-only gallery import; metadata still needs curation.
- `index.html`: preloads large `.mov`, has inline CSS/JS, and may be the actual Vite entry.
- Root video files: especially `IMG_1600_high_quality.mov`.
- `vite.config.ts`: sourcemaps enabled for production.

## How To Run Locally

Expected command:

```bash
npm run dev
```

Expected local URL:

```txt
http://localhost:3000
```

Current caveat: dependencies are incomplete in this worktree. `npm run build` failed because `tsc` was not found.

## How To Build

Expected command:

```bash
npm run build
```

Current observed result:

```txt
sh: tsc: command not found
```

This likely requires a proper dependency install first. No lockfile is present, so the exact package manager and versions are not fully pinned.

## Deployment Notes

Visible deployment clues:

- `vite.config.ts` outputs to `dist`.
- `.gitignore` ignores `dist` and `build`.
- `_deploy/` contains a static `index.html` artifact.
- `_deploy_backup/` contains backup static artifacts and many older vitrine images.

Unknown:

- Actual hosting provider.
- Actual production branch.
- Whether production uses Vite `dist`, root `index.html`, or `_deploy`.
- Whether `blush-flower.com` points to this repository.

## Technical Risks

- The app has two competing implementation paths: React/Vite and standalone HTML.
- Hero media paths are broken or empty in the React app.
- The build cannot currently be verified without installing dependencies.
- No lockfile means installs are not reproducible.
- Lint script may not work because no ESLint config was found.
- Duplicate JPG/WebP asset files still exist, but the React gallery imports WebP only.
- Current metadata can be wrong depending on which HTML file becomes active.

## Recommended Architecture Improvements

1. Decide the source of truth: React app, standalone static page, or a planned migration.
2. Make Vite entry match that decision.
3. Fix hero assets and centralize media paths.
4. Add a lockfile by installing with the selected package manager.
5. Confirm or remove lint tooling.
6. Confirm provisional CTA constants for WhatsApp, phone, Instagram, and website.
7. Replace glob-based gallery behavior with a curated list when product metadata is ready.
8. Move validated SEO/schema into the active entry.
9. Disable production sourcemaps unless intentionally needed.
10. Keep refactors incremental; do not rewrite the page before the production path is agreed.
