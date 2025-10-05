// src/data/vitrineItems.js
// Auto-collect Blush daily vitrine images + optional per-file overrides.

const modules = import.meta.glob(
  '/src/assets/vitrine/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  { eager: true, as: 'url' }
);

// Optional manual metadata by filename (basename with extension).
// Example:
// 'vitrine-2025-09-01-001.jpg': { caption: 'Eternal Romance', price: '$180–280', href: '/products/210', alt: 'Red roses with white peonies' }
const manualMeta = {
  // انتخاب 12 تصویر برتر برای نمایش در ویترین
  'luxury-bouquet-white-bag-pink-background.webp': { 
    caption: 'دسته گل لوکس در کیسه سفید', 
    price: '۳۵۰,۰۰۰ تومان', 
    alt: 'دسته گل لوکس صورتی و سفید در کیسه کادویی سفید با پس‌زمینه صورتی - گل‌آرایی حرفه‌ای' 
  },
  'elegant-flower-arrangement-acrylic-vitrine.webp': { 
    caption: 'آرایش گل شیک در ویترین شیشه‌ای', 
    price: '۴۲۰,۰۰۰ تومان', 
    alt: 'آرایش گل شیک و مدرن در ویترین شیشه‌ای شفاف - گل‌آرایی لوکس' 
  },
  'vibrant-mixed-bouquet-modern-vase.webp': { 
    caption: 'دسته گل رنگارنگ در گلدان مدرن', 
    price: '۲۸۰,۰۰۰ تومان', 
    alt: 'دسته گل رنگارنگ و شاد در گلدان مدرن سفید - ترکیب گل‌های فصلی' 
  },
  'colorful-flower-box-blue-container.webp': { 
    caption: 'باکت گل رنگارنگ در ظرف آبی', 
    price: '۳۲۰,۰۰۰ تومان', 
    alt: 'باکت گل رنگارنگ در ظرف آبی آسمانی - گل‌آرایی هنرمندانه' 
  },
  'artistic-floral-display-hexagonal-box.webp': { 
    caption: 'نمایش هنری گل در جعبه شش‌ضلعی', 
    price: '۳۸۰,۰۰۰ تومان', 
    alt: 'نمایش هنری گل‌ها در جعبه شش‌ضلعی آبی - طراحی خلاقانه' 
  },
  'romantic-pink-purple-bouquet-vase.webp': { 
    caption: 'دسته گل رمانتیک صورتی و بنفش', 
    price: '۲۶۰,۰۰۰ تومان', 
    alt: 'دسته گل رمانتیک با ترکیب صورتی و بنفش در گلدان سفید' 
  },
  'luxury-purple-flower-box-ribbon.webp': { 
    caption: 'باکت گل لوکس بنفش با روبان', 
    price: '۴۵۰,۰۰۰ تومان', 
    alt: 'باکت گل لوکس بنفش با روبان ساتن - گل‌آرایی مجلل' 
  },
  'sunflower-yellow-bouquet-green-box.webp': { 
    caption: 'دسته گل آفتابگردان در جعبه سبز', 
    price: '۲۲۰,۰۰۰ تومان', 
    alt: 'دسته گل آفتابگردان زرد و نارنجی در جعبه سبز - گل‌های شاد' 
  },
  'elegant-white-orchid-arrangement.webp': { 
    caption: 'آرایش ارکیده سفید شیک', 
    price: '۵۵۰,۰۰۰ تومان', 
    alt: 'آرایش ارکیده سفید شیک و ظریف - گل‌آرایی مینیمال' 
  },
  'luxury-golden-flower-box-arrangement.webp': { 
    caption: 'آرایش گل طلایی لوکس', 
    price: '۴۸۰,۰۰۰ تومان', 
    alt: 'آرایش گل طلایی لوکس در جعبه شفاف - گل‌آرایی مجلل' 
  },
  'beautiful-mixed-bouquet-white-vase.webp': { 
    caption: 'دسته گل زیبا در گلدان سفید', 
    price: '۳۱۰,۰۰۰ تومان', 
    alt: 'دسته گل زیبا و رنگارنگ در گلدان سفید کلاسیک' 
  },
  'cheerful-yellow-white-lavender-bouquet.webp': { 
    caption: 'دسته گل شاد زرد و سفید', 
    price: '۲۹۰,۰۰۰ تومان', 
    alt: 'دسته گل شاد با ترکیب زرد، سفید و بنفش - گل‌های بهاری' 
  }
};

function baseName(path) {
  return path.split('/').pop();
}

function prettyFromFilename(name) {
  return name.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').trim();
}

export const items = Object.entries(modules)
  // از تمام تصاویر موجود استفاده می‌کنیم؛ manualMeta فقط override است
  .map(([path, url]) => {
    const name = baseName(path);
    const meta = manualMeta[name] || {};
    return {
      src: url,
      alt: meta.alt || prettyFromFilename(name),
      caption: meta.caption || prettyFromFilename(name),
      price: meta.price || '',
      href: meta.href || ''
    };
  })
  // ترتیب الفبایی پایدار (می‌توانید بعداً بر اساس تاریخ/الگو تغییر دهید)
  .sort((a, b) => a.src.localeCompare(b.src));

// If the folder is empty, add a demo item.
if (items.length === 0) {
  items.push({
    src: 'https://picsum.photos/1200/1500', // TODO: replace with a local image later
    alt: 'Blush Daily Vitrine (Demo)',
    caption: 'Blush Daily Vitrine',
    price: '',
    href: ''
  });
}
