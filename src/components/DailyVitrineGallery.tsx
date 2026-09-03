import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig, whatsappUrl } from "../config/site";
import { items } from "../data/vitrineItems";

const DailyVitrineGallery = () => {
  const [active, setActive] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedItems = items.slice(0, 10);
  const closeGallery = useCallback(() => {
    const previous = active;
    setActive(null);
    window.requestAnimationFrame(() => {
      if (previous !== null) triggerRefs.current[previous]?.focus();
    });
  }, [active]);

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") {
        setActive((current) => (current === null ? null : (current + 1) % selectedItems.length));
      }
      if (event.key === "ArrowRight") {
        setActive((current) => (current === null ? null : current === 0 ? selectedItems.length - 1 : current - 1));
      }
    };

    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, closeGallery, selectedItems.length]);

  return (
    <section className="section-shell bg-[#fff5f7]" id="vitrine" dir="rtl" aria-label="ویترین منتخب بلاش">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="section-grid">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 lang="en" dir="ltr">{siteConfig.sectionHeadings.gallery}</h2>
            <p className="mt-6 max-w-sm text-sm leading-8 text-[#66575d]">
              {siteConfig.gallery.description}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a className="btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                {siteConfig.gallery.similarCta}
              </a>
              <a className="btn-secondary-dark" href={siteConfig.dailyVitrineUrl} target="_blank" rel="noreferrer">
                {siteConfig.ctaLabels.dailyVitrine}
              </a>
              <a className="btn-secondary-dark sm:col-span-2 lg:col-span-1" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
                {siteConfig.ctaLabels.instagram}
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {selectedItems.map((item, index) => (
              <motion.button
                ref={(node) => { triggerRefs.current[index] = node; }}
                key={item.src}
                type="button"
                className={`group relative overflow-hidden rounded-[2rem] bg-[#f7ecef] text-right shadow-[0_18px_55px_rgba(214,120,159,0.16)] outline-none focus-visible:ring-2 focus-visible:ring-[#c0a16e] ${
                  index === 0 ? "col-span-2 aspect-[16/11] md:col-span-2" : "aspect-[4/5]"
                }`}
                onClick={() => setActive(index)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.035 }}
                aria-label={`نمایش تصویر در اندازه بزرگ: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt || ""}
                  className="h-full w-full object-cover brightness-[1.05] contrast-[1.02] saturate-[1.12] transition duration-700 group-hover:scale-[1.035] group-hover:brightness-[1.08] group-hover:saturate-[1.18]"
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                />
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.18),transparent_42%,rgba(246,183,211,0.16))]" aria-hidden="true" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#1c1417]/88 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItems[active]?.alt}
          onClick={closeGallery}
        >
          <div className="relative w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
            <button
              ref={closeButtonRef}
              type="button"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
              onClick={closeGallery}
              aria-label="بستن"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            <img
              src={selectedItems[active]?.src}
              alt={selectedItems[active]?.alt || ""}
              className="max-h-[78svh] w-full bg-[#eadfd9] object-contain brightness-[1.04] contrast-[1.02] saturate-[1.12] shadow-2xl"
            />
            <div className="mt-4 flex items-center justify-between gap-4 text-sm text-white/90">
              <p className="truncate">تصویر {active + 1} از {selectedItems.length} — {selectedItems[active]?.caption}</p>
              <a className="shrink-0 underline underline-offset-8" href={whatsappUrl} target="_blank" rel="noreferrer">
                {siteConfig.gallery.similarCta}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DailyVitrineGallery;
