import React from "react";
import { motion } from "framer-motion";
import { siteConfig, whatsappUrl } from "../config/site";

/* ─── Framer-Motion Variants ─── */

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.4 + i * 0.1,
    },
  }),
};

/* ─── Decorative floating circle config ─── */
const FLOATING_CIRCLES = [
  { size: 300, blur: 90, top: "10%", left: "5%" },
  { size: 220, blur: 70, top: "60%", right: "8%" },
  { size: 180, blur: 60, bottom: "15%", left: "20%" },
  { size: 260, blur: 80, top: "30%", right: "25%" },
  { size: 140, blur: 50, bottom: "40%", right: "40%" },
];

const floatVariants: import("framer-motion").Variants = {
  animate: (i: number) => ({
    y: [0, -18 - i * 4, 0, 10 + i * 3, 0],
    x: [0, 8 + i * 2, -6 - i * 2, 0],
    scale: [1, 1.06, 0.95, 1.03, 1],
    opacity: [0.18, 0.35, 0.15, 0.3, 0.18],
    transition: {
      duration: 12 + i * 2,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.25, 0.5, 0.75, 1],
    },
  }),
};

/* ─── CTA button config ─── */
interface CtaButton {
  href: string;
  label: string;
  style: "primary" | "secondary";
  target?: string;
  rel?: string;
  icon: React.ReactNode;
}

const SvgWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SvgInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const SvgGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const SvgPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const ctaButtons: CtaButton[] = [
  {
    href: whatsappUrl,
    label: siteConfig.ctaLabels.whatsapp,
    style: "primary",
    target: "_blank",
    rel: "noreferrer",
    icon: <SvgWhatsApp />,
  },
  {
    href: siteConfig.instagramUrl,
    label: siteConfig.ctaLabels.instagram,
    style: "secondary",
    target: "_blank",
    rel: "noreferrer",
    icon: <SvgInstagram />,
  },
  {
    href: siteConfig.websiteUrl,
    label: siteConfig.ctaLabels.website,
    style: "secondary",
    target: "_blank",
    rel: "noreferrer",
    icon: <SvgGlobe />,
  },
  {
    href: `tel:${siteConfig.phoneNumber}`,
    label: siteConfig.ctaLabels.phone,
    style: "secondary",
    icon: <SvgPhone />,
  },
];

/* ─── Component ─── */

const FinalCTA: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
      dir="rtl"
      aria-label="فراخوان نهایی"
      style={{
        background: "linear-gradient(160deg, #f6d6e5 0%, #e8a0b8 50%, #d4758a 100%)",
      }}
    >
      {/* ─── Decorative Floating Blurred Circles ─── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        {FLOATING_CIRCLES.map((c, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: c.size,
              height: c.size,
              top: "top" in c ? c.top : undefined,
              left: "left" in c ? c.left : undefined,
              right: "right" in c ? c.right : undefined,
              bottom: "bottom" in c ? c.bottom : undefined,
              background:
                "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(246,214,229,0.2) 50%, transparent 70%)",
              filter: `blur(${c.blur}px)`,
            }}
            variants={floatVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </div>

      {/* ─── Subtle overlay for depth ─── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 70%)",
        }}
      />

      {/* ─── Content ─── */}
      <motion.div
        className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* ─── Glassmorphism Card ─── */}
        <motion.div
          className="blush-glass mx-auto max-w-4xl rounded-3xl px-4 py-10 text-center sm:px-6 sm:py-14 md:px-16 md:py-20 lg:px-20 lg:py-24"
          variants={cardVariants}
        >
          {/* Heading */}
          <motion.h2
            className="font-serif text-xl leading-relaxed tracking-wide text-white sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
            variants={fadeInUp}
          >
            آماده‌ای عشق را به زبان گل‌ها هدیه کنی؟
          </motion.h2>

          {/* Decorative divider */}
          <motion.div
            className="mx-auto my-5 h-[2px] w-16 rounded-full sm:my-6 sm:w-20 md:my-7 md:w-24"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
            }}
            variants={fadeInUp}
          />

          {/* Subtitle */}
          <motion.p
            className="mb-10 text-base font-light leading-relaxed text-white/75 sm:text-lg md:mb-12 md:text-xl"
            variants={fadeInUp}
          >
            همین حالا با ما تماس بگیر یا از ویترین دیدن کن
          </motion.p>

          {/* ─── CTA Buttons Grid ─── */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-5"
            variants={sectionVariants}
          >
            {ctaButtons.map((btn, i) => (
              <motion.a
                key={i}
                href={btn.href}
                target={btn.target}
                rel={btn.rel}
                className={
                  btn.style === "primary"
                    ? "blush-btn-primary flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg min-h-[48px]"
                    : "blush-btn-secondary flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg min-h-[48px]"
                }
                custom={i}
                variants={buttonVariants}
                whileHover={{ scale: 1.04, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.96, transition: { duration: 0.15 } }}
              >
                <span className="shrink-0 text-lg sm:text-xl md:text-2xl text-white/80 flex items-center justify-center">
                  {btn.icon}
                </span>
                <span className="truncate">{btn.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;