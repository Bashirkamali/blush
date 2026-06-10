# Blush Hero Video Assets

Place the final generated and compressed hero video files here:

- `cinematic-bloom-ritual-desktop.mp4`
- `cinematic-bloom-ritual-desktop.webm`
- `cinematic-bloom-ritual-mobile.mp4`
- `cinematic-bloom-ritual-mobile.webm`

Current implementation keeps video disabled until these files exist. After adding them, set
`siteConfig.heroVideo.enabled` to `true` in `src/config/site.ts`.

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
