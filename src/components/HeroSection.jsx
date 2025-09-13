import React, { useRef, useEffect, useState } from 'react';
import { openWhatsApp } from '../utils/whatsapp';

export default function HeroSection(){
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleReducedMotion = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleReducedMotion);

    // Parallax effect
    const handleScroll = () => {
      if (!prefersReducedMotion && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        setParallaxOffset(Math.min(rate, 4)); // Limit to 4px
      }
    };

    // Intersection Observer for video play/pause
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoVisible(entry.isIntersecting);
        if (videoRef.current) {
          if (entry.isIntersecting && !prefersReducedMotion) {
            videoRef.current.play().catch(() => {
              // Autoplay blocked, continue silently
            });
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      mediaQuery.removeEventListener('change', handleReducedMotion);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  return (
    <section ref={heroRef} className="relative h-[100svh] overflow-hidden bg-[#0b0b0b]" aria-label="Blush — Cinematic Bloom Hero">
      {/* Preload poster image */}
      <link rel="preload" as="image" href="/blush_poster.jpg" />
      
      {/* BG blur fill (covers the frame) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover filter blur-[20px] saturate-[1.1] brightness-[.9] scale-[1.05]"
        autoPlay={!prefersReducedMotion} muted loop playsInline
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <source src="/IMG_1993_720.mp4" type="video/mp4" />
      </video>

      {/* Foreground video (keeps original aspect) */}
      <video
        className="absolute inset-0 m-auto max-w-full max-h-full w-auto h-full object-contain"
        autoPlay={!prefersReducedMotion} muted loop playsInline
        poster="/blush_poster.jpg"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <source src="/IMG_1993_720.mp4" type="video/mp4" />
      </video>

      {/* Bloom effect overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(246,214,229,0.4), transparent 70%)',
          filter: 'blur(20px)',
          opacity: 0.4
        }}
      />

      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <img 
          src="/logo.svg" 
          alt="THE BLUSH FLOWER STUDIO" 
          className="w-32 h-auto md:w-40 lg:w-48 drop-shadow-[0_4px_20px_rgba(255,215,0,0.3)]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center"
           style={{ top: '50%', transform: 'translateY(-50%)' }}>
        <h1 className="font-serif text-white text-4xl md:text-6xl leading-tight drop-shadow-[0_6px_24px_rgba(0,0,0,.35)]">
          Blush — A Luxurious Floral Experience
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/85">
          Minimal & luxurious daily arrangements • Everlasting collections
        </p>

        <div className="mt-7 flex items-center justify-center gap-3">
          <button 
            type="button"
            onClick={() => openWhatsApp('989900190067', 'سلام! می‌خوام درباره محصولات Blush اطلاعات بیشتری داشته باشم')}
            className="relative inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold
                       bg-gradient-to-br from-yellow-400 to-amber-600 text-white
                       shadow-[0_10px_30px_rgba(212,175,55,0.45)]
                       hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(212,175,55,0.6)]
                       transition-[transform,box-shadow] duration-300">
            Chat on WhatsApp
          </button>
          <a href="#daily-vitrine"
             className="inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold
                        border border-amber-500/60 text-amber-200/95 bg-white/10 backdrop-blur
                        hover:bg-white/20 transition-colors duration-300">
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
