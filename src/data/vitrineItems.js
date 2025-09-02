// src/data/vitrineItems.js
// Auto-collect Blush daily vitrine images + optional per-file overrides.

const modules = import.meta.glob(
  '/src/assets/vitrine/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, as: 'url' }
);

// Optional manual metadata by filename (basename with extension).
// Example:
// 'vitrine-2025-09-01-001.jpg': { caption: 'Eternal Romance', price: '$180–280', href: '/products/210', alt: 'Red roses with white peonies' }
const manualMeta = {};

function baseName(path) {
  return path.split('/').pop();
}

function prettyFromFilename(name) {
  return name.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').trim();
}

export const items = Object.entries(modules).map(([path, url]) => {
  const name = baseName(path);
  const meta = manualMeta[name] || {};
  return {
    src: url,
    alt: meta.alt || prettyFromFilename(name),
    caption: meta.caption || prettyFromFilename(name),
    price: meta.price || '',
    href: meta.href || ''
  };
}).sort((a,b) => a.src.localeCompare(b.src));

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