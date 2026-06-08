import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

const Testimonials = () => {
  return (
    <section className="section-shell bg-white" id="standards" dir="rtl" aria-label="استانداردهای بلاش">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="section-grid">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-index">۰۵</p>
            <h2>استانداردهایی که تجربه را می‌سازند</h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {siteConfig.standards.map((item, index) => (
              <motion.article
                key={item.title}
                className="quiet-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
              >
                <span className="block h-px w-14 bg-[#c0a16e]" />
                <h3 className="mt-8 text-xl font-light leading-9 text-[#21191d]">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-[#66575d]">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
