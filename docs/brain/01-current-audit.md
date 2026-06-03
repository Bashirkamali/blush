# Current Audit

Audit date: 2026-06-03

## Strengths

### Visual Strengths

- The project already uses a cinematic hero concept, which fits the Blush brand direction.
- The hero uses a restrained composition: brand name, short promise, and two clear CTAs.
- The gallery uses real local floral imagery rather than stock placeholders.
- Blush pink appears in the visual language through Tailwind colors and hero overlay.
- The standalone HTML artifact has stronger Persian campaign guidance and a more conversion-oriented CTA cluster.

### Brand Strengths

- The brand direction is clear: luxury floral, minimal, refined, and boutique.
- `#f6d6e5` is already named in Tailwind as `blush-pink`.
- The page concept of a daily vitrine is distinctive and campaign-friendly.
- Real product imagery supports trust and brand specificity.

### UX Strengths

- The React app has a simple journey: hero, then vitrine.
- WhatsApp is visible in the hero, matching a likely high-intent conversion path.
- Gallery images are lazy-loaded.
- Lightbox supports Escape and left/right arrow navigation.
- The hero checks `prefers-reduced-motion`.

### Technical Strengths

- React/Vite/Tailwind stack is lean and easy to maintain.
- Component count is low, which makes the current app easy to audit.
- `import.meta.glob` reduces manual image imports.
- TypeScript is configured strictly.
- Gallery image files are already available in WebP.

## Weaknesses

### UI/UX Issues

- The current React app has only two visible sections, so the persuasive landing-page story is thin.
- Hero copy is English while existing standalone content and product captions include Persian. Language strategy is unresolved.
- Gallery CTA defaults to `#featured`, but no matching section exists.
- React app does not expose Instagram, website, or phone CTAs despite project goals listing them.
- The gallery displays only 12 items but does not explain that more are available.
- Product metadata in `manualMeta` references filenames that do not exist in the current asset folder, so most visible captions/prices fall back to UUID-like filenames.

### Performance Issues

- React hero preloads `/hero.webp`, `/media/hero.webm`, and `/media/hero.mp4`, but those files are empty or missing.
- Root-level videos include a 16 MB `.mov`, which is risky for mobile campaign traffic.
- `CinematicBloom` creates preload links in `useEffect` and also renders a preload link inside the component, creating duplicate preload intent.
- Scroll parallax updates React state on every scroll event without throttling or `requestAnimationFrame`.
- Both `.JPG` and `.webp` variants are included by the gallery glob, so the module graph may include duplicate imagery.
- Vite build has `sourcemap: true`, which may expose source and increase production artifact size unless intentionally needed.

### Code Issues

- Vite root `index.html` appears to be a standalone page and does not mount React with `<div id="root">` and `/src/main.tsx`.
- `src/index.html` appears to be the intended React shell, but Vite will not use it by default.
- Build verification failed because `tsc` is unavailable in the current installed dependencies.
- No lockfile is present, making installs less reproducible.
- A lint script exists, but no ESLint config was found.
- `React` imports are present in files using the React 17+ JSX transform where they may be unnecessary, but this is low risk.

### Responsiveness Issues

- React hero uses `min-h-[100svh]`, which is good for mobile, but final rendering could not be verified because build/dev dependencies are incomplete.
- Gallery uses two columns on small screens and three on medium screens; this is sensible, but captions/prices may crowd image cards on small devices.
- Lightbox close button is positioned above the image (`-top-10`) and may be difficult to reach or see on some mobile screens.

### SEO Issues

- Root `index.html` has stronger production metadata, schema, and Persian/English keywords, but the React shell metadata lives in `src/index.html`, which is not the active Vite root.
- `src/index.html` canonical points to `https://example.com/`.
- React page does not include structured data unless the root standalone HTML remains active.
- Missing/empty `hero.webp` means Open Graph and poster references may fail.
- Gallery fallback alt text can become filename-derived UUID text, which is poor for SEO.

### Accessibility Issues

