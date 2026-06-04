import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

/* ─── Framer‑Motion Variants ─── */

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.15 + i * 0.18,
    },
  }),
};

/* ─── Component ─── */

const Process: React.FC = () => {
  const { process } = siteConfig;

  return (
    <section
      id="process"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
      dir="rtl"
      aria-label="نحوه سفارش"
    >
      {/* Subtle blush glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(246,214,229,0.6) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(201,169,110,0.4) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-0 h-[250px] w-[250px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(246,214,229,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
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
              چطور کار می‌کنیم
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

          {/* ── Steps ── */}
          {/* Mobile: vertical stacked; Desktop: horizontal row */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-0">
            {process.map((step, idx) => (
              <React.Fragment key={step.step}>
                {/* Step Card */}
                <motion.div
                  className="flex w-full max-w-xs flex-col items-center text-center md:w-auto md:flex-1"
                  custom={idx}
                  variants={stepVariants}
                >
                  {/* Step Number Circle (gold gradient) */}
                  <div className="relative mb-5 flex h-16 w-16 items-center justify-center md:h-20 md:w-20">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #c9a96e 0%, #e2c68a 40%, #d4b87a 100%)",
                      }}
                    />
                    <div className="absolute inset-[3px] rounded-full bg-white/80 backdrop-blur-sm" />
                    <span
                      className="relative z-10 font-serif text-lg font-bold md:text-xl"
                      style={{
                        background:
                          "linear-gradient(135deg, #c9a96e 0%, #b8965a 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Emoji Icon */}
                  <span className="mb-3 text-3xl md:text-4xl" role="img" aria-hidden>
                    {step.icon}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-serif text-lg font-medium tracking-wide text-[#1a1a2e] md:text-xl"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-7 text-[#4a3f47] md:text-sm md:leading-7">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connector line between steps (hidden after last) */}
                {idx < process.length - 1 && (
                  <div className="hidden w-16 shrink-0 md:block">
                    <div className="step-connector mt-[2.25rem] w-full" />
                  </div>
                )}

                {/* Mobile connector — vertical gradient line */}
                {idx < process.length - 1 && (
                  <div className="block md:hidden">
                    <div
                      className="h-10 w-[2px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #f6d6e5 0%, #c9a96e 50%, #f6d6e5 100%)",
                        backgroundSize: "100% 200%",
                        animation: "gradientShift 3s ease infinite",
                      }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;