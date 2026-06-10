# Hero Video Asset Production

Date: 2026-06-11

## Production Status

Video generation was not executed in this pass.

Reason: real verified video-generation routes are credit/paid based:

- Fal text-to-video endpoints return USD pricing.
- Picsart Seedance 2.0 Fast quoted `56` credits for one 7-second 720p 16:9 generation.

Per project constraints, no paid API, credit, subscription, or external account action was used without explicit approval.

## Candidate Folder

Raw candidate videos should be saved here:

```text
public/media/hero-video/candidates/
```

Expected candidate names:

```text
candidate-01-macro-bloom-desktop.mp4
candidate-01-macro-bloom-mobile.mp4
candidate-02-florist-final-touch-desktop.mp4
candidate-02-florist-final-touch-mobile.mp4
candidate-03-luxury-arrangement-reveal-desktop.mp4
candidate-03-luxury-arrangement-reveal-mobile.mp4
candidate-04-soft-gold-packaging-ritual-desktop.mp4
candidate-04-soft-gold-packaging-ritual-mobile.mp4
```

Do not create placeholder video files. Missing files are acceptable until real candidates exist.

## Final Asset Paths

Only approved optimized assets should be copied to:

```text
public/media/hero-video/cinematic-bloom-ritual-desktop.mp4
public/media/hero-video/cinematic-bloom-ritual-desktop.webm
public/media/hero-video/cinematic-bloom-ritual-mobile.mp4
public/media/hero-video/cinematic-bloom-ritual-mobile.webm
public/media/hero-video/cinematic-bloom-ritual-poster.jpg
public/media/hero-video/cinematic-bloom-ritual-mobile-poster.jpg
```

Current config still uses `./hero.webp` as poster fallback. Update poster paths only after final posters exist.

## Compression Commands

`ffmpeg` is not installed locally. When available, use:

```bash
ffmpeg -i raw-desktop.mp4 \
  -vf "scale=1600:-2,fps=24" \
  -an -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -crf 25 -preset slow -movflags +faststart \
  public/media/hero-video/cinematic-bloom-ritual-desktop.mp4

ffmpeg -i raw-mobile.mp4 \
  -vf "scale=720:-2,fps=24" \
  -an -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -crf 26 -preset slow -movflags +faststart \
  public/media/hero-video/cinematic-bloom-ritual-mobile.mp4

ffmpeg -i public/media/hero-video/cinematic-bloom-ritual-desktop.mp4 \
  -c:v libvpx-vp9 -b:v 0 -crf 34 -an \
  public/media/hero-video/cinematic-bloom-ritual-desktop.webm

ffmpeg -i public/media/hero-video/cinematic-bloom-ritual-mobile.mp4 \
  -c:v libvpx-vp9 -b:v 0 -crf 36 -an \
  public/media/hero-video/cinematic-bloom-ritual-mobile.webm
```

Poster extraction:

```bash
ffmpeg -ss 00:00:01.000 -i public/media/hero-video/cinematic-bloom-ritual-desktop.mp4 \
  -frames:v 1 -q:v 3 public/media/hero-video/cinematic-bloom-ritual-poster.jpg

ffmpeg -ss 00:00:01.000 -i public/media/hero-video/cinematic-bloom-ritual-mobile.mp4 \
  -frames:v 1 -q:v 3 public/media/hero-video/cinematic-bloom-ritual-mobile-poster.jpg
```

## Size Targets

- Desktop MP4: ideally under 4 MB, hard warning above 6 MB.
- Mobile MP4: ideally under 3 MB, hard warning above 5 MB.
- WebM: optional but recommended.
- Posters: optimized and lightweight.
- Duration: 6-8 seconds.
- No audio track.

## Integration Checklist

1. Add final MP4 files.
2. Add WebM files or clear WebM config paths before enabling.
3. Add final posters if replacing `hero.webp`.
4. Run `npm run check:hero-video`.
5. Set `heroVideo.enabled: true` only after the check passes.
6. Run `npm run lint`.
7. Run `npm run build`.
8. Browser QA desktop and mobile.

## Rollback

Set this in `src/config/site.ts`:

```ts
heroVideo: {
  enabled: false,
}
```

The hero will return to poster-only fallback without requesting video files.
