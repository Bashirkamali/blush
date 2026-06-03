# Open Questions

These questions should be answered by the project owner before major redesign or deployment work.

## Production And Ownership

1. Is the production source of truth supposed to be the React/Vite app or the standalone root `index.html`?
2. Is `_deploy/` currently deployed anywhere, or is it only an old export?
3. What is the final production domain for this campaign page?
4. Should this landing page live on `blush-flower.com`, a subpage, or a separate campaign domain?

## Campaign Strategy

5. Is this landing page intended only for Google Ads, or also Instagram/social/profile traffic?
6. What is the primary conversion goal: WhatsApp, website collections, Instagram visit, phone call, or something else?
7. Should the page optimize for immediate inquiry, product browsing, or brand introduction?
8. Should there be campaign-specific tracking parameters on outbound CTAs?

## Language And Audience

9. Should the main language be Persian only, English only, or bilingual?
10. If bilingual, which language should appear first above the fold?
11. Should the document direction be RTL, LTR, or mixed by section?
12. What exact Persian wording best describes "Daily Vitrine" for Blush customers?

## Brand And Content

13. What is the final approved brand spelling: `Blush`, `BLUSH`, or another treatment?
14. What is the official short tagline?
15. Should prices appear on the landing page, or should pricing happen only through WhatsApp/website?
16. Should the page mention Shiraz visibly above the fold?
17. Are there official addresses or store names that must appear?

## CTAs And Contact Details

18. What is the official WhatsApp number?
19. What is the official phone number?
20. What is the official Instagram URL?
21. What exact website/collections URL should `View Collections` use?
22. Should WhatsApp links include a prefilled message? If yes, what language and text?

## Media And Performance

23. Should the hero use video, slideshow, or static image?
24. Which hero media is approved for production?
25. What is the acceptable total initial page load size for mobile ad traffic?
26. Should video autoplay be required, or should the poster carry the first impression?
27. Are the current gallery images final, seasonal, or temporary?
28. Should JPG source files remain in the repo if WebP files are used for display?

## Analytics And SEO

29. Which analytics or tracking tools should be connected?
30. Are Google Ads conversion events required for WhatsApp, Instagram, website, and phone clicks?
31. Should structured data represent a florist, store, local business, or campaign page?
32. What Open Graph image should be used?
33. Are Persian SEO keywords important for this campaign page?

## Technical Direction

34. Which package manager should be used: npm, pnpm, yarn, or another?
35. Should a lockfile be committed?
36. Should production sourcemaps remain enabled?
37. Should legacy standalone files be migrated, archived, or kept as reference?
38. Is there a preferred hosting provider or deployment command?
