export default function HeroSection(){
  return (
    <section className="relative h-[100svh] overflow-hidden bg-[#0b0b0b]" aria-label="Blush — Cinematic Bloom Hero">
      {/* BG blur fill (covers the frame) */}
      <video
        className="absolute inset-0 w-full h-full object-cover filter blur-[12px] saturate-[1.1] brightness-[.9] scale-[1.05]"
        autoPlay muted loop playsInline
      >
        <source src="/blush_macro_1080.mp4" type="video/mp4" media="(min-width:1024px)" />
        <source src="/blush_macro_720.mp4"  type="video/mp4" media="(max-width:1023px)" />
      </video>

      {/* Foreground video (keeps original aspect) */}
      <video
        className="absolute inset-0 m-auto max-w-full max-h-full w-auto h-full object-contain"
        autoPlay muted loop playsInline
        poster="/blush_poster.jpg"
      >
        <source src="/blush_macro_1080.mp4" type="video/mp4" media="(min-width:1024px)" />
        <source src="/blush_macro_720.mp4"  type="video/mp4" media="(max-width:1023px)" />
      </video>

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
          <a href="#shop"
             className="relative inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold
                        bg-gradient-to-br from-yellow-400 to-amber-600 text-white
                        shadow-[0_10px_30px_rgba(212,175,55,0.45)]
                        hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(212,175,55,0.6)]
                        transition-[transform,box-shadow] duration-300">
            Shop Now
          </a>
          <a href="https://wa.me/989900190067"
             className="inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold
                        border border-amber-500/60 text-amber-200/95 bg-white/10 backdrop-blur
                        hover:bg-white/20 transition-colors duration-300">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
