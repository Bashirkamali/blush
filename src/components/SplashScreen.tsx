import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── SplashScreen ───
 *
 * Elegant loading screen shown once per session.
 * Displays "BLUSH" with animated blush-to-gold gradient text
 * and a subtle loading bar. Fades out after assets load or 2.5s.
 */

const SPLASH_KEY = "blush_splash_seen";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as import("framer-motion").Easing },
  },
};

const brandVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const barVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.3,
    },
  },
};

const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // If already seen this session, skip immediately
    if (sessionStorage.getItem(SPLASH_KEY)) {
      setVisible(false);
      return;
    }

    // Mark as seen
    sessionStorage.setItem(SPLASH_KEY, "1");

    let timeoutId: ReturnType<typeof setTimeout>;
    let loadFired = false;

    const onLoad = () => {
      loadFired = true;
      // Small delay so the animation has time to breathe
      timeoutId = setTimeout(() => setVisible(false), 400);
    };

    // Fallback timeout — hide after 2.5s regardless
    const fallbackTimeout = setTimeout(() => {
      if (!loadFired) setVisible(false);
    }, 2500);

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(timeoutId);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0806]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* ─── Brand Name ─── */}
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              background:
                "linear-gradient(135deg, #f6d6e5 0%, #c9a96e 50%, #f6d6e5 100%)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradient-shift 3s ease-in-out infinite",
            }}
            variants={brandVariants}
          >
            BLUSH
          </motion.h1>

          {/* ─── Loading Bar ─── */}
          <div className="mt-8 w-32 sm:w-40 h-[2px] overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full origin-left rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #f6d6e5 0%, #c9a96e 50%, #f6d6e5 100%)",
              }}
              variants={barVariants}
              initial="hidden"
              animate="visible"
            />
          </div>

          {/* ─── Keyframes injected once ─── */}
          <style>{`
            @keyframes gradient-shift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;