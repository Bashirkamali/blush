import { motion } from "framer-motion";
import { siteConfig } from "../config/site";
import storyImage from "../assets/brand/dusty-rose-arrangement-v2-blushy.webp";
import storyImageMobile from "../assets/brand/dusty-rose-arrangement-v2-blushy-mobile.webp";

const BrandStory = () => {
  const { brandStory } = siteConfig;

  return (
    <section className="section-shell bg-[#fff5f7]" id="brand-story" dir="rtl" aria-label={brandStory.heading}>
      <div className="section-grid">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-index">۰۱</p>
          <h2>{brandStory.heading}</h2>
        </motion.div>

        <motion.div
          className="grid max-w-4xl gap-8 md:grid-cols-[0.82fr_1fr] md:items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <picture>
            <source media="(max-width: 767px)" srcSet={storyImageMobile} />
            <img src={storyImage} alt="چیدمان رز صورتی و سفید بلاش در فضای روشن و مینیمال استودیو" className="aspect-[4/5] w-full rounded-t-[5rem] object-cover brightness-[1.02] contrast-[1.02] saturate-[1.12] shadow-[0_24px_70px_rgba(214,120,159,0.18)]" width="1100" height="1375" loading="lazy" />
          </picture>
          <div>
            <p className="text-2xl font-light leading-[1.85] text-[#31262a] md:text-3xl">{brandStory.subtitle}</p>
            <div className="mt-7 space-y-5 text-base leading-9 text-[#66575d]">
              {brandStory.paragraphs.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
