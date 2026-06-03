# Open Questions

These questions should be answered by the project owner before major redesign or deployment work.

## Production And Ownership

1. Is the production source of truth supposed to be the React/Vite app or the standalone root `index.html`?
2. Is `_deploy/` currently deployed anywhere, or is it only an old export?
3. What is the final production domain for this campaign page?
4. Should this landing page live on `blush-flower.com`, a subpage, or a separate campaign domain?
5. May root `index.html` be converted into a minimal Vite shell after its production-like content is migrated into React?
6. Should the current standalone root `index.html` later be renamed to `legacy-index.html`, moved under docs/reference, or kept in place as a deploy artifact?

## Campaign Strategy

7. Is this landing page intended only for Google Ads, or also Instagram/social/profile traffic?
8. What is the primary conversion goal: WhatsApp, website collections, Instagram visit, phone call, or something else?
9. Should the page optimize for immediate inquiry, product browsing, or brand introduction?
10. Should there be campaign-specific tracking parameters on outbound CTAs?

## Language And Audience

11. Should the main language be Persian only, English only, or bilingual?
12. If bilingual, which language should appear first above the fold?
13. Should the document direction be RTL, LTR, or mixed by section?
14. What exact Persian wording best describes "Daily Vitrine" for Blush customers?
15. Should the Persian guide text currently in root `index.html` be migrated into the React hero?

## Brand And Content

16. What is the final approved brand spelling: `Blush`, `BLUSH`, or another treatment?
17. What is the official short tagline?
18. Should prices appear on the landing page, or should pricing happen only through WhatsApp/website?
19. Should the page mention Shiraz visibly above the fold?
20. Are there official addresses or store names that must appear?
21. Should the store names and addresses currently in JSON-LD remain in production metadata?

## CTAs And Contact Details

22. What is the official WhatsApp number?
23. What is the official phone number?
24. What is the official Instagram URL?
25. What exact website/collections URL should `View Collections` use?
26. Should WhatsApp links include a prefilled message? If yes, what language and text?
27. Should the React app expose all four root HTML conversion paths: WhatsApp, website, Instagram, and phone?

## Media And Performance

28. Should the hero use video, slideshow, or static image?
29. Which hero media is approved for production?
30. What is the acceptable total initial page load size for mobile ad traffic?
31. Should video autoplay be required, or should the poster carry the first impression?
32. Are the current gallery images final, seasonal, or temporary?
33. Should JPG source files remain in the repo if WebP files are used for display?
34. Which existing root video, if any, should become `public/media/hero.mp4` for the React app?
35. Is the missing `Hero Smaller.mp4` still required, and where is the approved file?

## Analytics And SEO

36. Which analytics or tracking tools should be connected?
37. Are Google Ads conversion events required for WhatsApp, Instagram, website, and phone clicks?
38. Should structured data represent a florist, store, local business, or campaign page?
39. What Open Graph image should be used?
40. Are Persian SEO keywords important for this campaign page?
41. Should the metadata currently in root `index.html` be treated as approved or draft?

## Technical Direction

42. Which package manager should be used: npm, pnpm, yarn, or another?
43. Should a lockfile be committed?
44. Should production sourcemaps remain enabled?
45. Should legacy standalone files be migrated, archived, or kept as reference?
46. Is there a preferred hosting provider or deployment command?
47. Should a `src/config/brand.ts` constants file be created before official CTA values are confirmed, or only after confirmation?
