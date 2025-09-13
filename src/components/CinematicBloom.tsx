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
    // Preload hero video for better performance
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "video";
    link.href = "/media/hero.mp4";
    document.head.appendChild(link);
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
      <link rel="preload" as="image" href="/blush_poster.jpg" />
      
      {/* Background Video with poster fallback */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          poster="/blush_poster.jpg"
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

      {/* Logo */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
        <img 
          src="/logo.svg" 
          alt="THE BLUSH FLOWER STUDIO" 
          className="w-24 h-auto md:w-40 lg:w-48 drop-shadow-[0_4px_20px_rgba(255,215,0,0.3)]"
          loading="lazy"
          decoding="async"
        />
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
