# Change Log

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
