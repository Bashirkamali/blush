# Change Log

## 2026-06-04 — Full Landing Page Optimization

### Changed
- **Entry fix:** Renamed root `index.html` to `legacy-index.html`. Replaced with React/Vite shell containing full SEO metadata, Open Graph, Twitter cards, Persian keywords, and JSON-LD Florist/LocalBusiness schema.
- **Build fix:** `npm install` completed, `package-lock.json` added, `tsc` build errors fixed (removed unused React import, added vitrineItems type declaration).
- **Sourcemaps:** Disabled in `vite.config.ts` for smaller/faster production output.
- **Tailwind config:** Removed stale `./index.html` from content paths.
- **Git hygiene:** Added `.gitignore` (node_modules/, dist/, .DS_Store). `node_modules/` removed from git tracking.

### Hero Section
- **Duplicate preload removed:** Both `useEffect` link-creation and JSX `<link>` were preloading the same assets. Removed JSX version; `useEffect` version removed entirely (video native preloading suffices).
- **Parallax throttled:** Replaced naive `setState` on every scroll with `requestAnimationFrame` + scroll guard, reducing mobile jank. Added `{ passive: true }` to scroll listener.
- **CTAs expanded:** From 2 (View Collections + WhatsApp) to 4 (View Collections + WhatsApp + Instagram + Website). All with Persian labels.
- **Tagline localized:** From "Daily Vitrine & Bespoke Pieces" to "ویترین روزانه و گل‌آرایی اختصاصی".
- **Hero media fixed:** `public/hero.webp` replaced with real gallery image (113KB). Root `logo.svg` copied to `public/logo.svg`. `IMG_1600 (2).mp4` (1.5MB) copied to `public/media/hero.mp4`.

### Gallery
- **Metadata fixed:** `manualMeta` keys updated from non-existent SEO-friendly filenames to actual UUID filenames (21 images). All 21 items now show proper Persian captions and alt text instead of UUID fallback.
- **Display limit removed:** All 21 images shown instead of previous arbitrary 12-item cap.
- **Focus trap added:** Keyboard navigation can no longer escape the lightbox modal. Focus restored on first element on open, body scroll locked during lightbox.
- `import.meta.glob` updated from deprecated `as: 'url'` to modern `query: '?url', import: 'default'`.

### Constants & Config
- `src/config/site.ts`: CTA labels localized to Persian. WhatsApp number unified to `989900190067` (was `989357060067` in some places). Phone placeholder updated.

### Root HTML
- New `index.html` is a clean React/Vite shell with:
  - `lang="fa" dir="rtl"` for Persian content
  - Full SEO: title, description, OG/Twitter tags, Persian keywords
  - JSON-LD Florist schema with WhatsApp, Instagram, phone, address (Shiraz)
  - Preconnect to Google Fonts
- Old standalone page preserved as `legacy-index.html` for reference.

### Reason
- The landing page had two competing implementations (standalone HTML + React), broken assets, conflicting CTAs, and no reproducible build. The React/Vite app is now the active, buildable source of truth.

### Files affected
- `index.html` (new React shell)
- `legacy-index.html` (copied from old root index.html)
- `.gitignore`
- `package-lock.json`
- `vite.config.ts`
- `tailwind.config.js`
- `src/config/site.ts`
- `src/App.tsx`
- `src/components/CinematicBloom.tsx`
- `src/components/DailyVitrineGallery.tsx`
- `src/data/vitrineItems.js`
- `src/data/vitrineItems.d.ts`
- `public/hero.webp`
- `public/logo.svg`
- `public/media/hero.mp4`

### Build/test result
- `npm run build` — PASSED (no warnings, no errors)
- `dist/index.html`: 2.85 kB (was 52.81 kB with standalone page)
- `dist/assets/index.js`: 156 kB gzip ~51 kB
- `dist/assets/index.css`: 0.43 kB
- Pushed to GitHub: `ef8621e..54fac36 main`