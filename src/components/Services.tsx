import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

const Services = () => {
  return (
    <section className="section-shell bg-white" id="services" dir="rtl" aria-label="تجربه‌های بلاش">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="section-grid">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-index">۰۲</p>
            <h2>تجربه‌های امضای بلاش</h2>
          </motion.div>

          <div className="divide-y divide-[#eadfd9] border-y border-[#eadfd9]">
            {siteConfig.services.map((service, index) => (
              <motion.article
                key={service.title}
                className="grid gap-5 py-8 md:grid-cols-[8rem_1fr] md:gap-10 md:py-10"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
              >
                <div className="font-serif text-4xl font-light text-[#c0a16e]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-2xl font-light leading-10 text-[#21191d] md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-9 text-[#66575d] md:text-lg md:leading-10">
                    {service.description}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#8a747b]">{service.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
