import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

const ContactIcon = ({ type }: { type: "phone" | "whatsapp" | "location" }) => {
  if (type === "phone") return <path d="M7.2 3.5 9.5 8 7.8 9.7c1 2.1 2.7 3.8 4.8 4.8l1.7-1.7 4.5 2.3c.3.2.5.5.4.9-.4 2.7-2 4-4.6 4C8.8 20 4 15.2 4 9.4 4 6.8 5.3 3.9 7.2 3.5Z" />;
  if (type === "whatsapp") return <><path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4.1A8 8 0 1 1 20 11.7Z" /><path d="M8.7 8.2c.4 3 2.1 4.8 5.1 5.5" /></>;
  return <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>;
};

const FinalCTA = () => {
  return (
    <section className="bg-[#21191d] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12" id="contact" dir="rtl" aria-label="تماس با بلاش">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75 }}
      >
        <div className="max-w-3xl">
          <h2 className="max-w-3xl text-2xl font-light leading-[1.7] md:text-4xl md:leading-[1.55]" lang="en" dir="ltr">
            {siteConfig.finalCta.heading}
          </h2>
          <p className="mt-5 text-2xl leading-9" lang="en" dir="ltr">{siteConfig.finalCta.description}</p>
          <p className="mt-3 text-sm text-white/70">{siteConfig.finalCta.sub}</p>
          <p className="mt-7 font-medium text-[#c0a16e]">{siteConfig.finalCta.hours}</p>
          <p className="mt-2 max-w-2xl text-sm leading-8 text-white/65">{siteConfig.finalCta.hoursNote}</p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {siteConfig.branches.map((branch) => (
            <article className="border border-white/15 bg-white/[0.04] p-6 md:p-7" key={branch.name}>
              <h3 className="text-xl text-white" lang="en" dir="ltr">{branch.name}</h3>
              <p className="mt-4 font-medium text-[#e3c58f]">{branch.label}</p>
              <address className="mt-2 min-h-14 not-italic text-sm leading-7 text-white/65">{branch.address}</address>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn-outline-light gap-2" href={`tel:${branch.phone}`} aria-label={`تماس با ${branch.label}`}>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ContactIcon type="phone" /></svg>
                  تماس
                </a>
                <a className="btn-light gap-2" href={`https://wa.me/${branch.whatsapp}`} target="_blank" rel="noreferrer" aria-label={`واتساپ ${branch.label}`}>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ContactIcon type="whatsapp" /></svg>
                  واتساپ
                </a>
                <a className="btn-outline-light gap-2" href={branch.mapUrl} target="_blank" rel="noreferrer" aria-label={`موقعیت ${branch.label} در نقشه`}>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ContactIcon type="location" /></svg>
                  موقعیت شعبه
                </a>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
