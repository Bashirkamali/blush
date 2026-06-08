// Auto-collect Blush daily vitrine images + Persian captions for all.

const modules = import.meta.glob(
  '/src/assets/vitrine/*.webp',
  { eager: true, query: '?url', import: 'default' }
);

// Persian captions for all 21 actual vitrine images (by UUID filename)
const manualMeta = {
  '181237f0-8af8-4b07-8f01-b4b9a654853a.webp': {
    caption: 'دسته گل رز کرم و صورتی',
    alt: 'دسته گل رز کرم و صورتی بلاش - ترکیب کلاسیک و شیک'
  },
  '1f3c7c5c-2bb3-4c2a-b9fe-64b5208ac096.webp': {
    caption: 'ویترین گل آرایی مدرن',
    alt: 'ویترین گل آرایی مدرن بلاش - آرایش گل در گلدان شفاف'
  },
  '22af0585-18a9-4607-823c-13cf84260b7b.webp': {
    caption: 'باکس گل سفید و طلایی',
    alt: 'باکس گل بلاش با ترکیب سفید و طلایی برای هدیه سنجیده'
  },
  '24e85faf-8883-4917-8f74-df33a7302c26.webp': {
    caption: 'دسته گل بهاری رنگارنگ',
    alt: 'دسته گل بهاری رنگارنگ بلاش - ترکیب گل‌های فصلی شاد'
  },
  '312aa08c-9127-40bf-b096-e1c79bc3df52.webp': {
    caption: 'آرایش گل مینیمال سفید',
    alt: 'آرایش گل مینیمال سفید بلاش - گل آرایی مدرن و ظریف'
  },
  '31359c30-d7c8-4678-a046-7c1e9502cd24.webp': {
    caption: 'دسته گل رمانتیک صورتی',
    alt: 'دسته گل رمانتیک صورتی بلاش - مناسب مناسبت‌های عاشقانه'
  },
  '39094b4a-123c-4299-802b-1981672b488b.webp': {
    caption: 'باکس گل شیک بنفش',
    alt: 'باکس گل شیک بنفش بلاش - ترکیب گل بنفش با روبان ساتن'
  },
  '444bfb73-526e-48ef-851a-946f7527d350.webp': {
    caption: 'ترکیب گل در جعبه شفاف',
    alt: 'طراحی گل بلاش در جعبه شفاف برای هدیه خاص'
  },
  '4eb2f329-0dfa-45d1-a1a5-e6a6ddcc7694.webp': {
    caption: 'گل آرایی با رز سفید',
    alt: 'گل آرایی با رز سفید بلاش - طراحی مینیمال و لوکس'
  },
  '70b41351-8d78-4e8e-a239-48813464bedd.webp': {
    caption: 'دسته گل کرم و صورتی',
    alt: 'دسته گل کرم و صورتی بلاش - ترکیب نرم و زنانه'
  },
  '79e11b70-f17c-4193-b79a-ad464b12f37d.webp': {
    caption: 'ویترین گل فصلی',
    alt: 'ویترین گل فصلی بلاش - چیدمان گل‌های تازه و رنگارنگ'
  },
  '87a6c354-df4b-41e7-a59f-ade8eecb3e47.webp': {
    caption: 'باکس گل صورتی فانتزی',
    alt: 'باکس گل صورتی بلاش - هدیه‌ای شیرین و رمانتیک'
  },
  '90c837c8-4b7b-4999-8b0a-af6d7b0f0a07.webp': {
    caption: 'دسته گل کلاسیک کرم',
    alt: 'دسته گل کلاسیک کرم بلاش - گل آرایی شیک و همیشگی'
  },
  '9f2f5ae6-d71f-48e6-9f50-ab0f76b4c544.webp': {
    caption: 'گل آرایی با رز قرمز و صورتی',
    alt: 'گل آرایی با رز قرمز و صورتی بلاش - عاشقانه و مجلل'
  },
  'b352b285-9195-43b3-b05c-0f84e219e6c1.webp': {
    caption: 'دسته گل آفتابگردان شاد',
    alt: 'دسته گل آفتابگردان بلاش - ترکیب زرد و نارنجی برای انرژی مثبت'
  },
  'bc3d6d2b-b4f1-445b-9a69-c9d1b06ed7f8.webp': {
    caption: 'ویترین گل استودیو بلاش',
    alt: 'ویترین گل استودیو بلاش - نمای داخلی با چیدمان حرفه‌ای'
  },
  'e04021ff-a1e7-49d0-be94-932c2a7aeffa.webp': {
    caption: 'باکس گل سفید و صورتی',
    alt: 'باکس گل سفید و صورتی بلاش - هدیه‌ای لطیف و خاص'
  },
  'e085a5d7-6de9-4617-a8e0-6f9b433d17ee.webp': {
    caption: 'چیدمان گل با پالت صورتی',
    alt: 'چیدمان گل بلاش با پالت صورتی و ivory برای هدیه خاص در شیراز'
  },
  'e2943b2f-35ed-4ef8-ab90-5b723ba85529.webp': {
    caption: 'دسته گل صورتی و بنفش',
    alt: 'دسته گل صورتی و بنفش بلاش - ترکیب رنگ جذاب و مدرن'
  },
  'e7ca7a1e-9aab-4a2d-a4e5-6b776a720c35.webp': {
    caption: 'گل آرایی با رز زرد و سفید',
    alt: 'گل آرایی با رز زرد و سفید بلاش - روشن و دلنشین'
  },
  'f1069a82-19c1-4c12-8304-93c20c1e1d98.webp': {
    caption: 'دسته گل نارنجی و صورتی',
    alt: 'دسته گل نارنجی و صورتی بلاش - پرانرژی و شاداب'
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
      'e085a5d7-6de9-4617-a8e0-6f9b433d17ee.webp',
      '22af0585-18a9-4607-823c-13cf84260b7b.webp',
      '181237f0-8af8-4b07-8f01-b4b9a654853a.webp',
      '4eb2f329-0dfa-45d1-a1a5-e6a6ddcc7694.webp',
      '312aa08c-9127-40bf-b096-e1c79bc3df52.webp',
      '70b41351-8d78-4e8e-a239-48813464bedd.webp',
      'e04021ff-a1e7-49d0-be94-932c2a7aeffa.webp',
      '90c837c8-4b7b-4999-8b0a-af6d7b0f0a07.webp',
      '31359c30-d7c8-4678-a046-7c1e9502cd24.webp'
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
