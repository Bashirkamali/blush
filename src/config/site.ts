export const siteConfig = {
  brandName: "Blush",
  brandNameDisplay: "Blush",
  websiteUrl: "https://blush-flower.com/",
  instagramUrl: "https://www.instagram.com/blush_flower",

  // WhatsApp: confirmed consistent across React, _deploy, and root scripts
  whatsappNumber: "989900190067",

  // Phone: placeholder — confirm with owner
  phoneNumber: "+989900190067",

  ctaLabels: {
    viewCollections: "مشاهده ویترین",
    seeMore: "مشاهده بیشتر",
    whatsapp: "گفتگو در واتساپ",
    instagram: "اینستاگرام",
    website: "مشاهده مجموعه",
    phone: "تماس با بلاش",
  },

  heroMedia: {
    poster: "/hero.webp",
    webm: "/media/hero.mp4",  // fallback: no webm available, using mp4 as source
    mp4: "/media/hero.mp4",
  },

  seo: {
    title: "BLUSH — تجربه گل لوکس",
    description:
      "Blush Flower، استودیوی گل آرایی لوکس در شیراز. ویترین روزانه، دسته گل‌های سفارشی و باکس گل‌های خاص.",
    canonicalUrl: "https://blush-flower.com/",
    ogImage: "https://blush-flower.com/hero.webp",
  },
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;
