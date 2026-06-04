import React from "react";
import { motion } from "framer-motion";
import { siteConfig, whatsappUrl } from "../config/site";

/* ─── Inline SVG Icons ─── */

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Framer Motion Variants ─── */

const easeOut = [0.16, 1, 0.3, 1] as const;

const colVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut, delay: 0.2 + i * 0.15 },
  }),
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeOut, delay: 0.4 + i * 0.08 },
  }),
};

const copyrightVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.8 },
  },
};

/* ─── Data ─── */

const quickLinks = [
  { label: "ویترین", href: "#daily-vitrine" },
  { label: "واتساپ", href: whatsappUrl, external: true },
  { label: "اینستاگرام", href: siteConfig.instagramUrl, external: true },
  { label: "وبسایت", href: siteConfig.websiteUrl, external: true },
];

const socialLinks = [
  { label: "اینستاگرام", href: siteConfig.instagramUrl, icon: <IconInstagram /> },
  { label: "واتساپ", href: whatsappUrl, icon: <IconWhatsApp /> },
];

/* ─── Component ─── */

const Footer: React.FC = () => {
  return (
    <footer
      className="relative overflow-hidden bg-[#1a1a2e] text-white/80"
      dir="rtl"
      aria-label="Footer"
    >
      {/* Subtle top accent line */}
      <div
        className="h-[1px] w-full opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, #f6d6e5 20%, #c9a96e 50%, #f6d6e5 80%, transparent)",
        }}
      />

      {/* ─── Main Grid ─── */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* ── Column 1: Brand ── */}
          <motion.div
            custom={0}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-5"
          >
            <h3
              className="font-serif text-xl font-light tracking-[0.12em] text-white md:text-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {siteConfig.brandNameDisplay}
            </h3>

            <p className="text-sm leading-7 text-white/60 md:text-base md:leading-8">
              استودیوی گل‌آرایی لوکس در شیراز. هر دسته گل بلاش، با عشق و وسواس برای تو طراحی
              می‌شود.
            </p>

            {/* Social icons */}
            <div className="mt-1 flex gap-3">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/50 transition-colors duration-300 hover:border-[#f6d6e5]/50 hover:text-[#f6d6e5]"
                  custom={i}
                  variants={linkVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Column 2: Quick Links ── */}
          <motion.div
            custom={1}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-5"
          >
            <h4 className="font-serif text-lg font-light tracking-wide text-white md:text-xl">
              دسترسی سریع
            </h4>

            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  custom={i}
                  variants={linkVariants}
                >
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="inline-block text-sm text-white/50 transition-colors duration-300 hover:text-[#f6d6e5] md:text-base"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── Column 3: Contact ── */}
          <motion.div
            custom={2}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-5"
          >
            <h4 className="font-serif text-lg font-light tracking-wide text-white md:text-xl">
              تماس
            </h4>

            <div className="flex flex-col gap-3 text-sm text-white/50 md:text-base">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-[#25D366]"
              >
                {siteConfig.ctaLabels.whatsapp}
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-[#f6d6e5]"
              >
                {siteConfig.ctaLabels.instagram}
              </a>

              <a
                href={siteConfig.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-white/80"
              >
                {siteConfig.ctaLabels.website}
              </a>

              <span className="text-white/40">{siteConfig.phoneNumber}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <motion.div
        variants={copyrightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border-t border-white/10 px-4 py-5 text-center"
      >
        <p className="text-xs text-white/35 md:text-sm">
          &copy; ۱۴۰۴ {siteConfig.brandNameFa}. همه حقوق محفوظ است.
        </p>
      </motion.div>

      {/* Decorative subtle glow */}
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-full -translate-x-1/2 opacity-[0.04]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #f6d6e5 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden
      />
    </footer>
  );
};

export default Footer;
