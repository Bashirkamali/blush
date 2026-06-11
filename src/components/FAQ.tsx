import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-shell bg-[#fbf8f6]" id="faq" dir="rtl" aria-label="پرسش‌های متداول بلاش">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="section-grid">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-index">۰۶</p>
            <h2>پرسش‌های رایج پیش از سفارش</h2>
          </motion.div>

          <div className="divide-y divide-[#eadfd9] border-y border-[#eadfd9]">
            {siteConfig.faq.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.article
                  key={item.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.04 }}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-6 text-right"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-lg font-light leading-9 text-[#21191d] md:text-xl">{item.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#d7c2ba] text-[#806943]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pb-6 text-sm leading-8 text-[#66575d] md:text-base md:leading-9">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
