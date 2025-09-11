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
  // انتخاب 9 تصویر برتر برای نمایش
  'vitrine_09_05_2025_1.webp': { caption: 'گل‌آرایی لوکس روزانه', price: '۲۵۰,۰۰۰ تومان', alt: 'آرایش گل لوکس' },
  'vitrine_09_05_2025_2.webp': { caption: 'دسته گل عروس', price: '۴۵۰,۰۰۰ تومان', alt: 'دسته گل عروس' },
  'vitrine_09_05_2025_3.webp': { caption: 'آرایش گل فصلی', price: '۱۸۰,۰۰۰ تومان', alt: 'گل‌آرایی فصلی' },
  'vitrine_09_05_2025_4.webp': { caption: 'باکت گل لوکس', price: '۳۲۰,۰۰۰ تومان', alt: 'باکت گل' },
  'vitrine_09_05_2025_5.webp': { caption: 'آرایش گل مدرن', price: '۲۲۰,۰۰۰ تومان', alt: 'گل‌آرایی مدرن' },
  'vitrine_09_05_2025_6.webp': { caption: 'دسته گل کلاسیک', price: '۱۹۵,۰۰۰ تومان', alt: 'گل کلاسیک' },
  'vitrine_09_05_2025_7.webp': { caption: 'آرایش گل مینیمال', price: '۱۶۵,۰۰۰ تومان', alt: 'گل مینیمال' },
  'vitrine_09_05_2025_8.webp': { caption: 'باکت گل رمانتیک', price: '۲۸۰,۰۰۰ تومان', alt: 'گل رمانتیک' },
  'vitrine_09_05_2025_9.webp': { caption: 'آرایش گل شرقی', price: '۲۱۰,۰۰۰ تومان', alt: 'گل‌آرایی شرقی' }
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
