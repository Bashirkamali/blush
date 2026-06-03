# Blush Project Overview

## What This Project Is

This repository contains the Blush cinematic landing page: a luxury, minimal floral campaign page for Blush, a floral brand based in Shiraz, Iran.

The intended brand feeling is refined, emotional, formal, cinematic, boutique, high-end, architectural, floral, and seasonal. The main brand color is blush pink `#f6d6e5`, supported by white, soft gold, and neutral tones.

## What The Landing Page Is Trying To Achieve

The page is intended for campaign traffic, likely including Google Ads. Its job is to quickly communicate the Blush luxury daily vitrine concept and move visitors toward a conversion action.

Primary goals:

- Create a premium first impression.
- Show a cinematic floral hero.
- Present the daily vitrine/gallery concept.
- Send visitors to WhatsApp, Instagram, or the main website/collections.
- Keep the page fast and persuasive, especially on mobile.

## Current Tech Stack

- Framework: React 18
- Language: TypeScript for components; JavaScript for `src/data/vitrineItems.js`
- Build tool: Vite 5
- Styling: Tailwind CSS plus small custom CSS in `src/index.css`
- Fonts: Playfair Display is referenced in HTML/Tailwind; body stack uses Inter/system fallback in CSS
- Routing: None visible; this is a single-page landing experience
- Package manager: Unknown. No lockfile is currently present.

## Main Folders And Important Files

- `src/App.tsx`: Main React composition. Renders the cinematic hero and daily vitrine gallery.
- `src/main.tsx`: React entrypoint.
- `src/components/CinematicBloom.tsx`: Hero section with background video, poster image, parallax, and two CTAs.
- `src/components/DailyVitrineGallery.tsx`: Gallery section with 12-item display limit and lightbox behavior.
- `src/data/vitrineItems.js`: Uses `import.meta.glob` to collect gallery assets and attach metadata.
- `src/assets/vitrine/`: Vitrine product/gallery imagery. Contains both `.webp` and `.JPG` versions for many items.
- `src/index.css`: Tailwind layers and small custom utilities.
- `tailwind.config.js`: Blush color and serif font extension.
- `vite.config.ts`: Vite config with React plugin, dev server port 3000, and sourcemap build output.
- `index.html`: Root HTML used by Vite by default, but currently appears to be a large standalone/legacy landing page rather than the React mount shell.
- `src/index.html`: React-oriented HTML shell with `#root`, but Vite does not use this file by default unless configured.
- `_deploy/` and `_deploy_backup/`: Static deployment/backup artifacts.
- `public/hero.webp` and `public/logo.svg`: Currently empty files.
- `IMG_1600_high_quality.mov`, `IMG_1600 (2).mp4`, `ezyZip.mp4`: Root-level video files used by the standalone HTML, not by the current React component paths.

## Main User Journey

Current React app journey:

1. Visitor lands on a full-screen cinematic hero.
2. Visitor sees the Blush name, short English tagline, and two CTAs.
3. `View Collections` scrolls to the daily vitrine gallery.
4. `Chat on WhatsApp` opens WhatsApp.
5. Visitor browses a 12-item image grid.
6. Visitor can open images in a lightbox and navigate with arrow buttons/keyboard.

Current standalone root `index.html` journey:

1. Visitor lands on a vertical cinematic video composition.
2. Visitor sees Persian guide text and icon CTAs for WhatsApp, website, Instagram, and phone.
3. Visitor can scroll to a larger static vitrine grid.
4. Multiple scripts handle guide state, WhatsApp message behavior, schema, image fallback, and click tracking.

The repo currently contains both journeys, and it is unclear which is intended as the production source of truth.

## Primary CTAs

React source CTAs:

- `View Collections`: in-page anchor to `#daily-vitrine`
- `Chat on WhatsApp`: `https://wa.me/989900190067`
- Gallery `See more`: defaults to `#featured`, but no `#featured` section currently exists

Standalone HTML CTAs:

- WhatsApp: `https://wa.me/989357060067` in the visible CTA row, plus script references to `989900190067`
- Website: `https://blush-flower.com/`
- Instagram: `https://www.instagram.com/blush_flower`
- Phone: `tel:+989177800806`

The CTA phone numbers are inconsistent across files and should be confirmed before campaign launch.

## Current Status

The repository has a working conceptual structure, but production readiness is unclear.

Known baseline notes:

- The React app is very small and understandable.
- The root `index.html` is not a normal Vite React shell and appears to be an older standalone page.
- `src/index.html` contains the React `#root` mount but is not the default Vite entry.
- Public hero assets expected by React are empty or missing.
- `/public/media/hero.webm` and `/public/media/hero.mp4` do not exist.
- Local build verification failed because `tsc` is not available in the current `node_modules`.
- No package lockfile is present.
- No ESLint configuration file was found, although a lint script exists.

## What Future AI Agents Should Understand First

Before making visual or technical changes, determine the intended production path:

- Should the React/Vite app become the source of truth?
- Should the standalone `index.html` remain the deployed page?
- Should the standalone page be migrated into React?

Future agents should preserve the luxury/minimal/cinematic Blush identity and avoid generic ecommerce styling. The page should feel quiet, premium, seasonal, fast, and conversion-focused. Do not redesign blindly; use the audit and roadmap before changing source files.
