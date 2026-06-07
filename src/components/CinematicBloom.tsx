import React, { useEffect, useRef, useState } from "react";
import { siteConfig, whatsappUrl } from "../config/site";

interface CinematicBloomProps {
  className?: string;
}

const CinematicBloom: React.FC<CinematicBloomProps> = ({ className = "" }) => {
  const heroRef = useRef<HTMLElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    // Parallax effect with requestAnimationFrame (no setState on every scroll)
    let lastScrollY = window.pageYOffset;
    const handleScroll = () => {
      if (prefersReducedMotion) return;
      lastScrollY = window.pageYOffset;
      if (rafRef.current) return; // throttle: only one RAF pending
      rafRef.current = requestAnimationFrame(() => {
        const rate = lastScrollY * -0.5;
        setParallaxOffset(rate);
        rafRef.current = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeEventListener('change', handleMotionChange);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-[100svh] overflow-hidden bg-pink-100 ${className}`}
      aria-label={`${siteConfig.brandNameDisplay} — Cinematic Bloom Hero`}
    >
      {/* Background Video with poster fallback */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline
          poster={siteConfig.heroMedia.poster}
          style={{ 
            transform: prefersReducedMotion ? 'none' : `translateY(${parallaxOffset}px)`,
            transition: prefersReducedMotion ? 'none' : 'transform 0.1s ease-out'
          }}
        >
          <source src={siteConfig.heroMedia.mp4} type="video/mp4" />
        </video>
      </div>

      {/* Bloom Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(246,214,229,0.4), transparent 70%)',
          filter: 'blur(20px)',
          opacity: 0.4
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[100svh] px-4">
          <div className="text-center max-w-4xl">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6">
              {siteConfig.brandNameDisplay}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              ویترین روزانه و گل‌آرایی اختصاصی
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="#daily-vitrine"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                {siteConfig.ctaLabels.viewCollections}
              </a>
              <a
                href={whatsappUrl}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-white hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
              >
                {siteConfig.ctaLabels.whatsapp}
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                {siteConfig.ctaLabels.instagram}
              </a>
              <a
                href={siteConfig.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                {siteConfig.ctaLabels.website}
              </a>
            </div>
          </div>
        </div>
    </section>
  );
};

export default CinematicBloom;
