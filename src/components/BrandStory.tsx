import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

const BrandStory = () => {
  const { brandStory } = siteConfig;

  return (
    <section className="section-shell bg-[#fbf8f6]" id="brand-story" dir="rtl" aria-label={brandStory.heading}>
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
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-2xl font-light leading-[1.85] text-[#31262a] md:text-4xl">
            {brandStory.subtitle}
          </p>

          <div className="mt-8 space-y-5 text-base leading-9 text-[#66575d] md:text-lg md:leading-10">
            {brandStory.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
