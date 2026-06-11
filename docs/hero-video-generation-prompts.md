# Hero Video Generation Prompts

Date: 2026-06-11

Universal rules for every prompt:

- No text inside video.
- No fake logos or unreadable typography.
- No watermark.
- No distorted flowers.
- No distorted hands.
- No plastic petals.
- No oversaturated pink.
- No busy flower-shop background.
- No fantasy garden.
- No cheap stock-video look.
- No fast movement.
- No shaky camera.
- Must be calm enough behind hero text.
- Must be loopable.
- Must feel premium in the first 3 seconds.

## Universal Negative Prompt

cheap stock video, busy retail flower shop, flower wall, neon pink, oversaturated colors, fake logo, unreadable text, watermark, plastic flowers, distorted petals, deformed flower centers, impossible bouquet density, extra fingers, bad hands, distorted nails, hands with jewelry clutter, fast camera movement, shaky camera, fantasy garden, floating magical petals, artificial CGI look, waxy flowers, blurry footage, low resolution, harsh fluorescent lighting, cluttered background, messy table, cartoon style, unrealistic blooming, visible brand text, fake packaging logo

## A. Macro Bloom Opening

### Desktop 16:9

Photorealistic luxury floral macro video for a premium floral brand. Extreme macro of a blush garden rose and ivory ranunculus petals, soft condensation, creamy ivory background, shallow depth of field, soft window light from the left and gentle champagne highlights. Slow 100mm macro push-in across layered petal folds. The bloom moves only subtly, like natural breathing, no fantasy blooming. Keep the left 35% calm and darker for website hero text overlay. 7 seconds, seamless loop, muted, no text, no logos, no watermark.

### Mobile 9:16

Vertical photorealistic macro floral video. Blush garden rose and ivory ranunculus fill the upper two-thirds of the frame, with soft darker negative space in the lower third for text overlay. Slow push-in, shallow depth of field, creamy bokeh, warm ivory studio background, soft champagne highlights. 7 seconds, seamless loop, muted, no text, no logos, no watermark.

### 4:5 Social / Ad

Photorealistic luxury macro bloom video for premium floral social creative. Blush rose petals, ivory ranunculus, soft dew, creamy warm background, slow macro drift, elegant negative space at bottom for future ad copy. 7 seconds, loopable, no text.

## B. Florist Final Touch

### Desktop 16:9

Photorealistic luxury floral atelier video. A refined asymmetrical bouquet of white orchids, blush garden roses, ranunculus, and muted green stems sits center-right on an ivory studio table. One realistic elegant florist hand enters briefly and gently adjusts a single stem and smooths a blush silk ribbon. Slow 85mm editorial close-up, soft daylight from the left, warm cream highlights, shallow depth of field. Preserve clean darker negative space on the left for hero text. 7 seconds, seamless loop, muted, no text, no logos, no watermark, natural five-finger hand anatomy.

### Mobile 9:16

Vertical luxury florist final-touch video. Tight crop on realistic fingertips adjusting one blush bloom and ribbon in a premium bouquet of white orchids and blush roses. Keep lower center calm enough for overlay text. Soft studio light, shallow depth, slow movement only. 7 seconds, loopable, muted, no text, no logos.

### 4:5 Social / Ad

Premium editorial florist close-up. Realistic hand adjusts a single blush bloom, smooths ribbon, and exits. Ivory tabletop, champagne highlights, quiet atelier mood, loopable 7 seconds, no text.

## C. Luxury Arrangement Reveal

### Desktop 16:9

Photorealistic cinematic luxury floral hero video. A premium Blush-style arrangement emerges slowly from soft shadow into warm ivory light: white orchids, pale blush garden roses, ranunculus or lisianthus, muted green stems, subtle champagne-gold accent, soft blush ribbon. Camera performs a slow lateral reveal and slight push-in with a 70mm editorial product lens. Arrangement sits center-right; left side remains calm and darker for website headline and CTAs. Controlled luxury still-life lighting, soft key, gentle rim, warm gold reflection, shallow but realistic depth of field. 7 seconds, seamless loop with continuous slow rotation or matching start/end angle, muted, no text, no logos, no watermark.

### Mobile 9:16

Vertical cinematic luxury floral reveal. Premium arrangement of white orchids, blush garden roses, ranunculus or lisianthus, soft blush ribbon, muted green stems, and champagne-gold detail. Bouquet fills the middle/upper frame, with calm darker negative space near the bottom for text and CTA. Slow controlled reveal from shadow into soft ivory light, gentle push-in, shallow depth of field. 7 seconds, seamless loop, muted, no text, no logos, no watermark.

### 4:5 Social / Ad

Luxury floral arrangement reveal for premium brand ad. Bouquet rotates slowly from shadow into soft light, blush/ivory/gold palette, asymmetrical real florist arrangement, elegant negative space for copy, 7 seconds, loopable, no text.

## D. Soft Gold Packaging Ritual

### Desktop 16:9

Photorealistic luxury floral gifting ritual. Close-up of blush wrapping paper and champagne-gold ribbon around a refined bouquet of ivory orchids and pale blush roses. A realistic elegant hand pulls the ribbon once and presses the paper edge into place; avoid complex knot tying. Slow 85mm close product shot, slightly overhead, warm late-afternoon light, soft shadows, tactile paper grain and ribbon texture. Large clean paper surface on left for hero text. 7 seconds, seamless loop, muted, no text, no logos, no watermark.

### Mobile 9:16

Vertical premium packaging ritual video. Champagne ribbon moves diagonally across blush wrapping paper, flowers peek from top edge, realistic hand performs one simple ribbon pull and exits. Warm ivory studio light, soft gold reflections, calm lower safe area for text. 7 seconds, loopable, muted, no text, no logos.

### 4:5 Social / Ad

Luxury floral packaging close-up. Blush paper, champagne ribbon, ivory orchids, pale roses, tactile slow ribbon pull, premium tabletop, soft gold light, 7 seconds, loopable, no text.

## Model-Specific Notes

### Fal Seedance 2.0 Fast

Verified schema:

- `duration`: string, use `"7"`.
- `aspect_ratio`: `"16:9"` or `"9:16"`.
- `resolution`: `"720p"` max for fast endpoint.
- `generate_audio`: `false`.

Use queue submission only after approval because it spends USD.

### Picsart Seedance 2.0 Fast

Verified schema:

- `duration`: number, use `7`.
- `aspectRatio`: `"16:9"` or `"9:16"`.
- `resolution`: `"720p"`.
- `generateAudio`: `false`.

Dry-run quote: one 7-second 720p 16:9 generation cost `56` Picsart credits at the time of discovery.

Use generation only after approval because it spends credits.
