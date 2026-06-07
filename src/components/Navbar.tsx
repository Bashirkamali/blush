import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { siteConfig, whatsappUrl } from "../config/site";

/* ─── Navigation Links ─── */

const navLinks = [
  { label: "ویترین", href: "#vitrine" },
  { label: "خدمات", href: "#services" },
  { label: "داستان بلاش", href: "#story" },
  { label: "تماس", href: "#contact" },
];

/* ─── Navbar Component ─── */

const Navbar: React.FC = () => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  /* Scroll progress bar */
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  /* ─── Scroll listener for show/hide threshold ─── */
  useEffect(() => {
    const threshold = typeof window !== "undefined" ? window.innerHeight * 0.85 : 500;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > threshold && !scrolledPastHero) {
        setScrolledPastHero(true);
      } else if (scrollY <= threshold && scrolledPastHero) {
        setScrolledPastHero(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledPastHero]);

  /* ─── Show nav with a small delay after crossing threshold ─── */
  useEffect(() => {
    if (scrolledPastHero) {
      const t = setTimeout(() => setIsVisible(true), 80);
      return () => clearTimeout(t);
    } else {
      setIsVisible(false);
      setMobileOpen(false);
    }
  }, [scrolledPastHero]);

  /* ─── Close mobile menu on resize ─── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ─── Smooth scroll handler ─── */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  /* ─── Prevent body scroll when mobile menu open ─── */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left"
        style={{
          scaleX: scaleY,
          background: "linear-gradient(90deg, #f6d6e5, #c9a96e, #f6d6e5)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* ── Navbar ── */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            dir="rtl"
            key="navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 h-16 md:h-18 navbar-blur"
          >
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-8">
              {/* ── Brand Logo (right in RTL) ── */}
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, "#hero")}
                className="flex items-center gap-2 text-xl font-bold tracking-wider text-[#c9a96e] hover:text-[#d4b87a] transition-colors no-underline"
              >
                <span className="font-serif">{siteConfig.brandNameDisplay}</span>
              </a>

              {/* ── Desktop Nav Links ── */}
              <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="relative text-sm font-medium text-gray-700 hover:text-[#c9a96e] transition-colors no-underline tracking-wide after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#f6d6e5] after:to-[#c9a96e] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* ── WhatsApp CTA Button ── */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f6d6e5] to-[#c9a96e] px-5 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 no-underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>گفتگو در واتساپ</span>
              </a>

              {/* ── Mobile Hamburger ── */}
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="md:hidden relative z-[70] flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm shadow-sm border-none cursor-pointer"
                aria-label={mobileOpen ? "بستن منو" : "باز کردن منو"}
              >
                <div className="flex flex-col items-center justify-center gap-[5px]">
                  <motion.span
                    animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    className="block h-[2px] w-5 rounded-full bg-[#c9a96e]"
                  />
                  <motion.span
                    animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="block h-[2px] w-5 rounded-full bg-[#c9a96e]"
                  />
                  <motion.span
                    animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    className="block h-[2px] w-5 rounded-full bg-[#c9a96e]"
                  />
                </div>
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ── Mobile Slide-In Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[45] bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Slide-in panel (right side — aligns with RTL) */}
            <motion.aside
              key="mobile-panel"
              dir="rtl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 z-[55] w-[75vw] max-w-xs bg-white/95 backdrop-blur-xl shadow-2xl md:hidden flex flex-col"
            >
              {/* Close button */}
              <div className="flex items-center justify-start p-4 border-b border-[#f6d6e5]/30">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f6d6e5]/30 hover:bg-[#f6d6e5]/50 transition-colors border-none cursor-pointer"
                  aria-label="بستن منو"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#c9a96e]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="flex flex-col gap-2 list-none m-0 p-0">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="block rounded-xl px-4 py-3 text-lg font-medium text-gray-800 hover:text-[#c9a96e] hover:bg-[#f6d6e5]/20 transition-all no-underline"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile WhatsApp CTA */}
              <div className="p-6 border-t border-[#f6d6e5]/30">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#f6d6e5] to-[#c9a96e] px-6 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 no-underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>گفتگو در واتساپ</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;