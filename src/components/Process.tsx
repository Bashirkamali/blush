import { motion } from "framer-motion";
import { siteConfig, whatsappUrl } from "../config/site";

const Process = () => {
  return (
    <section className="section-shell relative bg-[#f6d6e5]/28" id="process" dir="rtl" aria-label="نحوه سفارش از بلاش">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="section-grid">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 lang="en" dir="ltr">{siteConfig.sectionHeadings.process}</h2>
            <a className="mt-8 inline-flex text-sm text-[#806943] underline underline-offset-8" href={whatsappUrl} target="_blank" rel="noreferrer">
              {siteConfig.ctaLabels.whatsapp}
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
                <h3 className="mt-8 text-lg font-light leading-8 text-[#21191d]" lang="en" dir="ltr">{step.title}</h3>
                <p className="mt-4 text-sm leading-8 text-[#66575d]">{step.description}</p>
              </motion.article>
            ))}
          </div>
          <aside className="border-r-2 border-[#c0a16e] bg-white/55 px-5 py-4 lg:col-start-2" aria-label={siteConfig.leadTimes.heading}>
            <div className="grid items-start gap-4 md:grid-cols-[auto_1fr] md:gap-8">
              <h3 className="whitespace-nowrap text-base font-medium text-[#31262a]">{siteConfig.leadTimes.heading}</h3>
              <dl className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              {siteConfig.leadTimes.items.map((item) => (
                <div className="flex flex-wrap gap-x-2" key={item.title}>
                  <dt className="font-medium text-[#31262a]">{item.title}</dt>
                  <dd className="text-sm text-[#66575d]">{item.value}</dd>
                </div>
              ))}
              </dl>
            </div>
            <p className="mt-3 text-[0.7rem] leading-6 text-[#796a70]">{siteConfig.leadTimes.note}</p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Process;
