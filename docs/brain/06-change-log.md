# Change Log

## 2026-06-04 — Foundation Stabilization Package

### Changed
- Added `src/config/site.ts` as the provisional React-side source for brand, CTA, SEO, and hero media constants.
- Updated React hero CTA/media references to use centralized constants.
- Updated the React gallery default CTA from missing `#featured` to the provisional main website URL.
- Filtered React vitrine imports to WebP files only to avoid duplicate JPG/WebP gallery entries.
- Updated inactive `src/index.html` metadata from placeholder values to a Blush baseline.
- Updated roadmap and open questions for foundation stabilization, next packages, and unresolved owner decisions.

### Reason
- The React/Vite app is the recommended future source of truth, but it needed safer constants, fewer hardcoded links, and fewer inactive placeholders before visual or cinematic redesign work.
- Root `index.html` remains the current active legacy artifact and was intentionally left unchanged.

### Files affected
- `src/config/site.ts`
- `src/components/CinematicBloom.tsx`
- `src/components/DailyVitrineGallery.tsx`
- `src/data/vitrineItems.js`
- `src/index.html`
- `docs/brain/03-section-map.md`
- `docs/brain/04-technical-architecture.md`
- `docs/brain/05-improvement-roadmap.md`
- `docs/brain/06-change-log.md`
- `docs/brain/08-open-questions.md`
- `docs/brain/09-source-of-truth-decision.md`

### Build/test result
- `npm run build` failed: `tsc: command not found`.
- `npm run lint` failed: `eslint: command not found`.
- Static check confirmed `src/index.html` no longer contains `example.com`.
- Static check confirmed React source no longer uses `#featured`; docs still mention it as historical audit context.

### Notes for future AI agents
- Values in `src/config/site.ts` are provisional, not owner-approved final contact data.
- Do not copy or generate hero media without owner approval; `public/hero.webp` remains empty and `/public/media/hero.webm` plus `/public/media/hero.mp4` remain missing.
- Next safest package is Performance & Media Optimization, followed by SEO/Google Ads Readiness and Cinematic UX Enhancement.

## 2026-06-04 — Source Of Truth Decision

### Changed
- Added a dedicated source-of-truth decision document.
- Re-inspected root `index.html`, `src/`, React components, Vite config, package scripts, public assets, root media, deployment artifacts, and CTA/metadata references.
- Updated the roadmap to explicitly reference the source-of-truth decision document as the migration baseline.
- Added refined owner questions about migration timing, official contact constants, and standalone HTML archival.

### Reason
- The project needed a documented decision before any visual redesign or root entry conversion.
- Current Vite behavior uses root `index.html`, but the recommended long-term source of truth is the React/Vite app in `src/`.

### Files affected
- `docs/brain/09-source-of-truth-decision.md`
- `docs/brain/05-improvement-roadmap.md`
- `docs/brain/06-change-log.md`
- `docs/brain/08-open-questions.md`

### Notes for future AI agents
- Do not delete or simplify root `index.html` yet.
- Treat root `index.html` as the current active legacy artifact and React/Vite `src/` as the recommended future source of truth.
- Migrate or intentionally archive Persian guide copy, four-CTA flow, schema, SEO metadata, curated gallery alt text, and hero media behavior before converting root `index.html` into a Vite shell.
- `npm run build` was attempted again and still failed because `tsc` is not available in the current dependency state.

## 2026-06-03 — Initial Documentation Brain

### Changed
- Created the initial `/docs/brain` documentation system.
- Audited repository structure, React components, styling, assets, metadata, deployment artifacts, and build/tooling state.
- Documented current strengths, risks, section map, architecture, brand/UX direction, roadmap, AI working instructions, and open questions.

### Reason
- The project needed a durable brain layer so future AI agents, developers, and the project owner can make structured, traceable improvements without redesigning blindly.

### Files affected
- `docs/brain/00-project-overview.md`
- `docs/brain/01-current-audit.md`
- `docs/brain/02-brand-and-ux-brain.md`
- `docs/brain/03-section-map.md`
- `docs/brain/04-technical-architecture.md`
- `docs/brain/05-improvement-roadmap.md`
- `docs/brain/06-change-log.md`
- `docs/brain/07-ai-working-instructions.md`
- `docs/brain/08-open-questions.md`

### Notes for future AI agents
- No visual redesign, source refactor, dependency installation, or file deletion was performed.
- The current repository contains both a React/Vite app and a standalone root `index.html`; source of truth is unresolved.
- `public/hero.webp` and `public/logo.svg` are empty.
- React hero references `/media/hero.webm` and `/media/hero.mp4`, but no `public/media` folder was found.
- `npm run build` failed in the current worktree because `tsc` was not found.
- CTA phone/WhatsApp numbers differ across files and must be confirmed.

## YYYY-MM-DD — Title

### Changed
- ...

### Reason
- ...

### Files affected
- ...

### Notes for future AI agents
- ...
