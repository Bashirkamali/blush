import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

const ServiceIcon = ({ index }: { index: number }) => {
  const paths = [
    <><path d="M12 20v-7" /><path d="M8.5 12.5C5.5 11.8 4 9.8 4 7c3.4 0 5.7 1.5 6.4 4.5" /><path d="M15.5 12.5C18.5 11.8 20 9.8 20 7c-3.4 0-5.7 1.5-6.4 4.5" /><path d="M7 20h10" /></>,
    <><path d="m5 19 10-10" /><path d="m14 5 .7 2.3L17 8l-2.3.7L14 11l-.7-2.3L11 8l2.3-.7L14 5Z" /><path d="m19 13 .5 1.5L21 15l-1.5.5L19 17l-.5-1.5L17 15l1.5-.5L19 13Z" /><path d="M5 5v3M3.5 6.5h3" /></>,
    <><path d="M4 9h16v11H4z" /><path d="M3 6h18v4H3z" /><path d="M12 6v14" /><path d="M12 6c-3 0-5-1-5-3 2.6-.4 4.2.7 5 3Z" /><path d="M12 6c3 0 5-1 5-3-2.6-.4-4.2.7-5 3Z" /></>,
    <><path d="M5 20V10a7 7 0 0 1 14 0v10" /><path d="M9 20v-5h6v5" /><path d="M8 7.5c1.1-.5 2.1-.3 3 .7.9-1 1.9-1.2 3-.7" /><path d="M12 5v6" /></>,
  ];

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[index]}
    </svg>
  );
};

const Services = () => {
  return (
    <section className="section-shell relative !py-14 bg-white md:!py-20 lg:!py-24" id="services" dir="rtl" aria-label="تجربه‌های بلاش">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="section-grid !gap-7 lg:!gap-12">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-index">۰۲</p>
            <h2 lang="en" dir="ltr">{siteConfig.sectionHeadings.services}</h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {siteConfig.services.map((service, index) => (
              <motion.article
                key={service.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[#eee2e5] bg-[linear-gradient(145deg,#fff_0%,#fffafb_100%)] p-4 transition duration-500 hover:-translate-y-1 hover:border-[#e2bdcc] hover:shadow-[0_18px_42px_rgba(166,93,120,0.10)] sm:p-5 md:rounded-[1.75rem] md:p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#fbe9f0] text-[#a65d78] transition duration-500 group-hover:bg-[#f6d6e5] group-hover:text-[#8b6841] md:h-12 md:w-12">
                  <ServiceIcon index={index} />
                </div>
                <h3 className="mt-4 text-base font-medium leading-7 text-[#21191d] sm:text-lg md:text-xl" lang="en" dir="ltr">{service.title}</h3>
                <p className="mt-2 text-xs leading-6 text-[#796a70] sm:text-sm sm:leading-7">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
