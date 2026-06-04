import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/site";
import { useTiltEffect } from "../hooks/useTiltEffect";

/* ─── Decorative icon symbols ─── */
const ICON_SYMBOLS = ["✿", "❀", "✦"];

/* ─── Framer‑Motion Variants ─── */

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.1 + i * 0.12,
    },
  }),
};

/* ─── Tilt‑Enabled Service Card ─── */

const TiltCard: React.FC<{
  title: string;
  description: string;
  iconSymbol: string;
  idx: number;
}> = ({ title, description, iconSymbol, idx }) => {
  const { ref } = useTiltEffect({ scale: 1.02, maxTilt: 10, perspective: 800 });

  return (
    <motion.div
      ref={ref}
      className="blush-card group flex flex-col items-center px-4 py-8 text-center transition-shadow duration-500 hover:shadow-[0_12px_50px_rgba(246,214,229,0.35)] sm:px-6 sm:py-10"
      custom={idx}
      variants={cardVariants}
    >
      {/* ── Decorative Icon Area ── */}
      <div
        className="relative mb-6 flex h-16 w-16 items-center justify-center md:h-24 md:w-24"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
      >
        {/* Gradient circle */}
        <div
          className="absolute inset-0 rounded-full opacity-70 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, #f6d6e5 0%, #f0b8d0 50%, #e899b8 100%)",
          }}
        />
        {/* Inner lighter circle */}
        <div className="absolute inset-[4px] rounded-full bg-white/70 backdrop-blur-sm" />
        {/* Symbol */}
        <span
          className="relative z-10 text-2xl md:text-3xl"
          style={{ color: "#c9a96e" }}
        >
          {iconSymbol}
        </span>
      </div>

      {/* ── Service Title ── */}
      <h3
        className="font-serif text-lg font-medium tracking-wide text-[#1a1a2e] md:text-2xl"
        style={{ fontFamily: "'Playfair Display', serif", transform: "translateZ(30px)" }}
      >
        {title}
      </h3>

      {/* ── Description ── */}
      <p
        className="mt-4 text-xs leading-7 text-[#4a3f47] md:text-base md:leading-8"
        style={{ transform: "translateZ(15px)" }}
      >
        {description}
      </p>
    </motion.div>
  );
};

/* ─── Component ─── */

const Services: React.FC = () => {
  const { services } = siteConfig;

  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
      dir="rtl"
      aria-label="خدمات بلاش"
    >
      {/* Subtle background ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute -right-1/4 top-1/4 h-[450px] w-[450px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(246,214,229,0.5) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -left-1/4 bottom-1/3 h-[350px] w-[350px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(201,169,110,0.35) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* ── Section Heading ── */}
          <motion.div className="mb-14 text-center md:mb-18 lg:mb-20" variants={fadeInUp}>
            <h2
              className="font-serif text-2xl font-light tracking-wide text-[#1a1a2e] md:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              خدمات بلاش
            </h2>
            {/* Elegant gradient line */}
            <div
              className="mx-auto mt-4 h-[2px] w-24 rounded-full md:w-28"
              style={{
                background:
                  "linear-gradient(90deg, #f6d6e5 0%, #c9a96e 50%, #f6d6e5 100%)",
              }}
            />
          </motion.div>

          {/* ── Cards Grid ── */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <TiltCard
                key={idx}
                title={service.title}
                description={service.description}
                iconSymbol={ICON_SYMBOLS[idx % ICON_SYMBOLS.length]}
                idx={idx}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;