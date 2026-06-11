import React, { useEffect, useRef, useState } from "react";

interface CinematicBloomProps {
  className?: string;
}

const CinematicBloom: React.FC<CinematicBloomProps> = ({ className = "" }) => {
  const heroRef = useRef<HTMLElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const poster = document.createElement("link");
    poster.rel = "preload";
    poster.as = "image";
    poster.href = "/hero.webp";
    document.head.appendChild(poster);

    const videoWebm = document.createElement("link");
    videoWebm.rel = "preload";
    videoWebm.as = "video";
    videoWebm.href = "/media/hero.webm";
    videoWebm.type = "video/webm";
    document.head.appendChild(videoWebm);

    const videoMp4 = document.createElement("link");
    videoMp4.rel = "preload";
    videoMp4.as = "video";
    videoMp4.href = "/media/hero.mp4";
    videoMp4.type = "video/mp4";
    document.head.appendChild(videoMp4);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    // Parallax effect
    const handleScroll = () => {
      if (prefersReducedMotion) return;
      
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      setParallaxOffset(rate);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-[100svh] overflow-hidden bg-pink-100 ${className}`}
      aria-label="Blush — Cinematic Bloom Hero"
    >
      {/* Preload hero image */}
      <link rel="preload" as="image" href="/hero.webp" />
      
      {/* Background Video with poster fallback */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero.webp"
          style={{ 
            transform: prefersReducedMotion ? 'none' : `translateY(${parallaxOffset}px)`,
            transition: prefersReducedMotion ? 'none' : 'transform 0.1s ease-out'
          }}
        >
          <source src="/media/hero.webm" type="video/webm" />
          <source src="/media/hero.mp4" type="video/mp4" />
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
            Blush
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Daily Vitrine & Bespoke Pieces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#daily-vitrine"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
            >
              View Collections
            </a>
            <a
              href="https://wa.me/989900190067"
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-white hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicBloom;
