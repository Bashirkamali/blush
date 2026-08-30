// Auto-collect Blush daily vitrine images + Persian captions for all.

const modules = import.meta.glob(
  '/src/assets/vitrine/*.webp',
  { eager: true, query: '?url', import: 'default' }
);

// Persian captions for the current Blush-owned vitrine collection.
const manualMeta = {
  'blush-world-01-orchid-bouquet.webp': {
    caption: 'دسته گل ارکیده و رز پاستلی',
    alt: 'دسته گل ارکیده سفید و رز صورتی بلاش با بسته‌بندی روشن'
  },
  'blush-world-02-blue-orange-bouquet.webp': {
    caption: 'دسته گل آبی و نارنجی',
    alt: 'دسته گل هورتانسیا آبی و رز نارنجی بلاش با ارکیده سفید'
  },
  'blush-world-03-bird-of-paradise-arrangement.webp': {
    caption: 'گل‌آرایی استوایی نارنجی',
    alt: 'گل‌آرایی استوایی بلاش با پرنده بهشتی، رز و ارکیده در گلدان مشکی'
  },
  'blush-world-04-pink-mint-vase.webp': {
    caption: 'چیدمان رز صورتی و آنتوریوم',
    alt: 'چیدمان رز صورتی و سفید بلاش با آنتوریوم بنفش در گلدان سبز'
  },
  'blush-world-05-pastel-flower-box.webp': {
    caption: 'باکس گل پاستلی',
    alt: 'باکس گل صورتی بلاش با رز، هورتانسیا آبی و گل‌های سفید'
  },
  'blush-world-06-pink-anthurium-arrangement.webp': {
    caption: 'چیدمان آنتوریوم صورتی',
    alt: 'گل‌آرایی صورتی و سفید بلاش با آنتوریوم و رز روی زمینه صورتی'
  },
  'blush-world-07-colorful-basket-arrangement.webp': {
    caption: 'سبد گل رنگارنگ',
    alt: 'سبد گل رنگارنگ بلاش با رز و گل‌های فصلی در حال طراحی'
  },
  'blush-world-08-blush-studio-arrangement.webp': {
    caption: 'گل‌آرایی امضای بلاش',
    alt: 'گل‌آرایی صورتی و نارنجی بلاش در گلدان سرامیکی مقابل زمینه صورتی'
  },
  'blush-world-09-orchid-installation.webp': {
    caption: 'استند تشریفاتی ارکیده',
    alt: 'استند تشریفاتی بلاش با ارکیده‌های سفید و بنفش در استودیوی صورتی'
  },
  'blush-world-10-acrylic-orchid-box.webp': {
    caption: 'باکس شفاف ارکیده و رز',
    alt: 'باکس شفاف بلاش با ارکیده سفید و رز صورتی'
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
      name,
      src: url,
      alt: meta.alt || prettyFromFilename(name),
      caption: meta.caption || prettyFromFilename(name),
      price: meta.price || '',
      href: meta.href || ''
    };
  })
  .sort((a, b) => {
    const priority = [
      'blush-world-01-orchid-bouquet.webp',
      'blush-world-02-blue-orange-bouquet.webp',
      'blush-world-03-bird-of-paradise-arrangement.webp',
      'blush-world-04-pink-mint-vase.webp',
      'blush-world-05-pastel-flower-box.webp',
      'blush-world-06-pink-anthurium-arrangement.webp',
      'blush-world-07-colorful-basket-arrangement.webp',
      'blush-world-08-blush-studio-arrangement.webp',
      'blush-world-09-orchid-installation.webp',
      'blush-world-10-acrylic-orchid-box.webp'
    ];
    const aName = a.name;
    const bName = b.name;
    const aIndex = priority.indexOf(aName);
    const bIndex = priority.indexOf(bName);
    if (aIndex !== -1 || bIndex !== -1) {
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    }
    return a.src.localeCompare(b.src);
  });

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
