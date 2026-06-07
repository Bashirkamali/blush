import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig, whatsappUrl } from "../config/site";
import { useMagneticEffect } from "../hooks/useMagneticEffect";

/* ─── Framer‑Motion Variants ─── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.4,
    },
  },
};

const brandVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const taglineRevealVariants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const, delay: 0.6 },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 1.1 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 1.4 + i * 0.12,
    },
  }),
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 2.8 },
  },
};

const chevronBounce: import("framer-motion").Variants = {
  animate: {
    y: [0, 10, 0],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const bloomParticleVariants: import("framer-motion").Variants = {
  initial: (i: number) => ({
    x: `${30 + i * 22}%`,
    y: `${20 + (i % 2) * 40}%`,
    scale: 0,
    opacity: 0,
  }),
  animate: (i: number) => ({
    scale: [0, 1.2, 1],
    opacity: [0, 0.5, 0.3],
    y: [`${20 + (i % 2) * 40}%`, `${10 + (i % 2) * 35}%`, `${20 + (i % 2) * 40}%`],
    x: [`${30 + i * 22}%`, `${28 + i * 22}%`, `${30 + i * 22}%`],
    transition: {
      duration: 6 + i * 0.8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.5,
      times: [0, 0.5, 1],
    },
  }),
};

/* ─── Bloom particle config ─── */
const BLOOM_PARTICLES = [
  { size: 180, blur: 40 },
  { size: 130, blur: 30 },
  { size: 200, blur: 50 },
  { size: 100, blur: 25 },
];

/* ─── Helper: prefers‑reduced‑motion hook ─── */
function usePrefersReducedMotion(): boolean {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefers(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefers(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return prefers;
}

/* ─── MagneticButton — wraps motion.a with cursor-follow transform ─── */

interface MagneticButtonProps {
  href: string;
  className: string;
  custom: number;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  href,
  className,
  custom,
  children,
  target,
  rel,
}) => {
  const { ref, transform } = useMagneticEffect(15, 0.12);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={href}
      target={target}
      rel={rel}
      className={className}
      custom={custom}
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      style={prefersReducedMotion ? {} : { transform }}
    >
      {children}
    </motion.a>
  );
};

/* ─── Component ─── */

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollY } = useScroll();

  // Parallax: video moves slower than scroll
  const parallaxY = useTransform(scrollY, [0, 800], [0, -250]);
  const contentParallaxY = useTransform(scrollY, [0, 800], [0, 120]);
  const overlayOpacity = useTransform(scrollY, [0, 600], [1, 0.3]);

  return (
    <section
      ref={heroRef}
      className="relative h-[100svh] min-h-[100svh] w-full overflow-hidden"
      aria-label={`${siteConfig.brandNameDisplay} — Hero`}
      dir="rtl"
    >
      {/* ─── Background Video + Poster ─── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 h-[120%] w-full"
          style={prefersReducedMotion ? {} : { y: parallaxY }}
          transition={{ type: "tween", ease: "linear" }}
        >
          <video
            className="h-full w-full object-cover"
            preload="metadata"
            autoPlay
            muted
            loop
            playsInline
            poster={siteConfig.heroMedia.poster}
          >
            <source src={siteConfig.heroMedia.mp4} type="video/mp4" />
          </video>
        </motion.div>

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `
              linear-gradient(180deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.50) 100%),
              radial-gradient(50% 50% at 50% 35%, rgba(246,214,229,0.18) 0%, transparent 70%)
            `,
          }}
        />

        {/* Soft blush-pink radial glow from center */}
        <motion.div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={
            prefersReducedMotion
              ? { opacity: 0.35 }
              : { opacity: overlayOpacity }
          }
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 40% at 50% 45%, rgba(246,214,229,0.25) 0%, transparent 65%)",
              filter: "blur(30px)",
            }}
          />
        </motion.div>
      </div>

      {/* ─── Floating Decorative Bloom Particles ─── */}
      {BLOOM_PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute z-[2] rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            background:
              "radial-gradient(circle, rgba(246,214,229,0.5) 0%, transparent 70%)",
            filter: `blur(${p.blur}px)`,
          }}
          custom={i}
          variants={bloomParticleVariants}
          initial="initial"
          animate={prefersReducedMotion ? "initial" : "animate"}
        />
      ))}

      {/* ─── Main Content ─── */}
      <motion.div
        className="relative z-10 flex items-center justify-center min-h-[100svh] px-4 sm:px-6 lg:px-8"
        style={prefersReducedMotion ? {} : { y: contentParallaxY }}
      >
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        {/* Brand Name — mobile-first sizing */}
          <motion.h1
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.1em] sm:tracking-[0.15em] mb-4 sm:mb-6 text-blush-gradient leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
            variants={brandVariants}
          >
            {siteConfig.brandNameDisplay}
          </motion.h1>

          {/* Tagline — clip‑path reveal */}
          <motion.div
            className="overflow-hidden inline-block mb-3 sm:mb-4"
            variants={taglineRevealVariants}
            style={{ willChange: "clip-path" }}
          >
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white/95 font-light tracking-wide leading-snug sm:leading-normal">
              {siteConfig.taglineFa}
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-lg md:text-xl text-white/70 font-light tracking-wider mb-8 sm:mb-10"
            variants={subtitleVariants}
          >
            {siteConfig.ctaLabels.heroSubtitle}
          </motion.p>

          {/* ─── CTA Buttons — full-width on mobile, row on desktop ─── */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center w-full sm:w-auto px-2 sm:px-0"
            variants={containerVariants}
          >
            <MagneticButton
              href="#vitrine"
              className="blush-btn-secondary text-sm sm:text-base w-full sm:w-auto text-center"
              custom={0}
            >
              {siteConfig.ctaLabels.viewCollections}
            </MagneticButton>

            <MagneticButton
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="blush-btn-primary text-sm sm:text-base w-full sm:w-auto text-center"
              custom={1}
            >
              {siteConfig.ctaLabels.whatsapp}
            </MagneticButton>

            <MagneticButton
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="blush-btn-secondary text-sm sm:text-base w-full sm:w-auto text-center"
              custom={2}
            >
              {siteConfig.ctaLabels.instagram}
            </MagneticButton>

            <MagneticButton
              href={siteConfig.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="blush-btn-secondary text-sm sm:text-base w-full sm:w-auto text-center"
              custom={3}
            >
              {siteConfig.ctaLabels.website}
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ─── Scroll‑Down Indicator ─── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase text-center font-light">
          اسکرول
        </span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={chevronBounce}
          animate={prefersReducedMotion ? undefined : "animate"}
          style={{ opacity: 0.6 }}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="rgba(246,214,229,0.8)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default Hero;