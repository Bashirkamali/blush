import { motion, useReducedMotion } from "framer-motion";
import heroImage from "../assets/brand/hero-option-1-vivid-glow.webp";
import heroImageMobile from "../assets/brand/hero-option-1-vivid-glow-mobile.webp";
import { siteConfig, whatsappUrl } from "../config/site";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#fff5f7] px-5 pb-10 pt-24 sm:px-8 lg:px-12 lg:pb-20 lg:pt-28" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute -right-28 top-20 h-80 w-80 rounded-full bg-[#f3c8da]/35 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-0 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative order-2 -mt-8 rounded-t-[2rem] bg-[#fff5f7] px-1 pb-2 pt-7 text-right [&>*]:relative [&>*]:z-20 lg:order-1 lg:mt-0 lg:rounded-none lg:bg-transparent lg:px-0 lg:py-8" dir="rtl">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#8b6841] lg:mb-5" lang="en" dir="ltr">{siteConfig.hero.eyebrow}</p>
          <h1 id="hero-title" className="max-w-2xl text-[1.9rem] font-light leading-[1.55] text-[#21191d] sm:text-4xl lg:text-5xl lg:leading-[1.4]" lang="en" dir="ltr">
            {siteConfig.hero.titlePrefix} <span className="text-[#a65d78]">{siteConfig.hero.titleEmphasis}</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-8 text-[#5f5056] sm:mt-6 sm:text-lg sm:leading-10">
            {siteConfig.hero.description}
          </p>
          <p className="mt-2 max-w-xl text-xs leading-7 text-[#796a70] sm:text-sm sm:leading-8">
            {siteConfig.hero.supportingText}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <a className="btn-primary w-full sm:w-auto" href={whatsappUrl} target="_blank" rel="noreferrer">{siteConfig.hero.primaryCta}</a>
            <a className="btn-secondary w-full sm:w-auto" href="#vitrine">{siteConfig.hero.secondaryCta}</a>
          </div>
          <ul className="mt-6 grid grid-cols-3 gap-2 border-t border-[#e6d8d3] pt-5 text-center text-[0.68rem] leading-5 text-[#62545a] sm:mt-9 sm:gap-3 sm:pt-6 sm:text-right sm:text-sm sm:leading-7 lg:text-right">
            {siteConfig.hero.highlights.map((item) => (
              <li key={item.title}><strong className="block font-medium text-[#21191d]">{item.title}</strong>{item.description}</li>
            ))}
          </ul>
        </div>
        <motion.div className="relative z-[17] order-1 min-h-[24rem] lg:order-2 lg:min-h-[calc(100svh-10rem)]" initial={reduceMotion ? false : { opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <picture>
            <source media="(max-width: 767px)" srcSet={heroImageMobile} />
            <img src={heroImage} alt={siteConfig.hero.imageAlt} className="absolute inset-0 h-full w-full rounded-t-[6rem] object-cover object-center shadow-[0_30px_85px_rgba(214,120,159,0.22)] lg:rounded-t-[9rem]" width="1100" height="1462" {...{ fetchpriority: "high" }} />
          </picture>
          <span className="pointer-events-none absolute inset-0 rounded-t-[6rem] bg-[linear-gradient(145deg,rgba(255,245,247,0.24),rgba(255,245,247,0.16))] lg:rounded-t-[9rem]" aria-hidden="true" />
          <div className="absolute bottom-5 right-5 hidden max-w-[15rem] items-center gap-3 bg-white/95 p-3 shadow-xl backdrop-blur lg:flex">
            <span className="grid h-14 w-14 shrink-0 place-items-center bg-[#f3c8da] font-serif text-xl text-[#21191d]" aria-hidden="true">B</span>
            <p className="text-xs leading-6 text-[#4f4348]" dir="rtl"><strong className="block text-sm font-medium text-[#21191d]">{siteConfig.hero.vitrineCard.title}</strong>{siteConfig.hero.vitrineCard.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
