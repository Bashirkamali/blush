import React, { useRef, useEffect, useState } from 'react';
import { openWhatsApp } from '../utils/whatsapp';

interface CinematicBloomProps {
  className?: string;
}

const CinematicBloom: React.FC<CinematicBloomProps> = ({ className = '' }) => {
  const heroRef = useRef<HTMLElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

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
    videoWebm.type = "video/webm" as any;
    document.head.appendChild(videoWebm);

    const videoMp4 = document.createElement("link");
    videoMp4.rel = "preload";
    videoMp4.as = "video";
    videoMp4.href = "/media/hero.mp4";
    videoMp4.type = "video/mp4" as any;
    document.head.appendChild(videoMp4);
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleReducedMotion = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleReducedMotion);

    // Parallax effect (only if motion is not reduced)
    const handleScroll = () => {
      if (!prefersReducedMotion && heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        setParallaxOffset(Math.min(rate, 2)); // Limit to 2px for mobile
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', handleReducedMotion);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prefersReducedMotion]);

  const handleWhatsAppClick = () => {
    openWhatsApp('989900190067', 'سلام! می‌خوام درباره محصولات Blush اطلاعات بیشتری داشته باشم');
  };

  const handleScrollToVitrine = () => {
    const vitrineSection = document.getElementById('daily-vitrine');
    if (vitrineSection) {
      vitrineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

      {/* Bloom Effect Overlay */}
      <div 
        className={`absolute inset-0 pointer-events-none ${
          prefersReducedMotion ? 'reduce-anim' : ''
        }`}
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(246,214,229,0.3), transparent 70%)',
          filter: 'blur(10px)',
          opacity: 0.5
        }}
      />
      
      {/* Desktop Bloom Effect */}
      <div 
        className={`absolute inset-0 pointer-events-none hidden md:block ${
          prefersReducedMotion ? 'reduce-anim' : ''
        }`}
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(246,214,229,0.4), transparent 70%)',
          filter: 'blur(22px)',
          opacity: 0.4
        }}
      />

      {/* Centered Luxury Logo */}
      <div className="absolute inset-0 z-20 flex items-start justify-center pt-6 md:pt-10">
        <div className="relative">
          <div className="absolute -inset-4 md:-inset-5 rounded-full blur-2xl opacity-70"
               style={{
                 background: 'radial-gradient(circle, rgba(255,215,0,0.25) 0%, rgba(255,215,0,0.12) 45%, rgba(255,215,0,0) 70%)'
               }}
          />
          <img 
            src="/logo.svg" 
            alt="THE BLUSH FLOWER STUDIO" 
            className="relative w-16 md:w-24 lg:w-28 h-auto drop-shadow-[0_8px_26px_rgba(212,175,55,0.45)]"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[100svh] px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-serif text-gray-800 leading-tight drop-shadow-[0_6px_24px_rgba(255,255,255,.5)] mb-4 md:mb-6"
              style={{ 
                fontSize: 'clamp(28px, 6vw, 48px)',
                maxWidth: '16ch',
                margin: '0 auto 1rem auto'
              }}>
            Blush — A Luxurious Floral Experience
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-700 mb-6 md:mb-8 leading-relaxed"
             style={{ 
               fontSize: 'clamp(14px, 3.6vw, 16px)',
               maxWidth: '32ch',
               margin: '0 auto 1.5rem auto'
             }}>
            Minimal & luxurious daily arrangements • Everlasting collections
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <button 
              type="button"
              onClick={handleWhatsAppClick}
              className="btn-primary"
              aria-label="Chat with us on WhatsApp"
            >
              Chat on WhatsApp
            </button>
            
            <button
              type="button"
              onClick={handleScrollToVitrine}
              className="btn-secondary"
              aria-label="View our daily vitrine collection"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay for better text readability */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%)'
        }}
      />
    </section>
  );
};

export default CinematicBloom;
