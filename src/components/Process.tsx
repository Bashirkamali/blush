import { motion } from "framer-motion";
import { siteConfig, whatsappUrl } from "../config/site";

const Process = () => {
  return (
    <section className="section-shell bg-[#f6d6e5]/28" id="process" dir="rtl" aria-label="نحوه سفارش از بلاش">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="section-grid">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-index">۰۳</p>
            <h2>چطور یک هدیه سنجیده انتخاب می‌شود؟</h2>
            <a className="mt-8 inline-flex text-sm text-[#806943] underline underline-offset-8" href={whatsappUrl} target="_blank" rel="noreferrer">
              شروع گفت‌وگو در واتساپ
            </a>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {siteConfig.process.map((step, index) => (
              <motion.article
                key={step.step}
                className="quiet-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: index * 0.07 }}
              >
                <span className="font-serif text-4xl font-light text-[#c0a16e]">{step.step}</span>
                <h3 className="mt-8 text-xl font-light leading-9 text-[#21191d]">{step.title}</h3>
                <p className="mt-4 text-sm leading-8 text-[#66575d]">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
