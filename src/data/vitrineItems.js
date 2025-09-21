// src/data/vitrineItems.js
// Auto-collect Blush daily vitrine images + optional per-file overrides.

const modules = import.meta.glob(
  '/src/assets/vitrine/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, as: 'url' }
);

// Optional manual metadata by filename (basename with extension).
// Example:
// 'vitrine-2025-09-01-001.jpg': { caption: 'Eternal Romance', price: '$180–280', href: '/products/210', alt: 'Red roses with white peonies' }
const manualMeta = {
  // تصاویر جدید با نام‌های SEO-friendly برای موتورهای جستجو
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
  'cheerful-yellow-white-lavender-bouquet.webp': { 
    caption: 'دسته گل شاد زرد، سفید و بنفش', 
    price: '۲۴۰,۰۰۰ تومان', 
    alt: 'دسته گل شاد با ترکیب زرد، سفید و بنفش - گل‌های آفتابگردان و لاوندر' 
  },
  'rustic-wicker-basket-macrame-flowers.webp': { 
    caption: 'دسته گل در سبد حصیری با ماکرامه', 
    price: '۳۰۰,۰۰۰ تومان', 
    alt: 'دسته گل رنگارنگ در سبد حصیری با تزئینات ماکرامه - سبک روستیک' 
  },
  'luxury-golden-flower-box-arrangement.webp': { 
    caption: 'باکت گل لوکس طلایی', 
    price: '۵۰۰,۰۰۰ تومان', 
    alt: 'باکت گل لوکس در جعبه طلایی - گل‌آرایی مجلل و شیک' 
  },
  'beautiful-mixed-bouquet-white-vase.webp': { 
    caption: 'دسته گل زیبا در گلدان سفید', 
    price: '۲۷۰,۰۰۰ تومان', 
    alt: 'دسته گل زیبا و رنگارنگ در گلدان سفید - ترکیب گل‌های فصلی' 
  },
  'dried-flower-arrangement-modern-vase.webp': { 
    caption: 'آرایش گل خشک در گلدان مدرن', 
    price: '۱۸۰,۰۰۰ تومان', 
    alt: 'آرایش گل خشک و طبیعی در گلدان مدرن - سبک مینیمال' 
  },
  'luxury-white-flower-box-ribbon.webp': { 
    caption: 'باکت گل لوکس سفید با روبان', 
    price: '۴۰۰,۰۰۰ تومان', 
    alt: 'باکت گل لوکس سفید با روبان صورتی - گل‌آرایی شیک' 
  },
  'colorful-bouquet-ceramic-vase.webp': { 
    caption: 'دسته گل رنگارنگ در گلدان سرامیکی', 
    price: '۲۹۰,۰۰۰ تومان', 
    alt: 'دسته گل رنگارنگ در گلدان سرامیکی آبی - گل‌آرایی هنرمندانه' 
  }
};

function baseName(path) {
  return path.split('/').pop();
}

function prettyFromFilename(name) {
  return name.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').trim();
}

export const items = Object.entries(modules)
  .filter(([path]) => {
    const name = baseName(path);
    return manualMeta[name]; // فقط تصاویری که در manualMeta تعریف شده‌اند
  })
  .map(([path, url]) => {
    const name = baseName(path);
    const meta = manualMeta[name];
    return {
      src: url,
      alt: meta.alt || prettyFromFilename(name),
      caption: meta.caption || prettyFromFilename(name),
      price: meta.price || '',
      href: meta.href || ''
    };
  })
  .sort((a,b) => a.src.localeCompare(b.src));

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
