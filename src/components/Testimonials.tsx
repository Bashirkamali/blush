import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

const Testimonials = () => {
  return (
    <section className="section-shell bg-white" id="standards" dir="rtl" aria-label="استانداردهای بلاش">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-light leading-[1.65] text-[#21191d] md:text-4xl" lang="en" dir="ltr">{siteConfig.sectionHeadings.standards}</h2>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-9 text-[#66575d] md:text-base">
              {siteConfig.standardsIntro}
            </p>
          </motion.div>

          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 border-y border-[#eadfd9] py-6 sm:grid-cols-3">
            {siteConfig.standards.map((item, index) => (
              <motion.li
                key={item.title}
                className="flex items-center justify-center gap-3 text-sm text-[#31262a]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#c0a16e]" aria-hidden="true" />
                <span lang="en" dir="ltr">{item.title}</span>
              </motion.li>
            ))}
          </ul>
      </div>
    </section>
  );
};

export default Testimonials;
