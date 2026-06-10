# Blush Hero Video Manual Generation Package

Date: 2026-06-11

Prepared for: Bashir

Selected direction: `Luxury Arrangement Reveal`

Mood: `Cinematic Bloom Ritual`

Status:

- No paid generation job has been submitted.
- No fake or placeholder video files should be created.
- The landing page video must remain disabled until final approved assets exist and pass checks.
- Do not use `public/media/hero.mp4`; it is vertical, blurry, busy, and not premium enough for the hero.

## 1. Best Final Prompt For Fal

Use with Fal `bytedance/seedance-2.0/fast/text-to-video`.

```text
Photorealistic cinematic luxury floral hero video for Blush, a premium floral atelier. A refined Blush-style floral arrangement slowly emerges from soft shadow into warm ivory studio light. The arrangement features white orchids, pale blush garden roses, ivory ranunculus or lisianthus, muted soft-green stems, a subtle champagne-gold accent, and a soft blush silk ribbon. The composition feels like a perfume or jewelry commercial: minimal, quiet, tactile, expensive, emotionally elegant.

Camera: slow lateral reveal from left to right with a very gentle push-in, 70mm editorial product lens, shallow but realistic depth of field. The arrangement sits center-right, with the left side kept calm, slightly darker, and uncluttered for website headline and CTA overlay.

Lighting: controlled luxury still-life lighting, soft key light from the left, gentle warm rim light, subtle champagne-gold reflection, creamy ivory background, soft shadows, no harsh highlights.

Motion: very slow arrangement reveal, subtle natural petal movement, calm enough for hero text, seamless 7-second loop with matching start and end feel. No sound. No text inside the video. No logos. No watermark.

Realism: premium commercial product film, natural flowers, real florist arrangement, realistic petals and stems, no fantasy blooming, no artificial plastic look.
```

## 2. Best Final Prompt For Picsart

Use with Picsart `seedance-2.0-fast`.

```text
Create a photorealistic 7-second luxury floral website hero video for Blush, a premium floral brand. Show a refined floral arrangement slowly revealed from soft shadow into warm ivory light. Flowers: white orchids, pale blush garden roses, ivory ranunculus or lisianthus, muted soft-green stems, subtle champagne-gold detail, soft blush silk ribbon. The feeling should be minimal, cinematic, emotional, elegant, and premium, like a perfume or jewelry commercial.

Composition: arrangement center-right, calm darker negative space on the left for website text and buttons. Slow lateral reveal plus gentle push-in, 70mm editorial product-film look, shallow realistic depth of field. Soft studio lighting, warm ivory background, champagne highlights, no clutter.

The video must be loopable, muted, calm behind hero text, and premium within the first 3 seconds. No text inside the video, no fake logo, no watermark, no distorted flowers, no distorted hands, no busy flower-shop background, no oversaturated pink.
```

## 3. Best Fallback Prompt For Any General AI Video Tool

```text
Generate a 6-8 second photorealistic cinematic luxury floral hero video for a premium brand called Blush. The video should show a refined floral arrangement slowly revealed from shadow into warm ivory studio light. Use white orchids, pale blush garden roses, ivory ranunculus or lisianthus, muted soft-green stems, one subtle champagne-gold accent, and a soft blush silk ribbon.

Style: minimal luxury, perfume-commercial mood, soft emotional elegance, realistic flowers, calm movement, shallow but believable depth of field, warm ivory and blush palette, refined product-film lighting.

Camera: slow lateral reveal with a gentle push-in. Keep the arrangement center-right and preserve clean negative space on the left for website hero text. Make it seamless and loopable. No sound. No embedded text. No logos. No watermark. Avoid stock-footage aesthetics, busy backgrounds, fantasy flowers, plastic petals, oversaturated pink, shaky camera, and distorted anatomy.
```

## 4. Desktop 16:9 Prompt

```text
Photorealistic cinematic luxury floral hero video. A premium Blush-style arrangement emerges slowly from soft shadow into warm ivory light: white orchids, pale blush garden roses, ivory ranunculus or lisianthus, muted soft-green stems, subtle champagne-gold accent, soft blush silk ribbon. Camera performs a slow lateral reveal and slight push-in with a 70mm editorial product lens. Arrangement sits center-right; left side remains calm, slightly darker, and uncluttered for website headline and CTA overlay. Controlled luxury still-life lighting, soft key light, gentle rim light, warm gold reflection, creamy ivory background, shallow realistic depth of field. 7 seconds, seamless loop, muted, no text, no logos, no watermark.
```

## 5. Mobile 9:16 Prompt

```text
Vertical photorealistic cinematic luxury floral reveal for a premium floral brand. A refined Blush-style arrangement of white orchids, pale blush garden roses, ivory ranunculus or lisianthus, muted soft-green stems, champagne-gold detail, and soft blush silk ribbon slowly emerges from shadow into soft ivory studio light. Bouquet fills the upper and middle frame, with calm darker negative space near the lower third for mobile headline and CTA overlay. Slow controlled reveal, gentle push-in, 70mm editorial product-film look, shallow realistic depth of field, warm ivory background, soft champagne highlights. 7 seconds, seamless loop, muted, no text, no logos, no watermark.
```

## 6. Negative Prompt

