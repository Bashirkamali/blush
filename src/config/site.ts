export const siteConfig = {
  brandName: "Blush",
  brandNameDisplay: "BLUSH",
  brandNameFa: "بلاش",
  websiteUrl: "https://blush-flower.com/",
  instagramUrl: "https://www.instagram.com/blush_flower",

  whatsappNumber: "989900190067",
  phoneNumber: "+989****0067",

  taglineFa: "ویترین روزانه • گل‌آرایی اختصاصی",
  taglineEn: "Daily Vitrine & Bespoke Pieces",

  brandStory: {
    heading: "داستان بلاش",
    subtitle: "جایی که گل‌ها زبان عشق می‌شوند",
    paragraphs: [
      "بلاش یک استودیوی گل‌آرایی لوکس در شیراز است. هر روز، تیم ما با دقت و عشق، جدیدترین و زیباترین گل‌های بازار را انتخاب می‌کند و آن‌ها را به آثاری هنری تبدیل می‌کند.",
      "هر دسته گل بلاش، داستانی منحصربه‌فرد دارد. از انتخاب تک‌تک گل‌ها تا بسته‌بندی نهایی، همه چیز با وسواس و عشق به زیبایی انجام می‌شود. ما به جزئیات اهمیت می‌دهیم، چون می‌دانیم که گل‌های ما بخشی از خاطرات تو هستند.",
      "فرقی نمی‌کند به دنبال یک دسته گل رمانتیک برای عزیزترین کس زندگی‌ات هستی یا یک باکس گل خاص برای یک مناسبت ویژه — بلاش کنار توست تا بهترین انتخاب را داشته باشی."
    ],
    stats: [
      { number: "۵۰۰+", label: "سفارش موفق" },
      { number: "۱۵۰+", label: "طراحی منحصربه‌فرد" },
      { number: "۹۸٪", label: "رضایت مشتریان" },
      { number: "شیراز", label: "محل提供服务" }
    ]
  },

  services: [
    {
      title: "ویترین روزانه",
      description: "هر روز تازه‌ترین و خاص‌ترین گل‌های بازار را در ویترین بلاش ببین. ترکیب‌های منحصربه‌فرد با الهام از فصل و لحظه.",
      icon: "bloom"
    },
    {
      title: "سفارش اختصاصی",
      description: "رویایی داری؟ ما آن را با گل‌ها به واقعیت تبدیل می‌کنیم. هر سلیقه، هر مناسبت، یک طراحی منحصربه‌فرد.",
      icon: "sparkle"
    },
    {
      title: "ارسال سریع در شیراز",
      description: "سفارش بده، در کمترین زمان در آدرس مورد نظرت تحویل بگیر. بسته‌بندی لوکس و مطمئن برای ماندگاری بیشتر.",
      icon: "delivery"
    }
  ],

  ctaLabels: {
    viewCollections: "مشاهده ویترین",
    seeMore: "مشاهده همه",
    whatsapp: "گفتگو در واتساپ",
    instagram: "اینستاگرام",
    website: "وبسایت بلاش",
    phone: "تماس با بلاش",
    heroSubtitle: "هر گل، یک داستان"
  },

  heroMedia: {
    poster: "/generated-hero.png",
    webm: "/media/hero.mp4",
    mp4: "/media/hero.mp4",
  },

  seo: {
    title: "BLUSH — استودیوی گل‌آرایی لوکس در شیراز",
    description:
      "بلاش، استودیوی گل‌آرایی لوکس در شیراز. ویترین روزانه، دسته گل‌های سفارشی، باکس گل و ارسال سریع. با بلاش عشق را به زبان گل‌ها هدیه کن.",
    canonicalUrl: "https://blush-flower.com/",
    ogImage: "https://blush-flower.com/hero.webp",
  },
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;
