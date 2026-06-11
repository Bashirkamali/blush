# Codex Windows Audit And Update

Date: 2026-06-11  
Workspace: `C:\Users\8ashir\Desktop\BlushGit\blush`  
Live page checked: `https://bashirkamali.github.io/blush/`  
Branch checked: `main`  
Head checked: `3c517e8`

## Summary

This audit records the current Blush landing page state so the work can be followed from Codex Windows.

The repository is a React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion landing page for Blush. The current live GitHub Pages page is Persian-first, uses the React/Vite build, shows `BLUSH` as the hero headline, includes the expected main sections, and has no browser console warnings or errors during the read-only check.

The hero video pipeline has been planned and documented, but the cinematic hero video is not enabled yet. The live page currently uses the static hero image/poster.

## Steps Taken

1. Checked the repository root for project instructions and structure.
2. Confirmed there is no repo-level `AGENTS.md`.
3. Read the main project docs, especially:
   - `README.md`
   - `docs/landing-page-audit.md`
   - `docs/landing-page-final-report.md`
   - `docs/brain/06-change-log.md`
   - `docs/brain/09-source-of-truth-decision.md`
4. Checked the current git branch and recent commit history.
5. Read the current site config in `src/config/site.ts`.
6. Inspected the currently open Codex in-app browser tab at `https://bashirkamali.github.io/blush/`.
7. Added this audit document and a central documentation changelog entry.

## Current Repo State

- Active branch: `main`
- Current head during audit: `3c517e8`
- Recent history shows landing page redesign, GitHub Pages path fixes, hero title/image fixes, and hero video pipeline documentation.
- `package.json` exposes these useful checks:
  - `npm run build`
  - `npm run lint`
  - `npm run check:hero-video`
  - `npm run preview`

## What Has Been Done So Far

- The landing page was moved toward a Persian-first premium Blush experience.
- The React/Vite app is now treated as the practical source for the live landing page.
- The layout includes a persistent navigation, hero, brand story, services, process, vitrine, standards, FAQ, final CTA/contact, and footer.
- Fake or risky public claims were removed in prior work.
- WhatsApp, Instagram, and website CTAs are visible.
- The WhatsApp number is centralized as `989900190067` in current config.
- Tailwind/PostCSS and ESLint setup were added in prior work so build and lint can run.
- Hero video planning docs and a hero-video asset check script were added.
- `siteConfig.heroVideo.enabled` is currently `false`.

## Live Browser Check

Read-only check from the Codex Windows in-app browser:

- URL: `https://bashirkamali.github.io/blush/`
- Page title: `بلاش | گل‌فروشی لوکس و استودیوی تجربه گل در شیراز`
- Hero heading: `BLUSH`
- Main detected sections:
  - `hero`
  - `brand-story`
  - `services`
  - `process`
  - `vitrine`
  - `standards`
  - `faq`
  - `contact`
- Hero video element detected: `false`
- Console warnings/errors detected: none during this check.
- Visible CTA destinations include:
  - WhatsApp: `https://wa.me/989900190067`
  - Instagram: `https://www.instagram.com/blush_flower`
  - Website: `https://blush-flower.com/`

## Reasoning

This audit is documentation-only because the user asked for an audit and update that makes the process trackable from Codex Windows. The safest useful change is to record the verified repo/live state without changing production behavior, deployment config, environment variables, or large media assets.

## Tests / Checks

Completed:

- Repository structure check.
- Documentation review.
- Git branch/head review.
- Read-only live browser check.
- Console warning/error check on the currently open live page.

Not run in this audit:

- `npm run build`
- `npm run lint`
- `npm run check:hero-video`
- mobile visual screenshot pass
- deployment or GitHub Pages publish check

These were not run because this pass was focused on audit and documentation sync.

## Risks / Notes

- Some existing Persian text appears garbled when viewed through the Windows terminal output, likely due to terminal encoding display. The live browser rendered Persian text correctly in the checked page.
- `README.md` still appears older than the current landing-page direction and may need a later cleanup pass.
- `docs/brain/09-source-of-truth-decision.md` contains older transitional notes saying root `index.html` was the active legacy artifact. Later reports and the current live check show the React/Vite landing page is now the practical live path, so older docs should be read historically.
- The final cinematic hero video is still pending. No generated video asset was approved or enabled in this audit.
- Public business details that are still worth confirming: official phone/WhatsApp number, precise address, opening hours, delivery zones, and whether `blush-flower.com` or GitHub Pages is the canonical public URL.

## Suggested Next Steps

1. Run `npm run build`, `npm run lint`, and `npm run check:hero-video` from this Windows checkout.
2. Update `README.md` so it matches the current Persian-first React/Vite landing page instead of the older generic cinematic template description.
3. Decide whether `https://bashirkamali.github.io/blush/` is only a preview/deploy URL or should be documented as an active public URL.
4. Generate or film the approved hero video assets, place them under `public/media/hero-video/`, run the hero-video check, then enable `siteConfig.heroVideo.enabled`.
5. Do a mobile visual QA pass in the browser before any public handoff.