- React hero video has no text alternative beyond visible copy and poster fallback.
- The lightbox uses `role="dialog"` and `aria-modal`, but does not trap focus.
- Gallery cards are buttons with image alt text, which is acceptable, but visual captions may be truncated.
- The close button uses the visible character `x`/`✕`; it has an aria label, but typography/contrast should be verified.
- Current React `#root` in `src/index.html` is `dir="ltr"` while Persian content exists in data and legacy page.

### Content And Copywriting Issues

- React hero tagline, `Daily Vitrine & Bespoke Pieces`, is clear but generic compared with the brand potential.
- Gallery heading is useful but does not explain the luxury daily vitrine concept.
- CTA labels are English and not fully aligned with Persian campaign content.
- WhatsApp link has no prefilled message in the React app.
- Multiple phone numbers create conversion tracking and operational risk.

## Risk Levels

| Area | Issue | Severity | Why it matters | Recommended action |
|---|---|---|---|---|
| Build/entry | Root `index.html` is standalone and does not mount React, while `src/index.html` appears to be the React shell | Critical | Vite may build or serve the wrong page, making React changes invisible or breaking deployment expectations | Decide source of truth and align Vite entry accordingly |
| Assets | `public/hero.webp` and `public/logo.svg` are empty | High | Hero poster, OG image, preload, and logo references can fail or show blank assets | Replace with valid optimized assets or update references |
| Assets | React references `/media/hero.webm` and `/media/hero.mp4`, but no `public/media` folder exists | High | Hero video may not load in the React app | Add expected files or point React to existing optimized media |
| Dependencies | `npm run build` fails because `tsc` is missing locally | High | Current worktree cannot verify production build | Run install with the chosen package manager and add a lockfile |
| CTA | Phone/WhatsApp numbers differ across React, standalone HTML, and scripts | High | Campaign traffic may reach the wrong channel | Confirm official numbers and centralize CTA constants |
| SEO | `src/index.html` canonical is `https://example.com/` | High | If React shell becomes active, SEO/canonical will be wrong | Update metadata when entry strategy is decided |
| Performance | 16 MB `.mov` is present and preloaded in standalone HTML | High | Mobile ads traffic may suffer slow LCP/startup and high data cost | Use compressed MP4/WebM variants and avoid preloading heavy video unnecessarily |
| Performance | Gallery glob includes both JPG and WebP variants | Medium | Duplicate assets may increase build output and make gallery ordering/content unpredictable | Filter to preferred WebP or explicitly define items |
| UX | Gallery `See more` links to missing `#featured` | Medium | Dead CTA reduces trust and conversion clarity | Point to website/collections or create target section |
| Content | Most `manualMeta` keys do not match current filenames | Medium | Captions/prices fall back to filename-derived labels | Update metadata to current filenames or externalize gallery data |
| Accessibility | Lightbox lacks focus trap | Medium | Keyboard users can lose context behind modal | Add focus management when modifying gallery |
| Motion | Scroll handler sets React state on every scroll | Medium | Can cause jank on lower-end mobile devices | Throttle with `requestAnimationFrame` or move to CSS/transform ref |
| Docs | README and `PROJECT_STRUCTURE.md` contain stale claims | Medium | Future agents may trust incorrect project state | Keep `/docs/brain` as current source of truth and later update legacy docs |
| Tooling | No ESLint config found despite lint script | Low | Lint command may fail after dependencies are installed | Add or remove lint config intentionally |
| Deployment | `_deploy` and `_deploy_backup` duplicate older page artifacts | Low | Confuses source of truth and increases repo noise | Document ownership before deleting or ignoring |

## Areas Where The Cinematic Feeling Is Strong

- Full-screen hero video concept.
- Minimal hero text and high contrast over floral media.
- Soft bloom overlay.
- Gallery of real floral arrangements.
- Standalone HTML's vertical video frame feels mobile-campaign oriented and cinematic.

## Areas That Feel Weak Or Unfinished

- React asset pipeline is incomplete for the hero.
- React page lacks the full CTA ecosystem required by the brief: Instagram, website, phone, and Persian explanatory guidance.
- The current React story is too short for a persuasive luxury landing page.
- Metadata/SEO source of truth is unclear.
- Gallery metadata is disconnected from current filenames.
- Tooling is not fully reproducible without a lockfile and installed dependencies.
