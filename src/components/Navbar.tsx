import { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { siteConfig, whatsappUrl } from "../config/site";

const navLinks = [
  { label: "چرا بلاش", href: "#brand-story" },
  { label: "تجربه‌ها", href: "#services" },
  { label: "ویترین", href: "#vitrine" },
  { label: "سفارش", href: "#process" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 28, restDelta: 0.001 });

  return (
    <>
      <motion.div className="fixed inset-x-0 top-0 z-[70] h-px origin-right bg-[#c0a16e]" style={{ scaleX }} />

      <header className="fixed inset-x-0 top-0 z-[60] px-4 pt-4 sm:px-6" dir="rtl">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between border border-white/[0.70] bg-white/[0.82] px-4 shadow-[0_12px_40px_rgba(67,42,50,0.08)] backdrop-blur-xl">
          <a className="font-serif text-xl tracking-[0.16em] text-[#21191d]" href="#hero" aria-label="Blush">
            {siteConfig.brandNameDisplay}
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} className="text-sm text-[#5f5056] transition hover:text-[#21191d]" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <a className="hidden rounded-full bg-[#21191d] px-5 py-2.5 text-sm text-white transition hover:bg-[#3a2a31] md:inline-flex" href={whatsappUrl} target="_blank" rel="noreferrer">
            {siteConfig.ctaLabels.whatsapp}
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-[#eadfd9] text-[#21191d] md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={mobileOpen}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 8h16M4 16h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-x-4 top-20 z-[55] border border-white/[0.70] bg-white/[0.95] p-5 shadow-2xl backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            dir="rtl"
          >
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="px-3 py-3 text-[#3a2a31]"
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a className="mt-2 rounded-full bg-[#21191d] px-5 py-3 text-center text-sm text-white" href={whatsappUrl} target="_blank" rel="noreferrer">
                {siteConfig.ctaLabels.whatsapp}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
