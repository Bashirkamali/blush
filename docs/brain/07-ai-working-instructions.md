# AI Working Instructions

Every future AI agent must read this file before editing the project.

## Required Rules

- First read all files in `/docs/brain`.
- Do not redesign blindly.
- Preserve the Blush luxury, minimal, cinematic identity.
- Keep Persian/RTL needs in mind where content or audience requires it.
- Do not remove existing working functionality without documenting why.
- Before major changes, update or reference `05-improvement-roadmap.md`.
- After every meaningful change, update `06-change-log.md`.
- Keep changes incremental and reviewable.
- Prefer improving the existing structure over rewriting the project.
- If a change affects UX, document the reason.
- If a change affects performance, document before/after assumptions or measurements.
- Do not create duplicate components unless necessary.
- Do not introduce unnecessary dependencies.
- Keep mobile-first behavior as a priority.
- Confirm the production source of truth before editing major UI: React/Vite app, standalone `index.html`, or a migration path.
- Confirm official CTA links and phone numbers before changing conversion flows.
- Do not delete `_deploy`, `_deploy_backup`, root media files, or duplicate image formats without explicit owner approval.
- Do not trust README or `PROJECT_STRUCTURE.md` over the current source and `/docs/brain`; they contain stale or idealized claims.
- Preserve real Blush imagery and avoid generic stock/placeholder media.
- Avoid turning the page into a generic ecommerce grid.
- Avoid heavy video strategies for mobile campaign traffic.

## Standard Workflow

1. Read brain docs.
2. Inspect relevant files.
3. Explain intended change.
4. Make minimal targeted edits.
5. Test build/lint if available.
6. Update documentation.
7. Summarize changed files and reasoning.

## Before Editing Visual UI

Check:

- Is the source of truth confirmed?
- Are hero assets available and valid?
- Are CTA destinations confirmed?
- Is the language strategy confirmed?
- Is the change aligned with the brand compass in `02-brand-and-ux-brain.md`?
- Is the change listed in or consistent with `05-improvement-roadmap.md`?

## Before Editing Performance-Sensitive Areas

Check:

- Video file size and format.
- Poster image validity.
- Whether media is preloaded, lazy-loaded, or loaded on interaction.
- Whether scroll or animation work triggers React state repeatedly.
- Whether gallery imports include duplicate image formats.
- Whether production sourcemaps are intentional.

## Before Editing SEO Or Metadata

Check:

- Which HTML file is active in production.
- Final production domain.
- Final language direction.
- Open Graph image availability.
- Structured data accuracy.
- Canonical URL.
- Local business details and phone numbers.

## Documentation Expectations

After meaningful changes:

- Add a dated entry to `06-change-log.md`.
- Update `03-section-map.md` if sections/components changed.
- Update `04-technical-architecture.md` if build, routing, assets, deployment, or data flow changed.
- Update `05-improvement-roadmap.md` if a task is completed, changed, or newly discovered.
- Add unresolved decisions to `08-open-questions.md`.
