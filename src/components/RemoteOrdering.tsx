import { motion } from "framer-motion";
import { siteConfig, whatsappUrl } from "../config/site";

const RemoteOrdering = () => (
  <section className="section-shell bg-white" id="remote-ordering" dir="rtl" aria-label={siteConfig.remoteOrdering.intro}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="section-grid">
          <motion.div className="section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}>
            <h2 lang="en" dir="ltr">{siteConfig.remoteOrdering.heading}</h2>
            <p className="mt-6 text-2xl font-light leading-[1.8] text-[#31262a]">{siteConfig.remoteOrdering.intro}</p>
            <p className="mt-4 max-w-md text-sm leading-8 text-[#66575d]">{siteConfig.remoteOrdering.description}</p>
            <a className="btn-primary mt-8" href={whatsappUrl} target="_blank" rel="noreferrer">{siteConfig.ctaLabels.whatsapp}</a>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {siteConfig.remoteOrdering.cards.map((card, index) => (
              <motion.article className="quiet-card" key={card.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: index * 0.06 }}>
                <span className="block h-px w-14 bg-[#c0a16e]" />
                <h3 className="mt-7 text-xl font-light text-[#21191d]">{card.title}</h3>
                <p className="mt-4 text-sm leading-8 text-[#66575d]">{card.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
  </section>
);

export default RemoteOrdering;
