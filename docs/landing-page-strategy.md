# Blush Landing Page Strategy

Date: 2026-06-08

## Page Goal

Position Blush as a premium floral experience studio in Shiraz and move first-time visitors toward a confident WhatsApp conversation, Instagram portfolio viewing, or deeper website exploration.

## Target Audience

- People choosing important floral gifts in Shiraz.
- Premium buyers who want taste, guidance, and reliability, not discount-driven shopping.
- Visitors arriving from search, social, or campaign traffic who need confidence quickly.

## First Impression Target

Within three seconds, the visitor should understand:

- Blush is a refined floral and gifting studio.
- The brand is serious, organized, visual, and emotionally intelligent.
- They can order or ask for guidance through WhatsApp.
- They can inspect examples through Instagram and the selected vitrine.

## Narrative Arc

1. Hero: brand, positioning, emotional promise, primary CTAs, real floral image.
2. Why Blush: flowers as a designed gift experience.
3. Signature Experiences: daily vitrine, bespoke floral design, boxes/packaging, special collaborations.
4. How to Order: occasion, style/budget, final selection.
5. Selected Vitrine: curated visual proof without catalog clutter.
6. Standards: trust through process and taste, not fake testimonials.
7. FAQ: clear answers for search and AI parsing.
8. Final CTA: calm invitation to start the conversation.

## Conversion Paths

- Primary: WhatsApp consultation/order.
- Secondary: Instagram samples.
- Tertiary: website exploration and phone call.

## Hero Strategy

Move from static-first editorial photography to a video-ready cinematic hero. The selected direction is **Cinematic Bloom Ritual**: a 6-8 second silent loop of soft macro floral movement, refined hand detail, blush/ivory/gold palette, and quiet studio lighting.

Until the final generated or filmed video assets are available, the hero uses the optimized poster image as a graceful fallback. Video is intentionally disabled in `siteConfig.heroVideo.enabled` to avoid broken requests and keep the live page fast.

## Visual Content Strategy

- Prefer existing Blush imagery over generic generated assets.
- Use the generated design concept only as an art-direction reference.
- Curate gallery order manually so the first images carry the strongest brand signal.
- Keep image frames stable to avoid layout shift.

## Copywriting Principles

- Persian-first, calm, selected, and precise.
- Avoid discounts, urgency, exaggerated claims, and generic florist language.
- Use phrases around انتخاب، سنجیده، تجربه، هدیه، وقار، ظرافت، لحظه، معنا، دقت، بسته‌بندی.
- Keep team/studio language neutral and brand-centered.

## SEO Strategy

- Title and meta description target Persian local discovery without keyword stuffing.
- Keep natural terms around گل‌فروشی لوکس شیراز، سفارش گل خاص، باکس گل لوکس، دسته گل خاص، گل‌آرایی، هدیه لوکس، Blush Flower, Blush Shiraz.
- Use semantic section headings and descriptive alt text.

## GEO Strategy

- Provide a concise brand description in visible copy and JSON-LD.
- Add FAQPage schema for answer engines.
- Use Florist/WebSite schema only with verified data: brand name, URL, image, phone, city, country, Instagram, WhatsApp.
- Do not fabricate address, opening hours, ratings, legal entity, ownership, or availability.

## Performance Strategy

- Remove splash screen, custom cursor, wave dividers, and unused glow-heavy UI.
- Use poster-first hero loading; enable short muted video only after compressed desktop/mobile assets are ready.
- Lazy-load below-the-fold gallery images.
- Keep CSS small and component structure simple.
- Avoid adding new dependencies.
