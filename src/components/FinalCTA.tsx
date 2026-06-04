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
  icon: string;
}

const ctaButtons: CtaButton[] = [
  {
    href: whatsappUrl,
    label: siteConfig.ctaLabels.whatsapp,
    style: "primary",
    target: "_blank",
    rel: "noreferrer",
    icon: "💬",
  },
  {
    href: siteConfig.instagramUrl,
    label: siteConfig.ctaLabels.instagram,
    style: "secondary",
    target: "_blank",
    rel: "noreferrer",
    icon: "📷",
  },
  {
    href: siteConfig.websiteUrl,
    label: siteConfig.ctaLabels.website,
    style: "secondary",
    target: "_blank",
    rel: "noreferrer",
    icon: "🌐",
  },
  {
    href: `tel:${siteConfig.phoneNumber}`,
    label: siteConfig.ctaLabels.phone,
    style: "secondary",
    icon: "📞",
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
          className="blush-glass mx-auto max-w-4xl rounded-3xl px-6 py-14 text-center sm:px-10 sm:py-16 md:px-16 md:py-20 lg:px-20 lg:py-24"
          variants={cardVariants}
        >
          {/* Heading */}
          <motion.h2
            className="font-serif text-2xl leading-relaxed tracking-wide text-white sm:text-3xl md:text-4xl lg:text-5xl"
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
            className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-5"
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
                    ? "blush-btn-primary flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg"
                    : "blush-btn-secondary flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg"
                }
                custom={i}
                variants={buttonVariants}
                whileHover={{ scale: 1.04, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.96, transition: { duration: 0.15 } }}
              >
                <span className="shrink-0 text-lg sm:text-xl md:text-2xl">
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