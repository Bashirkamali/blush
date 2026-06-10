# Hero Video Tool Discovery

Date: 2026-06-11

## Verified Available Tools

### Repo / Frontend

- Vite + React + TypeScript + Tailwind.
- Existing scripts:
  - `npm run dev`
  - `npm run build`
  - `npm run lint`
  - `npm run preview`
- Added script:
  - `npm run check:hero-video`

### Browser / QA

- Codex in-app Browser is available and was used earlier for desktop/mobile hero checks.
- Browser can inspect DOM state, screenshots, console warnings/errors, viewport behavior, and CTA clickability.

### Local Media Utilities

- `sips` is available at `/usr/bin/sips`.
- `cwebp` is available at `/usr/local/bin/cwebp`.
- Node and npm are available.

These are useful for basic still-image/poster processing, not for robust video transcoding.

### Real Video Generation Connectors

Fal connector is callable:

- Catalog search works.
- Pricing works.
- Model schema works.
- Relevant verified models include:
  - `bytedance/seedance-2.0/fast/text-to-video`
  - `bytedance/seedance-2.0/text-to-video`
  - `fal-ai/kling-video/v3/pro/text-to-video`
  - `luma/agent/ray/v3.2/text-to-video`

Picsart connector is callable:

- Model listing works.
- Model params work.
- Param validation works.
- Pricing dry-run works.
- Relevant verified models include:
  - `seedance-2.0-fast`
  - `seedance-2.0`
  - `kling-v3`
  - `sora-2`
  - `sora-2-pro`
  - `veo-3.1`
  - `pika-2.2`
  - `wan-2.7-t2v`
  - `wan-2.7-i2v`

### Image / Design Tools

- Built-in `image_gen` exists for raster image generation, but it does not generate video.
- Figma connector exists for design files and screenshots, not direct video generation.
- Photoshop connector exists for image editing, not direct video generation.

## Unavailable Or Not Verified

- Local `ffmpeg`: not found.
- Local `ffprobe`: not found.
- ImageMagick `magick`, `convert`, `identify`: not found.
- `gifsicle`, `gifski`, `oxipng`, `pngquant`, `jpegoptim`, `avifenc`: not found.
- Direct Runway, Pika, Kling, Sora, Veo, or Replicate standalone connectors were not verified as direct callable tools. Some are available only through Picsart/Fal model catalogs.

## Tools Requiring Credentials Or Credits

- Fal generation requires paid API usage. Pricing query for `bytedance/seedance-2.0/fast/text-to-video` returned USD pricing.
- Picsart generation requires authenticated Picsart credits. Dry-run for one 7-second `seedance-2.0-fast` 720p 16:9 generation returned `56` credits.
- Because generation would spend real money/credits, no generation job was submitted in this pass.

## Tools Requiring Manual User Action

- Any paid/credit-based generation job requires explicit user approval.
- Final manual video generation can be done in Fal, Picsart, Runway, Pika, Kling, Sora, Veo, or another approved tool using `docs/hero-video-generation-prompts.md`.
- Final video compression requires either installing `ffmpeg` locally or using an external compression/export pipeline.

## Recommended Production Route

1. Generate 4 desktop candidates and 4 mobile candidates using `seedance-2.0-fast`, Kling, Sora, Veo, or Luma Ray.
2. Start with text-to-video for speed, then use image-to-video if a still poster/art direction frame needs to be locked.
3. Review candidates against `docs/hero-video-candidate-scorecard.md`.
4. Compress final MP4/WebM files with `ffmpeg`.
5. Place final assets under `public/media/hero-video/`.
6. Run `npm run check:hero-video`.
7. Enable `siteConfig.heroVideo.enabled` only after checks pass.

## Risk Notes

- Do not use `public/media/hero.mp4`; it is a vertical store walkthrough and fails the premium/cinematic bar.
- Do not enable video before final assets exist.
- Do not commit raw large videos without size review.
- Do not commit credentials, private URLs, or generation logs containing tokens.
- WebM paths are currently configured. If WebM files are not produced, either add them or clear those config paths before enabling video.
