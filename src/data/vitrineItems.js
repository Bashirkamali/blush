// Auto-collect Blush daily vitrine images + Persian captions for all.

const modules = import.meta.glob(
  '/src/assets/vitrine/*.webp',
  { eager: true, query: '?url', import: 'default' }
);

// Persian captions for the current Blush-owned vitrine collection.
const manualMeta = {
  'blush-world-01-orchid-bouquet.webp': {
    caption: 'دسته گل ارکیده و رز پاستلی',
    alt: 'دسته گل ارکیده سفید و رز صورتی با بسته‌بندی روشن'
  },
  'blush-world-02-blue-orange-bouquet.webp': {
    caption: 'دسته گل آبی و نارنجی',
    alt: 'دسته گل هورتانسیا آبی و رز نارنجی با ارکیده سفید'
  },
  'blush-world-03-bird-of-paradise-arrangement.webp': {
    caption: 'گل‌آرایی استوایی نارنجی',
    alt: 'گل‌آرایی استوایی با پرنده بهشتی، رز و ارکیده در گلدان مشکی'
  },
  'blush-world-04-pink-mint-vase.webp': {
    caption: 'چیدمان رز صورتی و آنتوریوم',
    alt: 'چیدمان رز صورتی و سفید با آنتوریوم بنفش در گلدان سبز'
  },
  'blush-world-05-pastel-flower-box.webp': {
    caption: 'باکس گل پاستلی',
    alt: 'باکس گل صورتی با رز، هورتانسیا آبی و گل‌های سفید'
  },
  'blush-world-06-pink-anthurium-arrangement.webp': {
    caption: 'چیدمان آنتوریوم صورتی',
    alt: 'گل‌آرایی صورتی و سفید با آنتوریوم و رز روی زمینه صورتی'
  },
  'blush-world-07-colorful-basket-arrangement.webp': {
    caption: 'سبد گل رنگارنگ',
    alt: 'سبد گل رنگارنگ با رز و گل‌های فصلی در حال طراحی'
  },
  'blush-world-08-blush-studio-arrangement.webp': {
    caption: 'گل‌آرایی امضای بلاش',
    alt: 'گل‌آرایی صورتی و نارنجی در گلدان سرامیکی مقابل زمینه صورتی'
  },
  'blush-world-09-orchid-installation.webp': {
    caption: 'استند تشریفاتی ارکیده',
    alt: 'استند تشریفاتی با ارکیده‌های سفید و بنفش در استودیوی صورتی'
  },
  'blush-world-10-acrylic-orchid-box.webp': {
    caption: 'باکس شفاف ارکیده و رز',
    alt: 'باکس شفاف با ارکیده سفید و رز صورتی'
  },
  'blush-world-7237-studio-arrangement.webp': {
    caption: 'گل‌آرایی باشکوه صورتی و ارکیده',
    alt: 'گل‌آرایی بزرگ صورتی و بنفش با رز، لیلیوم و ارکیده روی استند سفید'
  },
  'blush-world-7239-studio-arrangement.webp': {
    caption: 'چیدمان رز و پرنده بهشتی',
    alt: 'چیدمان رز صورتی و زرد، ارکیده سفید و پرنده بهشتی در گلدان تیره'
  },
  'blush-world-7240-studio-arrangement.webp': {
    caption: 'باکس گل زرد و صورتی',
    alt: 'باکس گل استوانه‌ای زرد با رز صورتی، گل‌های سفید و روبان'
  },
  'blush-world-7241-studio-arrangement.webp': {
    caption: 'باکس گل سبز و رز رنگی',
    alt: 'باکس گل استوانه‌ای سبز با رز صورتی و نارنجی، آنتوریوم و روبان'
  },
  'blush-world-7243-studio-arrangement.webp': {
    caption: 'باکس گل آبی و ارکیده سفید',
    alt: 'باکس گل آبی با ارکیده سفید، رز کرم و آنتوریوم سرمه‌ای'
  },
  'blush-world-7244-studio-arrangement.webp': {
    caption: 'گل‌آرایی ارکیده و رز شرابی',
    alt: 'گل‌آرایی بزرگ شرابی و بنفش با ارکیده، رز و آنتوریوم در گلدان مشکی'
  },
  'blush-world-15-colorful-blue-box.webp': {
    caption: 'باکس گل آبی رنگارنگ',
    alt: 'باکس گل آبی با رز صورتی و نارنجی، میخک و گل‌های زرد و بنفش'
  },
  'blush-world-16-pastel-orchid-vase.webp': {
    caption: 'گلدان ارکیده و رز پاستلی',
    alt: 'گل‌آرایی پاستلی با ارکیده سفید و رز صورتی و کرم در گلدان روشن'
  },
  'blush-world-17-sunflower-basket.webp': {
    caption: 'سبد گل آفتابگردان',
    alt: 'سبد گل با آفتابگردان، رز نارنجی و صورتی و گل‌های سفید روی زمینه صورتی'
  },
  'blush-world-18-colorful-ceramic-vase.webp': {
    caption: 'گلدان رنگارنگ رز و گل‌های فصلی',
    alt: 'گل‌آرایی رنگارنگ با رز، گل‌های بنفش و زرد در گلدان سرامیکی'
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
      'blush-world-10-acrylic-orchid-box.webp',
      'blush-world-7237-studio-arrangement.webp',
      'blush-world-7239-studio-arrangement.webp',
      'blush-world-7240-studio-arrangement.webp',
      'blush-world-7241-studio-arrangement.webp',
      'blush-world-7243-studio-arrangement.webp',
      'blush-world-7244-studio-arrangement.webp',
      'blush-world-15-colorful-blue-box.webp',
      'blush-world-16-pastel-orchid-vase.webp',
      'blush-world-17-sunflower-basket.webp',
      'blush-world-18-colorful-ceramic-vase.webp'
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
