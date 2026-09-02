import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import scrollIllustration from "../assets/brand/illustrations/blush-floral-line-branded-mask-v3.webp";
import goldWordmarks from "../assets/brand/illustrations/blush-ribbon-branding-gold-mask-v2.webp";
import desktopIllustration from "../assets/brand/illustrations/blush-floral-line-minimal-spaced-v5.png";

const deepInk = {
  paint: "#342a2e",
  opacity: [0.1, 0.205, 0.17, 0.06],
} as const;

const mobileBackdropClassName =
  "pointer-events-none fixed left-0 top-0 h-screen w-screen max-w-none [mask-position:center_top] [mask-repeat:no-repeat] [mask-size:115%_auto] mix-blend-multiply md:hidden";

const desktopBackdropClassName =
  "pointer-events-none fixed left-1/2 top-0 hidden aspect-[2/3] w-[clamp(44rem,92dvh,50rem)] max-w-[82vw] bg-contain bg-center bg-no-repeat mix-blend-multiply md:block";

const useDesktopViewport = () => {
  const [isDesktop, setIsDesktop] = useState(() =>
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const updateViewport = (event: MediaQueryListEvent) => setIsDesktop(event.matches);

    setIsDesktop(query.matches);
    query.addEventListener("change", updateViewport);
    return () => query.removeEventListener("change", updateViewport);
  }, []);

  return isDesktop;
};

const FloralMotionBackdrop = () => {
  const isDesktop = useDesktopViewport();
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const clipPath = useTransform(
    scrollYProgress,
    isDesktop ? [0, 0.16, 0.38] : [0, 0.08, 0.22],
    isDesktop
      ? ["inset(0 0 0% 0)", "inset(0 0 0% 0)", "inset(0 0 0% 0)"]
      : ["inset(0 0 42% 0)", "inset(0 0 10% 0)", "inset(0 0 0% 0)"]
  );
  const opacity = useTransform(
    scrollYProgress,
    isDesktop ? [0, 0.08, 0.78, 1] : [0, 0.08, 0.96, 1],
    isDesktop
      ? [...deepInk.opacity]
      : [deepInk.opacity[0] * 1.18, deepInk.opacity[1] * 1.18, deepInk.opacity[2] * 1.18, 0]
  );
  const goldOpacity = useTransform(
    scrollYProgress,
    isDesktop ? [0, 0.08, 0.78, 1] : [0, 0.08, 0.96, 1],
    isDesktop ? [0.72, 0.98, 0.9, 0.55] : [0.56, 0.82, 0.74, 0]
  );
  const desktopOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.78, 1],
    [0.159, 0.291, 0.225, 0.079]
  );
  const mobileY = useTransform(
    scrollYProgress,
    [0, 0.96, 1],
    prefersReducedMotion ? ["0vh", "0vh", "0vh"] : ["-3vh", "-3vh", "-112vh"]
  );
  const desktopY = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    prefersReducedMotion
      ? ["0vh", "0vh", "0vh"]
      : ["0vh", "0vh", "calc(-100% + 100vh)"]
  );

  return (
    <>
      <motion.div
        className={`${mobileBackdropClassName} z-[15]`}
        style={{
          background: deepInk.paint,
          clipPath,
          maskImage: `url(${scrollIllustration})`,
          WebkitMaskImage: `url(${scrollIllustration})`,
          opacity,
          y: mobileY,
        }}
        aria-hidden="true"
      />
      <motion.div
        className={`${mobileBackdropClassName} z-[16]`}
        style={{
          background: "#c0a16e",
          clipPath,
          maskImage: `url(${goldWordmarks})`,
          WebkitMaskImage: `url(${goldWordmarks})`,
          opacity: goldOpacity,
          y: mobileY,
        }}
        aria-hidden="true"
      />
      <motion.div
        className={`${desktopBackdropClassName} z-[15]`}
        style={{
          backgroundImage: `url(${desktopIllustration})`,
          clipPath,
          opacity: desktopOpacity,
          x: "-50%",
          y: desktopY,
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default FloralMotionBackdrop;
