# Improvement Roadmap

This roadmap is ordered to stabilize the current project before visual redesign work. Do not begin major UI changes until the source-of-truth and asset questions are resolved.

## Phase A — Safe Quick Wins

| Priority | Task | Impact | Risk | Files likely involved | Notes |
|---|---|---|---|---|---|
| P0 | Decide whether React/Vite or standalone `index.html` is the production source of truth | Prevents wasted work | Low | `index.html`, `src/index.html`, `vite.config.ts`, `src/` | This is the most important decision before redesign |
| P0 | Use `09-source-of-truth-decision.md` as the migration baseline before converting root `index.html` | Prevents loss of production-like content | Low | `docs/brain/09-source-of-truth-decision.md`, `index.html`, `src/` | Current recommendation: React/Vite is future source, root HTML is current active legacy artifact |
| P0 | Confirm official WhatsApp, phone, Instagram, and website links | Prevents lost conversions | Low | `src/components/CinematicBloom.tsx`, `index.html`, future CTA constants | Current numbers differ across files |
| P0 | Fix active HTML entry metadata after source-of-truth decision | SEO correctness | Low | `index.html` or active shell | Avoid `example.com` canonical |
| P1 | Replace empty `public/hero.webp` and `public/logo.svg` or remove references | Prevents blank poster/logo/OG | Low | `public/`, `CinematicBloom.tsx`, active HTML | Use optimized production assets |
| P1 | Point hero video references to real optimized files | Restores cinematic hero | Medium | `public/media/`, `CinematicBloom.tsx`, root video files | Prefer MP4/WebM under `public/media` for React |
| P1 | Update gallery CTA away from missing `#featured` | Fixes dead interaction | Low | `DailyVitrineGallery.tsx` | Link to main website/collections or create target |
| P1 | Add dependency lockfile with chosen package manager | Reproducible builds | Low | `package-lock.json` or equivalent | Requires install, not done during this audit |

## Phase B — Visual And UX Enhancement

| Priority | Task | Impact | Risk | Files likely involved | Notes |
|---|---|---|---|---|---|
| P1 | Bring Instagram and website CTAs into the React experience if React is source of truth | Matches campaign goals | Medium | `CinematicBloom.tsx`, possible CTA component | Keep controls compact and premium |
| P1 | Add a concise Persian/RTL-friendly guidance layer if campaign audience is local | Improves clarity and conversion | Medium | Hero component, copy files | Use confirmed language strategy |
| P1 | Curate vitrine order and captions | Makes gallery feel intentional | Low | `src/data/vitrineItems.js` | Avoid UUID-derived copy |
| P2 | Add a restrained final conversion section after gallery | Improves end-of-page conversion | Medium | New or existing component | Avoid landing-page bloat |
| P2 | Improve lightbox mobile ergonomics | Better browsing | Low | `DailyVitrineGallery.tsx` | Larger close target, focus trap, swipe optional |
| P2 | Refine hero copy to better express luxury daily vitrine | Stronger persuasion | Low | `CinematicBloom.tsx` | Keep short and formal |
| P3 | Consider section-level storytelling around bespoke pieces and daily vitrine | More persuasive page | Medium | New components | Only after performance/source-of-truth fixes |

## Phase C — Performance And SEO

| Priority | Task | Impact | Risk | Files likely involved | Notes |
|---|---|---|---|---|---|
| P0 | Remove or avoid preloading the 16 MB `.mov` in production | Major mobile performance win | Medium | `index.html`, media assets | Use compressed MP4/WebM and poster-first loading |
| P1 | Filter gallery imports to WebP only or use explicit curated imports | Smaller build and cleaner gallery | Low | `src/data/vitrineItems.js` | Keep JPG as source/archive only if needed |
| P1 | Replace duplicate preload logic in hero | Cleaner resource loading | Low | `CinematicBloom.tsx`, active HTML | Choose HTML-level or component-level preload |
| P1 | Make scroll parallax performance-safe | Reduces mobile jank | Medium | `CinematicBloom.tsx` | Use `requestAnimationFrame` or CSS/ref transforms |
| P1 | Validate active SEO metadata and structured data | Better search/social previews | Medium | active HTML, possibly React SEO component | Use real domain, title, description, OG image |
| P2 | Add image dimensions or stable sizing where possible | Better layout stability | Low | `DailyVitrineGallery.tsx`, data | Current aspect ratio helps, but source dimensions could improve |
| P2 | Disable production sourcemaps unless required | Smaller/safer production output | Low | `vite.config.ts` | Keep if debugging policy requires it |
| P2 | Add accessibility checks for modal and CTAs | Better keyboard/screen reader UX | Medium | `DailyVitrineGallery.tsx`, hero | Focus trap, visible focus, language direction |

## Phase D — Structural Refactor

| Priority | Task | Impact | Risk | Files likely involved | Notes |
|---|---|---|---|---|---|
| P1 | Centralize brand/CTA constants | Reduces inconsistency | Low | New config/data file, hero, gallery, standalone migration | Do after official links confirmed |
| P2 | Migrate useful standalone HTML behavior into React if React is chosen | Unifies implementation | High | `index.html`, `src/components/`, `src/data/` | Do incrementally, section by section |
| P2 | Split gallery data from import mechanics | Easier curation | Medium | `src/data/vitrineItems.js` | Could become typed TS later |
| P2 | Add ESLint config or remove lint script | Tooling clarity | Low | ESLint config, `package.json` | Only after dependency install |
| P3 | Archive or remove legacy deploy artifacts after owner approval | Reduces confusion | Medium | `_deploy/`, `_deploy_backup/`, root media | Do not delete without explicit approval |
| P3 | Introduce a small component system for CTAs and section shells | Consistency | Medium | `src/components/` | Only when repeated patterns appear |
