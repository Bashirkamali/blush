// src/components/DailyVitrineGallery.jsx
import { useState, useMemo, useEffect } from "react";

export default function DailyVitrineGallery({
  items = [],
  title = "Blush Daily Vitrine",
  eyebrow = "Daily Vitrine",
  ctaHref = "#featured",
  ctaLabel = "See more",
}) {
  const [active, setActive] = useState(null);
  const hasPrices = useMemo(() => items.some(i => i?.price), [items]);

  // ESC to close lightbox
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowLeft' && active !== null) setActive(i => (i > 0 ? i - 1 : items.length - 1));
      if (e.key === 'ArrowRight' && active !== null) setActive(i => (i < items.length - 1 ? i + 1 : 0));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, items.length]);

  return (
    <section id="daily-vitrine" className="py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="uppercase tracking-[.25em] text-gray-500 mb-2 text-right">{eyebrow}</p>
        <div className="flex items-end justify-between mb-6 gap-4">
          <h2 className="font-serif text-3xl md:text-4xl text-[#111827]">{title}</h2>
          <a
            href={ctaHref}
            className="shrink-0 rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {ctaLabel}
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-2 md:grid-cols-3">
          {items.map((it, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className="group relative overflow-hidden rounded-2xl shadow-soft text-left focus:outline-none focus:ring-2 focus:ring-offset-2"
              aria-label={it.alt || "View image"}
            >
              <img
                src={it.src}
                alt={it.alt || ""}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ aspectRatio: "4/5" }}
              />
              {/* Soft Bloom */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ filter: "blur(22px)", background: "radial-gradient(50% 50% at 50% 50%, rgba(246,214,229,0.35), transparent 70%)" }}
              />
              {(it.caption || it.price) && (
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/40 to-transparent text-white">
                  <div className="flex items-center justify-between gap-2">
                    <span className="line-clamp-1">{it.caption || "Blush"}</span>
                    {it.price && (
                      <span className="rounded-full bg-white/85 text-gray-900 px-2 py-0.5 text-xs">
                        {it.price}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActive(null)}
              className="absolute -top-10 right-0 text-white/90 hover:text-white focus:outline-none"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="overflow-hidden rounded-2xl bg-black/10">
              <img
                src={items[active]?.src}
                alt={items[active]?.alt || ""}
                className="w-full h-auto object-contain"
                style={{ aspectRatio: "4/5" }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-sm text-white/90">
              <div className="truncate">{items[active]?.caption || "Blush"}</div>
              <div className="flex items-center gap-3">
                {items[active]?.price && <span>{items[active].price}</span>}
                {items[active]?.href && (
                  <a
                    href={items[active].href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    View details
                  </a>
                )}
              </div>
            </div>

            {/* Nav */}
            <div className="mt-2 flex items-center justify-between text-white/80">
              <button
                onClick={() => setActive((i) => (i > 0 ? i - 1 : items.length - 1))}
                className="px-3 py-1 rounded hover:bg-white/10"
                aria-label="Previous"
              >
                ‹ Prev
              </button>
              <button
                onClick={() => setActive((i) => (i < items.length - 1 ? i + 1 : 0))}
                className="px-3 py-1 rounded hover:bg-white/10"
                aria-label="Next"
              >
                Next ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
