import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { siteConfig, whatsappUrl } from "../config/site";
import { items } from "../data/vitrineItems";

/* ---------- inline SVG icons for the CTAs ---------- */
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const IconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

/* ---------- container variants for staggered animation ---------- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const DailyVitrineGallery: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const displayItems = items;

  /* ---------- lightbox keyboard / focus trap ---------- */
  useEffect(() => {
    if (active === null) return;

    const lb = lightboxRef.current;
    const focusable = lb?.querySelectorAll<HTMLElement>(
      'button, a, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
        return;
      }
      if (e.key === "ArrowLeft") {
        setActive((i) => (i !== null ? (i > 0 ? i - 1 : displayItems.length - 1) : null));
        e.preventDefault();
        return;
      }
      if (e.key === "ArrowRight") {
        setActive((i) => (i !== null ? (i < displayItems.length - 1 ? i + 1 : 0) : null));
        e.preventDefault();
        return;
      }
      /* focus trap */
      if (e.key === "Tab" && focusable && focusable.length > 0) {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    closeBtnRef.current?.focus();
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, displayItems.length]);

  return (
    <section id="daily-vitrine" className="relative px-4 py-16 lg:py-24 overflow-hidden">
      {/* subtle background glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[80vw] max-w-3xl rounded-full opacity-20"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, #f6d6e5 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        {/* ---- heading ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-blush-gradient mb-3">
            ویترین روزانه بلاش
          </h2>
          {/* elegant gradient line */}
          <div className="mx-auto mb-4 h-[2px] w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, #f6d6e5, #c9a96e, #f6d6e5, transparent)" }}
          />
          <p className="text-gray-500 text-sm md:text-base tracking-wide">
            هر روز تازه‌ترین گل‌های بلاش
          </p>
        </motion.div>

        {/* ---- image grid ---- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {displayItems.map((it, idx) => (
            <motion.div key={idx} variants={cardVariants} className="group">
              <button
                type="button"
                onClick={() => setActive(idx)}
                className="relative block w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blush-pink focus-visible:ring-offset-2"
                style={{ aspectRatio: "4/5" }}
                aria-label={it.alt || "View image"}
              >
                <img
                  src={it.src}
                  alt={it.alt || ""}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* blush bloom overlay on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(50% 50% at 50% 50%, rgba(246,214,229,0.45), transparent 70%)",
                    mixBlendMode: "overlay",
                  }}
                />
                {/* caption overlay at bottom with gradient */}
                {(it.caption || it.price) && (
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 pt-8 bg-gradient-to-t from-black/50 via-black/20 to-transparent">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-white text-sm md:text-base font-medium truncate">
                        {it.caption}
                      </span>
                      {it.price && (
                        <span className="shrink-0 rounded-full bg-white/90 text-gray-900 px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm">
                          {it.price}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* ---- 4 quick-icon CTAs (glassmorphism row) ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-3 md:gap-5"
        >
          {[
            { href: whatsappUrl, label: "واتساپ", icon: <IconWhatsApp />, color: "#25D366" },
            { href: siteConfig.instagramUrl, label: "اینستاگرام", icon: <IconInstagram />, color: "#E4405F" },
            { href: siteConfig.websiteUrl, label: "وبسایت", icon: <IconGlobe />, color: "#f6d6e5" },
            { href: `tel:${siteConfig.phoneNumber}`, label: "تماس", icon: <IconPhone />, color: "#4A90D9" },
          ].map(({ href, label, icon, color }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("tel:") ? undefined : "_blank"}
              rel={href.startsWith("tel:") ? undefined : "noopener noreferrer"}
              className="group relative flex flex-col items-center gap-1.5 rounded-2xl px-5 py-3 md:px-7 md:py-4 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush-pink"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
              }}
            >
              {/* subtle glow on hover */}
              <span
                aria-hidden
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(50% 80% at 50% 50%, ${color}15, transparent)`,
                }}
              />
              <span className="relative z-10 text-white/80 group-hover:text-white transition-colors duration-300">
                {icon}
              </span>
              <span className="relative z-10 text-[10px] md:text-xs text-white/60 group-hover:text-white/90 transition-colors duration-300 whitespace-nowrap">
                {label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* ==================== LIGHTBOX ==================== */}
      {active !== null && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={displayItems[active]?.caption || "نمایش تصویر"}
        >
          <div
            className="relative flex flex-col items-center max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close button — circle with X, top-right */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 md:-top-14 md:right-0 z-10 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush-pink"
              aria-label="بستن"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4 md:w-5 md:h-5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* prev arrow */}
            <button
              type="button"
              onClick={() =>
                setActive((i) => (i !== null ? (i > 0 ? i - 1 : displayItems.length - 1) : null))
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush-pink"
              aria-label="قبلی"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4 md:w-6 md:h-6">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* next arrow */}
            <button
              type="button"
              onClick={() =>
                setActive((i) => (i !== null ? (i < displayItems.length - 1 ? i + 1 : 0) : null))
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush-pink"
              aria-label="بعدی"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4 md:w-6 md:h-6">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* image */}
            <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
              <motion.img
                key={active}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                src={displayItems[active]?.src}
                alt={displayItems[active]?.alt || ""}
                className="w-full h-auto object-contain"
                style={{ aspectRatio: "4/5" }}
              />
            </div>

            {/* caption + price bar */}
            <div className="mt-4 flex items-center justify-between w-full gap-4">
              <span className="text-white/90 text-sm md:text-base truncate">
                {displayItems[active]?.caption}
              </span>
              <div className="flex items-center gap-3 shrink-0">
                {displayItems[active]?.price && (
                  <span className="rounded-full bg-blush-pink/20 backdrop-blur-sm text-blush-pink px-3 py-1 text-xs md:text-sm font-semibold border border-blush-pink/30">
                    {displayItems[active].price}
                  </span>
                )}
                {displayItems[active]?.href && (
                  <a
                    href={displayItems[active].href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs md:text-sm text-white/80 hover:text-white underline underline-offset-4 transition-colors"
                  >
                    مشاهده جزئیات
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DailyVitrineGallery;