```text
cheap stock video, busy retail flower shop, flower wall, neon pink, oversaturated colors, fake logo, unreadable text, watermark, plastic flowers, distorted petals, deformed flower centers, impossible bouquet density, extra fingers, bad hands, distorted hands, distorted nails, jewelry clutter, fast camera movement, shaky camera, fantasy garden, floating magical petals, artificial CGI look, waxy flowers, blurry footage, low resolution, harsh fluorescent lighting, cluttered background, messy table, cartoon style, unrealistic blooming, visible brand text, fake packaging logo, random vase, supermarket bouquet, wedding hall background, crowded storefront, high-contrast nightclub lighting
```

## 7. Exact Generation Settings To Use If Available

Fal:

- Model: `bytedance/seedance-2.0/fast/text-to-video`
- Desktop aspect ratio: `16:9`
- Mobile aspect ratio: `9:16`
- Duration: `"7"`
- Resolution: `"720p"`
- Audio: `generate_audio: false`
- Submit only after manual spending approval.

Picsart:

- Model: `seedance-2.0-fast`
- Desktop aspect ratio: `16:9`
- Mobile aspect ratio: `9:16`
- Duration: `7`
- Resolution: `720p`
- Audio: `generateAudio: false`
- Use pricing/dry-run first when available.
- Submit only after manual credit approval.

General AI video tools:

- Duration: 6-8 seconds.
- Frame rate: 24fps or 30fps.
- Desktop: 16:9.
- Mobile: 9:16 generated separately if possible.
- Audio: off or none.
- Loop: enabled if available; otherwise generate calm matching start/end motion.
- Camera motion: slow lateral reveal plus gentle push-in.
- Realism: photorealistic commercial product film.

## 8. How Many Outputs To Generate

Minimum useful batch:

- 3 desktop candidates.
- 3 mobile candidates.
- Total: 6 outputs.

Preferred review batch:

- 4 desktop candidates.
- 4 mobile candidates.
- Total: 8 outputs.

Generate desktop and mobile as matched pairs when possible. Reject any output that is blurry, busy, too pink, artifact-heavy, generic, hard to read text over, or not premium in the first 3 seconds.

## 9. How To Name Downloaded Files

Raw review candidates:

```text
public/media/hero-video/candidates/bashir-luxury-reveal-01-desktop.mp4
public/media/hero-video/candidates/bashir-luxury-reveal-01-mobile.mp4
public/media/hero-video/candidates/bashir-luxury-reveal-02-desktop.mp4
public/media/hero-video/candidates/bashir-luxury-reveal-02-mobile.mp4
public/media/hero-video/candidates/bashir-luxury-reveal-03-desktop.mp4
public/media/hero-video/candidates/bashir-luxury-reveal-03-mobile.mp4
public/media/hero-video/candidates/bashir-luxury-reveal-04-desktop.mp4
public/media/hero-video/candidates/bashir-luxury-reveal-04-mobile.mp4
```

Final approved assets:

```text
public/media/hero-video/cinematic-bloom-ritual-desktop.mp4
public/media/hero-video/cinematic-bloom-ritual-desktop.webm
public/media/hero-video/cinematic-bloom-ritual-mobile.mp4
public/media/hero-video/cinematic-bloom-ritual-mobile.webm
public/media/hero-video/cinematic-bloom-ritual-poster.jpg
public/media/hero-video/cinematic-bloom-ritual-mobile-poster.jpg
```

WebM files are recommended but optional in the checker. MP4 desktop, MP4 mobile, poster, and mobile poster are required before enabling video.

## 10. Where To Place Files In The Repo

Place raw generated review files in:

```text
public/media/hero-video/candidates/
```

Place only final approved and optimized production files in:

```text
public/media/hero-video/
```

Do not commit very large raw candidates without checking file size first. Keep production files short and compressed.

## 11. How To Run Asset Check

From the repo root:

```bash
npm run check:hero-video
```

Expected behavior before approval:

- `heroVideo.enabled` should be `false`.
- Missing final video files are acceptable while disabled.

Expected behavior before enabling:

- Desktop MP4 exists.
- Mobile MP4 exists.
- Desktop poster exists.
- Mobile poster exists.
- Config paths match actual files.
- File sizes are within safe limits.

Recommended target sizes:

- Desktop MP4: ideally under 4 MB, hard warning above 6 MB.
- Mobile MP4: ideally under 3 MB, hard warning above 5 MB.
- Poster images: lightweight JPG or WebP-derived JPG, preferably under 300 KB each.

## 12. How To Enable Video After Approval

Only after final approved assets are in place and `npm run check:hero-video` passes:

1. Open `src/config/site.ts`.
2. Set:

```ts
heroVideo: {
  enabled: true,
}
```

3. Confirm the source paths still point to:

```text
/media/hero-video/cinematic-bloom-ritual-desktop.mp4
/media/hero-video/cinematic-bloom-ritual-desktop.webm
/media/hero-video/cinematic-bloom-ritual-mobile.mp4
/media/hero-video/cinematic-bloom-ritual-mobile.webm
/media/hero-video/cinematic-bloom-ritual-poster.jpg
/media/hero-video/cinematic-bloom-ritual-mobile-poster.jpg
```

4. Run:

```bash
npm run check:hero-video
npm run lint
npm run build
```

5. Preview on desktop and mobile. Confirm hero text stays readable, CTAs remain clickable, reduced-motion uses the poster, and there are no missing asset requests in the console.

## 13. How To Rollback

Fast rollback:

1. Open `src/config/site.ts`.
2. Set:

```ts
heroVideo: {
  enabled: false,
}
```

3. Run:

```bash
npm run check:hero-video
npm run build
```

This returns the hero to the poster/fallback image without deleting generated files.
