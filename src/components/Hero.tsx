import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig, whatsappUrl } from "../config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
};

const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);

  const videoSources = useMemo(() => {
    if (!siteConfig.heroVideo.enabled || prefersReducedMotion || videoFailed) {
      return [];
    }

    return [
      { src: siteConfig.heroVideo.mobile.webm, type: "video/webm", media: "(max-width: 767px)" },
      { src: siteConfig.heroVideo.mobile.mp4, type: "video/mp4", media: "(max-width: 767px)" },
      { src: siteConfig.heroVideo.desktop.webm, type: "video/webm" },
      { src: siteConfig.heroVideo.desktop.mp4, type: "video/mp4" },
    ].filter((source) => Boolean(source.src));
  }, [prefersReducedMotion, videoFailed]);

  const shouldRenderVideo = videoSources.length > 0;

  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#1f171b] px-5 pb-14 pt-24 text-white sm:px-8 lg:px-12"
      aria-label="Blush cinematic hero"
      dir="rtl"
    >
      <div className="absolute inset-0 -z-20 bg-[#eadfd9]">
        {shouldRenderVideo ? (
          <video
            className="h-full w-full object-cover"
            poster={siteConfig.heroVideo.poster}
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            aria-hidden="true"
            onError={() => setVideoFailed(true)}
          >
            {videoSources.map((source) => (
              <source key={`${source.media ?? "desktop"}-${source.type}`} src={source.src} type={source.type} media={source.media} />
            ))}
          </video>
        ) : (
          <img
            src={siteConfig.heroVideo.poster}
            alt={siteConfig.hero.imageAlt}
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        )}
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(25,17,21,0.78)_0%,rgba(25,17,21,0.56)_40%,rgba(25,17,21,0.20)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_32%,rgba(246,214,229,0.26),transparent_34%),linear-gradient(180deg,rgba(25,17,21,0.20)_0%,rgba(25,17,21,0.66)_100%)]" />

      <div className="mx-auto flex min-h-[calc(100svh-9.5rem)] max-w-7xl items-end">
        <motion.div
          className="w-full max-w-3xl pb-8 text-right md:pb-12"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-serif text-[clamp(4rem,13vw,11rem)] font-light leading-[0.85] tracking-[0.08em] text-white"
            dir="ltr"
            variants={fadeUp}
            custom={0.05}
          >
            {siteConfig.hero.title}
          </motion.h1>

          <motion.p
            className="mt-8 max-w-2xl text-3xl font-light leading-[1.75] text-white md:text-5xl md:leading-[1.5]"
            variants={fadeUp}
            custom={0.18}
          >
            {siteConfig.hero.subtitle}
          </motion.p>

          <motion.p
            className="mt-5 max-w-xl text-base leading-9 text-white/78 md:text-lg md:leading-10"
            variants={fadeUp}
            custom={0.3}
          >
            {siteConfig.hero.description}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            variants={fadeUp}
            custom={0.42}
          >
            <a className="btn-light w-full sm:w-auto" href={whatsappUrl} target="_blank" rel="noreferrer">
              {siteConfig.hero.primaryCta}
            </a>
            <a className="btn-outline-light w-full sm:w-auto" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
              {siteConfig.hero.secondaryCta}
            </a>
            <a className="btn-outline-light w-full sm:w-auto" href={siteConfig.websiteUrl} target="_blank" rel="noreferrer">
              {siteConfig.hero.tertiaryCta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
