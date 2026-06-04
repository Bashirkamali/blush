import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

/* ─── Inline SVG Star ─── */

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? "#c9a96e" : "none"}
    stroke={filled ? "#c9a96e" : "#d4c5b2"}
    strokeWidth="1.5"
    className="inline-block"
    aria-hidden
  >
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    />
  </svg>
);

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

/* ─── Component ─── */

const Testimonials: React.FC = () => {
  const { testimonials } = siteConfig;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-4 py-20 md:py-28 lg:py-32"
      dir="rtl"
      aria-label="آنچه مشتریان می‌گویند"
    >
      {/* Subtle background ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
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
              آنچه مشتریان می‌گویند
            </h2>
            {/* Elegant gold gradient line */}
            <div
              className="mx-auto mt-4 h-[2px] w-24 rounded-full md:w-28"
              style={{
                background:
                  "linear-gradient(90deg, #f6d6e5 0%, #c9a96e 50%, #f6d6e5 100%)",
              }}
            />
          </motion.div>

          {/* ── Testimonial Cards Grid ── */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="blush-card flex flex-col gap-4 px-5 py-7 transition-all duration-500 hover:shadow-[0_12px_50px_rgba(246,214,229,0.35)] sm:px-6 sm:py-8"
                custom={idx}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                {/* ── Avatar ── */}
                <div className="flex items-center gap-3 mb-1">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-[#f6d6e5]/40 flex-shrink-0"
                  />
                  <div>
                    <span className="block font-serif text-base font-medium tracking-wide text-[#1a1a2e] md:text-lg"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {testimonial.name}
                    </span>
                    <span className="block mt-0.5 text-xs text-[#8a7a83] md:text-sm">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                {/* ── Star Rating ── */}
                <div className="flex gap-0.5" dir="ltr" aria-label={`${testimonial.rating} از ۵ ستاره`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon key={i} filled={i < testimonial.rating} />
                  ))}
                </div>

                {/* ── Quote Text ── */}
                <p className="flex-1 text-sm leading-7 text-[#4a3f47] md:text-base md:leading-8">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;