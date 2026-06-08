import { motion } from "framer-motion";
import { siteConfig, whatsappUrl } from "../config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const Hero = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#fbf8f6] px-5 pb-16 pt-24 text-[#21191d] sm:px-8 lg:min-h-[92svh] lg:px-12"
      aria-label="Blush landing hero"
      dir="rtl"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[linear-gradient(180deg,#f6d6e5_0%,rgba(246,214,229,0.42)_32%,rgba(251,248,246,0)_100%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:min-h-[calc(92svh-9rem)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <motion.div
          className="order-1 flex w-full min-w-0 max-w-full flex-col items-stretch text-center lg:text-right"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="w-full max-w-full overflow-hidden font-serif text-[clamp(2.45rem,15vw,11rem)] font-light leading-[0.9] tracking-normal text-[#21191d] sm:tracking-[0.12em]"
            variants={fadeUp}
            custom={0.1}
          >
            {siteConfig.hero.title}
          </motion.h1>

          <motion.p
            className="mx-auto mt-8 max-w-xl text-2xl font-light leading-[1.8] text-[#35272d] sm:text-3xl lg:mx-0"
            variants={fadeUp}
            custom={0.22}
          >
            {siteConfig.hero.subtitle}
          </motion.p>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-base leading-9 text-[#66575d] sm:text-lg lg:mx-0"
            variants={fadeUp}
            custom={0.34}
          >
            {siteConfig.hero.description}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
            variants={fadeUp}
            custom={0.46}
          >
            <a className="btn-primary w-full sm:w-auto" href={whatsappUrl} target="_blank" rel="noreferrer">
              {siteConfig.hero.primaryCta}
            </a>
            <a className="btn-secondary w-full sm:w-auto" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
              {siteConfig.hero.secondaryCta}
            </a>
            <a className="btn-text w-full sm:w-auto" href="#vitrine">
              {siteConfig.hero.tertiaryCta}
            </a>
          </motion.div>

          <motion.dl
            className="mt-12 grid max-w-2xl grid-cols-1 gap-5 border-y border-[#d9c7c0] py-6 text-sm text-[#66575d] sm:grid-cols-3"
            variants={fadeUp}
            custom={0.58}
          >
            <div>
              <dt className="text-[#21191d]">تمرکز</dt>
              <dd className="mt-2 leading-7">هدیه‌های گل، طراحی اختصاصی، بسته‌بندی</dd>
            </div>
            <div>
              <dt className="text-[#21191d]">مسیر سفارش</dt>
              <dd className="mt-2 leading-7">گفت‌وگو، انتخاب، آماده‌سازی</dd>
            </div>
            <div>
              <dt className="text-[#21191d]">شهر</dt>
              <dd className="mt-2 leading-7">شیراز</dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          className="order-2"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative mx-auto w-full max-w-[38rem] lg:max-w-none">
            <div className="aspect-[4/5] overflow-hidden rounded-t-[10rem] rounded-b-[1.25rem] bg-[#eadfd9] shadow-[0_28px_80px_rgba(80,47,57,0.18)] sm:rounded-t-[18rem] sm:rounded-b-[2rem]">
              <img
                src={siteConfig.heroMedia.poster}
                alt={siteConfig.hero.imageAlt}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-7 left-4 right-4 border border-white/[0.70] bg-white/[0.82] px-5 py-4 text-center shadow-[0_18px_45px_rgba(80,47,57,0.13)] backdrop-blur md:left-10 md:right-10">
              <p className="text-sm leading-7 text-[#4f4247]">
                یک هدیه‌ی خوب فقط زیبا نیست؛ باید به موقعیت، گیرنده و لحظه‌ی دریافت احترام بگذارد.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
