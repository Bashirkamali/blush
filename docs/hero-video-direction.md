# Blush Hero Video Direction

Date: 2026-06-10

## Direct Audit Of Current Hero Visual

The current hero image is clean, but it is not strong enough to carry a premium landing page by itself.

- It looks like a polished floral photograph, not a brand-defining opening scene.
- The frame is passive. Nothing unfolds, moves, or creates a moment of anticipation.
- The image does not show craft. A luxury buyer needs to feel selection, touch, restraint, and preparation.
- It has flowers, but not enough ritual. Premium floral brands sell the emotional ceremony around the gift, not only the arrangement.
- Commercially, it does not create urgency to contact. It says "nice flowers"; it does not say "this brand will make my important gift feel unforgettable."
- The static split layout makes the page feel like an elegant catalog, not a cinematic brand experience.
- The current image lacks first-three-second impact. It does not stop scrolling strongly enough on mobile or desktop.

## Three Short-Video Concepts

### 1. Cinematic Bloom Ritual

Emotional goal: Make the visitor feel quiet anticipation, premium care, and the intimacy of a gift being prepared for an important moment.

6-8 second storyboard:

1. Seconds 0-2: Macro close-up of ivory orchids and pale blush roses in soft studio light; petals move almost imperceptibly.
2. Seconds 2-4: Elegant florist hand gently adjusts a silk blush ribbon or one stem, slow and controlled.
3. Seconds 4-6: Camera glides across the finished arrangement, catching a soft gold accent and glass/vase reflection.
4. Seconds 6-8: The scene settles back into the opening composition for a seamless loop.

Camera movement: Slow lateral dolly with a shallow push-in, macro lens, shallow depth of field, no handheld shake.

Lighting direction: Soft window light from one side, creamy highlights, delicate shadows, no harsh retail lighting.

Color palette: Blush pink, ivory white, champagne gold, warm taupe, muted green stems.

Product/flower focus: Orchid, garden rose, ranunculus or lisianthus, minimal premium arrangement, silk ribbon or refined packaging detail.

Why it converts better: It communicates craft, softness, gift value, and premium restraint immediately. The visitor sees Blush as a designed experience, not a normal flower shop.

### 2. The Quiet Arrival

Emotional goal: Make the visitor imagine receiving the gift: calm, expensive, thoughtful, and personal.

6-10 second storyboard:

1. Seconds 0-2: Blush floral box rests on a warm ivory surface, mostly in shadow.
2. Seconds 2-5: Camera pushes in as soft light passes over petals and packaging.
3. Seconds 5-7: A subtle reveal of ribbon texture, card edge, and gold-toned detail.
4. Seconds 7-10: Camera reaches the floral center, then loops through a gentle dissolve.

Camera movement: Slow push-in and small arc around the arrangement.

Lighting direction: Late-afternoon studio light, soft shadow gradients, gentle specular highlights.

Color palette: Ivory, dusty blush, cream, champagne, muted brown.

Product/flower focus: Finished gift box or premium bouquet, packaging, ribbon, card, no busy background.

Why it converts better: It frames Blush as a gift decision, not a flower decision. The CTA feels like the next step in arranging a meaningful moment.

### 3. Studio Of Selection

Emotional goal: Show Blush as curated and expert, with a quiet behind-the-scenes feeling.

6-9 second storyboard:

1. Seconds 0-3: Close-up of selected stems on a neutral table, carefully spaced.
2. Seconds 3-5: Hand removes one imperfect stem and places a stronger bloom.
3. Seconds 5-7: Camera pans to a nearly finished arrangement.
4. Seconds 7-9: Petals and ribbon settle; loop returns to the table scene.

Camera movement: Overhead-to-angled tilt, slow pan, restrained movement.

Lighting direction: Clean studio daylight with a soft gold bounce.

Color palette: Ivory, blush, soft green, muted gold, warm stone.

Product/flower focus: Curation process, not a crowded flower wall.

Why it converts better: It builds trust by showing taste and selectivity, but it is less emotionally immediate than the ritual concept.

## Selected Concept

Selected: **Cinematic Bloom Ritual**.

Reason:

- Premium feeling: strongest. It feels intimate, slow, tactile, and expensive.
- First 3-second impact: macro petals plus movement creates immediate visual arrest.
- Brand fit: directly matches Blush, soft pink/white/gold, elegant gifting, and refined floral craft.
- Conversion value: makes WhatsApp consultation feel like a premium service, not a generic order channel.
- Feasibility: can be generated or filmed in a simple studio setup with one arrangement and one hand detail.
- Mobile performance: works well as a vertical crop because macro detail remains legible.

