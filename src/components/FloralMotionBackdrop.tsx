import { motion, useScroll, useTransform } from "framer-motion";
import scrollIllustration from "../assets/brand/illustrations/blush-floral-line-branded-mask-v3.webp";
import goldWordmarks from "../assets/brand/illustrations/blush-ribbon-branding-gold-mask-v2.webp";

const deepInk = {
  paint: "#342a2e",
  opacity: [0.1, 0.205, 0.17, 0.06],
} as const;

const FloralMotionBackdrop = () => {
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const { scrollYProgress } = useScroll();
  const clipPath = useTransform(
    scrollYProgress,
    isDesktop ? [0, 0.16, 0.38] : [0, 0.08, 0.22],
    isDesktop
      ? ["inset(0 0 58% 0)", "inset(0 0 20% 0)", "inset(0 0 0% 0)"]
      : ["inset(0 0 42% 0)", "inset(0 0 10% 0)", "inset(0 0 0% 0)"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.78, 1],
    isDesktop ? [...deepInk.opacity] : deepInk.opacity.map((value) => Math.min(value * 1.18, 0.3))
  );
  const goldOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.78, 1],
    isDesktop ? [0.38, 0.62, 0.55, 0.22] : [0.42, 0.68, 0.6, 0.26]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? ["-7vh", "-142vh"] : ["0vh", "-4vh"]
  );

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[15] h-screen w-screen max-w-none [mask-position:center_top] [mask-repeat:no-repeat] [mask-size:115%_auto] mix-blend-multiply md:h-[150vw] md:[mask-position:center] md:[mask-size:contain]"
        style={{
          background: deepInk.paint,
          clipPath,
          maskImage: `url(${scrollIllustration})`,
          WebkitMaskImage: `url(${scrollIllustration})`,
          opacity,
          y,
        }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[16] h-screen w-screen max-w-none [mask-position:center_top] [mask-repeat:no-repeat] [mask-size:115%_auto] mix-blend-multiply md:h-[150vw] md:[mask-position:center] md:[mask-size:contain]"
        style={{
          background: "#c0a16e",
          clipPath,
          maskImage: `url(${goldWordmarks})`,
          WebkitMaskImage: `url(${goldWordmarks})`,
          opacity: goldOpacity,
          y,
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default FloralMotionBackdrop;
