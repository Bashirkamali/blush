# Blush Hero Video Assets

Manual generation package for Bashir:

```text
docs/hero-video-manual-generation-package.md
```

Selected direction:

```text
Luxury Arrangement Reveal with Cinematic Bloom Ritual mood
```

Place final generated and compressed hero video files here:

- `cinematic-bloom-ritual-desktop.mp4`
- `cinematic-bloom-ritual-desktop.webm`
- `cinematic-bloom-ritual-mobile.mp4`
- `cinematic-bloom-ritual-mobile.webm`

Current implementation keeps video disabled until final files exist and pass QA. After adding them, run:

```bash
npm run check:hero-video
```

Then set `siteConfig.heroVideo.enabled` to `true` in `src/config/site.ts`.

Do not enable video until the final approved desktop MP4, mobile MP4, desktop poster, and mobile poster exist. WebM files are recommended for browser efficiency but optional in the current asset checker.

Recommended budgets:

- Desktop MP4: 6-8 seconds, 1920x1080 or 1600x900, under 2.5 MB.
- Desktop WebM: under 1.8 MB when possible.
- Mobile MP4: 6-8 seconds, 1080x1920 or 720x1280, under 1.8 MB.
- Mobile WebM: under 1.3 MB when possible.

Video requirements:

- Muted, no embedded text, no music dependency.
- Seamless loop.
- Soft macro floral movement.
- No fake logo, no distorted flowers, no unrealistic hands.

Raw generated candidates belong in:

```text
public/media/hero-video/candidates/
```

Recommended candidate naming for Bashir's manual generation batch:

```text
public/media/hero-video/candidates/bashir-luxury-reveal-01-desktop.mp4
public/media/hero-video/candidates/bashir-luxury-reveal-01-mobile.mp4
public/media/hero-video/candidates/bashir-luxury-reveal-02-desktop.mp4
public/media/hero-video/candidates/bashir-luxury-reveal-02-mobile.mp4
public/media/hero-video/candidates/bashir-luxury-reveal-03-desktop.mp4
public/media/hero-video/candidates/bashir-luxury-reveal-03-mobile.mp4
```

Do not commit huge raw candidates without reviewing size first.

Do not use `public/media/hero.mp4` for the landing hero. It was rejected because it reads as a vertical, blurry, busy store walkthrough rather than a premium cinematic floral reveal.

Rollback is simple: keep the generated files in place and set `siteConfig.heroVideo.enabled` back to `false`.