## AI Video Generation Prompt

### Desktop Version

Duration: 7 seconds.

Aspect ratio: 16:9 cinematic wide.

Prompt:

Create a photorealistic luxury floral hero video for a premium floral brand named Blush. A soft macro cinematic scene of an ivory and blush-pink floral arrangement being prepared with elegant restraint. The arrangement includes white orchids, pale blush garden roses, ranunculus or lisianthus, muted green stems, and a subtle champagne-gold detail. A realistic florist hand briefly enters the frame and gently adjusts one ribbon or one flower stem with slow, careful movement. The camera performs a very slow lateral dolly and slight push-in across the petals and ribbon, shallow depth of field, macro lens, creamy bokeh, soft studio window light from the left, warm ivory background, minimal luxury atmosphere, calm emotional elegance. The scene should feel like a refined gift ritual, not a flower shop display. Seamless loop: end frame should return naturally to the opening composition with almost no visible jump. No text inside the video. No logos. No fake unreadable branding. No extra hands unless realistic, elegant, and anatomically correct. No distorted flowers. No artificial neon colors. No busy bouquet. No colorful retail store background. No cheap stock photo look. No plastic flowers. No fantasy scene. No excessive motion. No camera shake. No harsh shadows. No watermarks.

Rendering notes:

- Realism level: photorealistic, premium commercial cinematography.
- Lighting: soft daylight, subtle gold bounce, creamy highlights.
- Mood: quiet, intimate, luxurious, emotionally elegant.
- Loop behavior: seamless 7-second loop with petal/ribbon movement returning to the start.
- Audio: none needed; video will autoplay muted.

### Mobile Version

Duration: 7 seconds.

Aspect ratio: 9:16 vertical.

Prompt:

Create a vertical photorealistic luxury floral hero video for mobile landing page use. Use the same Cinematic Bloom Ritual scene: white orchids, pale blush garden roses, ranunculus or lisianthus, muted green stems, refined champagne-gold accent, soft blush silk ribbon, warm ivory studio background. Compose for vertical crop with the primary blooms in the upper-middle third and negative space for white overlay text in the lower third. Slow macro push-in, slight left-to-right parallax, one elegant florist hand briefly adjusts the ribbon or one stem, then leaves the frame. Soft window light, shallow depth of field, creamy bokeh, calm premium gift atmosphere. Seamless loop, no text, no logo, no fake branding, no distorted petals, no extra hands, no busy background, no neon colors, no stock-photo retail look, no plastic flowers, no unrealistic scene.

## Implementation Notes

The code is now video-ready but keeps video disabled until final assets exist. This prevents broken requests and keeps the page fast.

Configured paths:

- Desktop MP4: `public/media/hero-video/cinematic-bloom-ritual-desktop.mp4`
- Desktop WebM: `public/media/hero-video/cinematic-bloom-ritual-desktop.webm`
- Mobile MP4: `public/media/hero-video/cinematic-bloom-ritual-mobile.mp4`
- Mobile WebM: `public/media/hero-video/cinematic-bloom-ritual-mobile.webm`
- Poster fallback: `public/hero.webp`

Code path:

- `src/components/Hero.tsx`
- `src/config/site.ts`

Behavior:

- If `siteConfig.heroVideo.enabled` is `false`, the hero renders the poster image only.
- If enabled, the hero renders a muted, autoplaying, looping, playsInline video.
- Mobile sources are listed first with a media query.
- Reduced-motion users receive the poster image instead of autoplay video.
- If video fails, React falls back to the poster image.
- Overlay gradients keep white text readable without adding heavy visual clutter.

## Performance Notes

- Keep each loop 6-8 seconds.
- Compress aggressively.
- Use WebM as the preferred source where supported.
- Keep MP4 as the compatibility fallback.
- Use `preload="metadata"`.
- Do not autoplay sound.
- Do not upload large master files to `public/`.
- Poster loads first and remains the fallback.

## Future Improvement Ideas

- Film the scene with real Blush flowers instead of relying on AI generation.
- Use a professional macro shot of ribbon tying or final stem adjustment.
- Export one calm first frame as a dedicated poster that exactly matches the video.
- A/B test static editorial hero versus Cinematic Bloom Ritual video on WhatsApp click-through.
- Add a low-bitrate LQIP poster if mobile performance needs more optimization.
