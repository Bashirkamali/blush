import React, { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

/* ─── Framer‑Motion Variants ─── */

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.1 + i * 0.08,
    },
  }),
};

/* ─── Component ─── */

const FAQ: React.FC = () => {
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
      dir="rtl"
      aria-label="سوالات متداول"
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

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
              سوالات متداول
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

          {/* ── FAQ Accordion Items ── */}
          <div className="space-y-4">
            {faq.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={idx}
                  className="blush-card overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgba(246,214,229,0.3)]"
                  custom={idx}
                  variants={faqItemVariants}
                >
                  {/* ── Question Button ── */}
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-right transition-colors duration-300 hover:bg-white/40 sm:px-7 sm:py-6"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span
                      className="flex-1 font-serif text-base font-medium leading-relaxed text-[#1a1a2e] md:text-lg"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.q}
                    </span>

                    {/* ── Plus / Minus Icon with Rotation Transition ── */}
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-400"
                      style={{
                        backgroundColor: isOpen ? "#c9a96e" : "#f6d6e5",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-400"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      >
                        {/* Vertical bar */}
                        <rect
                          x="6"
                          y="0"
                          width="2"
                          height="14"
                          rx="1"
                          fill={isOpen ? "#ffffff" : "#1a1a2e"}
                        />
                        {/* Horizontal bar */}
                        <rect
                          x="0"
                          y="6"
                          width="14"
                          height="2"
                          rx="1"
                          fill={isOpen ? "#ffffff" : "#1a1a2e"}
                        />
                      </svg>
                    </span>
                  </button>

                  {/* ── Answer (grid expand / collapse) ── */}
                  <div
                    id={`faq-answer-${idx}`}
                    className={`faq-answer ${isOpen ? "open" : ""}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                  >
                    <div>
                      <div className="border-t border-[rgba(246,214,229,0.3)] px-5 pb-5 pt-4 sm:px-7 sm:pb-6 sm:pt-5">
                        <p className="text-xs leading-7 text-[#4a3f47] md:text-base md:leading-8">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;