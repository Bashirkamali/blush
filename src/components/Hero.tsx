import { motion, useReducedMotion } from "framer-motion";
import heroImage from "../assets/brand/hero-studio-v4-dreamier.webp";
import heroImageMobile from "../assets/brand/hero-studio-v4-dreamier-mobile.webp";
import { whatsappUrl } from "../config/site";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#fffaf8] px-5 pb-10 pt-24 sm:px-8 lg:px-12 lg:pb-20 lg:pt-28" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute -right-28 top-20 h-80 w-80 rounded-full bg-[#f3c8da]/35 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-0 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative z-10 order-2 -mt-8 rounded-t-[2rem] bg-[#fffaf8] px-1 pb-2 pt-7 text-right lg:order-1 lg:mt-0 lg:rounded-none lg:bg-transparent lg:px-0 lg:py-8" dir="rtl">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#8b6841] lg:mb-5">استودیوی گل و هدیه در شیراز</p>
          <h1 id="hero-title" className="max-w-2xl text-[2.15rem] font-light leading-[1.55] text-[#21191d] sm:text-5xl lg:text-6xl lg:leading-[1.4]">
            گل، وقتی باید <span className="text-[#a65d78]">به‌یاد بماند.</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-8 text-[#5f5056] sm:mt-6 sm:text-lg sm:leading-10">
            طراحی گل و هدیه متناسب با مناسبت، سلیقه و بودجه شما؛ با انتخاب‌های فصلی، بسته‌بندی دقیق و امضای بصری بلاش.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <a className="btn-primary w-full sm:w-auto" href={whatsappUrl} target="_blank" rel="noreferrer">سفارش و راهنمایی در واتساپ</a>
            <a className="btn-secondary w-full sm:w-auto" href="#vitrine">مشاهده نمونه‌های واقعی</a>
          </div>
          <p className="mt-4 text-xs leading-7 text-[#796a70]">موجودی گل، امکان اجرا و زمان تحویل پیش از تأیید سفارش هماهنگ می‌شود.</p>
          <ul className="mt-6 grid grid-cols-3 gap-2 border-t border-[#e6d8d3] pt-5 text-center text-[0.68rem] leading-5 text-[#62545a] sm:mt-9 sm:gap-3 sm:pt-6 sm:text-right sm:text-sm sm:leading-7 lg:text-right">
            <li><strong className="block font-medium text-[#21191d]">انتخاب شخصی‌سازی‌شده</strong>بر اساس مناسبت و سلیقه</li>
            <li><strong className="block font-medium text-[#21191d]">تصاویر واقعی بلاش</strong>بدون نمونه و رضایت ساختگی</li>
            <li><strong className="block font-medium text-[#21191d]">هماهنگی شفاف</strong>پیش از ثبت نهایی سفارش</li>
          </ul>
        </div>
        <motion.div className="relative order-1 min-h-[24rem] lg:order-2 lg:min-h-[calc(100svh-10rem)]" initial={reduceMotion ? false : { opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <picture>
            <source media="(max-width: 767px)" srcSet={heroImageMobile} />
            <img src={heroImage} alt="استند تشریفاتی ارکیده و رز بلاش مقابل دیوار صورتی و لوگوی طلایی استودیو" className="absolute inset-0 h-full w-full rounded-t-[6rem] object-cover object-center shadow-[0_30px_80px_rgba(62,38,48,0.14)] lg:rounded-t-[9rem]" width="1100" height="1467" {...{ fetchpriority: "high" }} />
          </picture>
          <div className="absolute bottom-5 right-5 hidden max-w-[15rem] items-center gap-3 bg-white/95 p-3 shadow-xl backdrop-blur lg:flex">
            <span className="grid h-14 w-14 shrink-0 place-items-center bg-[#f3c8da] font-serif text-xl text-[#21191d]" aria-hidden="true">B</span>
            <p className="text-xs leading-6 text-[#4f4348]" dir="rtl"><strong className="block text-sm font-medium text-[#21191d]">ویترین بلاش</strong>هر طرح با موجودی فصل بازتفسیر می‌شود.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
