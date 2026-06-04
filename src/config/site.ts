export const siteConfig = {
  brandName: "Blush",
  brandNameDisplay: "Blush",
  websiteUrl: "https://blush-flower.com/",
  instagramUrl: "https://www.instagram.com/blush_flower",

  // Provisional: this number appears in React, root scripts, and deploy artifacts.
  // Confirm with the owner before treating it as the final campaign WhatsApp number.
  whatsappNumber: "989900190067",

  // Provisional: this phone number appears in root index.html and JSON-LD schema.
  phoneNumber: "+989177800806",

  ctaLabels: {
    viewCollections: "View Collections",
    seeMore: "See more",
    whatsapp: "Chat on WhatsApp",
    instagram: "Visit Instagram",
    website: "View Collections",
    phone: "Call Blush",
  },

  heroMedia: {
    // These are the intended React/Vite public paths.
    // Current audit status: /hero.webp is empty; /media/hero.webm and /media/hero.mp4 are missing.
    poster: "/hero.webp",
    webm: "/media/hero.webm",
    mp4: "/media/hero.mp4",
  },

  seo: {
    title: "Blush — Cinematic Floral Experience",
    description:
      "Blush Flower is a luxury minimal floral studio in Shiraz, offering curated daily vitrine arrangements and bespoke floral pieces.",
    canonicalUrl: "https://blush-flower.com/",
    ogImage: "https://blush-flower.com/hero.webp",
  },
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;
