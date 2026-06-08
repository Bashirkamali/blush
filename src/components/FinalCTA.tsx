import { motion } from "framer-motion";
import { siteConfig, whatsappUrl } from "../config/site";

const FinalCTA = () => {
  return (
    <section className="bg-[#21191d] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12" id="contact" dir="rtl" aria-label="تماس با بلاش">
      <motion.div
        className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75 }}
      >
        <div>
          <p className="section-index text-[#c0a16e]">۰۷</p>
          <h2 className="max-w-3xl text-3xl font-light leading-[1.7] md:text-5xl md:leading-[1.55]">
            اگر هدیه باید آرام، دقیق و به‌یادماندنی باشد، گفت‌وگو را از همین‌جا شروع کنید.
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <a className="btn-light" href={whatsappUrl} target="_blank" rel="noreferrer">
            {siteConfig.ctaLabels.whatsapp}
          </a>
          <a className="btn-outline-light" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
            {siteConfig.ctaLabels.instagram}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
