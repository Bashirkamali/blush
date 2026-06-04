import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

/* ─── Framer‑Motion Variants ─── */

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

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.3 + i * 0.1,
    },
  }),
};

/* ─── Component ─── */

const BrandStory: React.FC = () => {
  const { brandStory } = siteConfig;

  return (
    <section
      id="brand-story"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
      dir="rtl"
      aria-label={brandStory.heading}
    >
      {/* Subtle background ambience */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div
          className="absolute -left-1/4 top-1/3 h-[500px] w-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(246,214,229,0.5) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(201,169,110,0.35) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* ── Image Column (left on desktop) ── */}
          <motion.div
            className="relative order-2 lg:order-1"
            variants={fadeInLeft}
          >
            <div className="blush-card aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[3/4]">
              <img
                src="/hero.webp"
                alt="Blush — استودیوی گل‌آرایی لوکس در شیراز"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              {/* Gradient overlay for elegance */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(246,214,229,0.15) 0%, transparent 40%, rgba(0,0,0,0.1) 100%)",
                }}
              />
            </div>

            {/* Decorative corner flourish */}
            <div
              className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(201,169,110,0.4), transparent 70%)",
                filter: "blur(16px)",
              }}
              aria-hidden
            />
          </motion.div>

          {/* ── Text Column (right on desktop) ── */}
          <motion.div
            className="order-1 flex flex-col gap-6 lg:order-2"
            variants={sectionVariants}
          >
            {/* Heading */}
            <motion.div variants={fadeInRight}>
              <h2
                className="font-serif text-3xl font-light tracking-wide text-[#1a1a2e] md:text-4xl lg:text-5xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {brandStory.heading}
              </h2>
              {/* Golden/blush gradient line */}
              <div
                className="mt-3 h-[2px] w-20 rounded-full md:w-24"
                style={{
                  background:
                    "linear-gradient(90deg, #f6d6e5 0%, #c9a96e 50%, #f6d6e5 100%)",
                }}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="font-serif text-lg italic leading-relaxed text-[#6b5863] md:text-xl lg:text-2xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
              variants={fadeInRight}
            >
              {brandStory.subtitle}
            </motion.p>

            {/* Paragraphs */}
            {brandStory.paragraphs.map((paragraph, idx) => (
              <motion.p
                key={idx}
                className="text-base leading-8 text-[#4a3f47] md:text-lg md:leading-9"
                style={{ lineHeight: "2" }}
                variants={fadeInRight}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* ── Stats Row ── */}
            <motion.div
              className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
              variants={sectionVariants}
            >
              {brandStory.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center rounded-2xl border border-[#f6d6e5]/30 bg-white/50 px-3 py-5 text-center backdrop-blur-sm sm:px-4 sm:py-6"
                  custom={idx}
                  variants={statItem}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                >
                  <span
                    className="font-serif text-2xl font-semibold tracking-tight text-[#c9a96e] md:text-3xl"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.number}
                  </span>
                  <span className="mt-1 text-sm text-[#6b5863] md:text-base">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
