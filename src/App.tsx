import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import Services from './components/Services'
import Process from './components/Process'
import DailyVitrineGallery from './components/DailyVitrineGallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import SplashScreen from './components/SplashScreen'

/* ─── Reusable Section Divider ─── */
const SectionDivider = () => (
  <div className="relative h-24 md:h-32 overflow-hidden -mb-2">
    <svg
      className="absolute bottom-0 w-full h-full"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="wave-blush" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f6d6e5" stopOpacity="0" />
          <stop offset="30%" stopColor="#f6d6e5" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#c9a96e" stopOpacity="0.1" />
          <stop offset="70%" stopColor="#f6d6e5" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#f6d6e5" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
        fill="url(#wave-blush)"
      />
    </svg>
  </div>
)

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouch) {
      document.documentElement.style.cursor = 'auto'
      return
    }
    document.documentElement.style.cursor = 'none'

    const onMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY })

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setIsHovering(!!t.closest('a, button, [role="button"], input, select, textarea'))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.style.cursor = ''
    }
  }, [])

  return (
    <>
      {/* ─── Splash Screen (shown once per session) ─── */}
      <SplashScreen />

      {/* Scroll Progress Bar — inside Navbar component */}

      {/* Navbar — floating, appears on scroll */}
      <Navbar />

      {/* Custom Cursor Dot */}
      <div
        className={`cursor-dot${isHovering ? ' hovering' : ''}`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />

      {/* Custom Cursor Ring */}
      <div
        className={`cursor-ring${isHovering ? ' hovering' : ''}`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transition: 'left 0.15s ease-out, top 0.15s ease-out, width 0.3s, height 0.3s',
        }}
      />

      {/* Main Content */}
      <div className="min-h-screen bg-[#faf6f5] overflow-hidden page-enter">
        {/* ─── Section 1: Hero ─── */}
        <section id="hero">
          <Hero />
        </section>

        {/* ─── Section Divider ─── */}
        <SectionDivider />

        {/* ─── Section 2: Brand Story ─── */}
        <section id="story">
          <BrandStory />
        </section>

        {/* ─── Section Divider ─── */}
        <SectionDivider />

        {/* ─── Section 3: Services ─── */}
        <section id="services">
          <Services />
        </section>

        {/* ─── Section 4: How It Works (Process) ─── */}
        <section id="process">
          <Process />
        </section>

        {/* ─── Section Divider ─── */}
        <SectionDivider />

        {/* ─── Section 5: Daily Vitrine Gallery ─── */}
        <section id="vitrine">
          <DailyVitrineGallery />
        </section>

        {/* ─── Section 6: Testimonials ─── */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* ─── Section Divider ─── */}
        <SectionDivider />

        {/* ─── Section 7: FAQ ─── */}
        <section id="faq">
          <FAQ />
        </section>

        {/* ─── Section Divider ─── */}
        <SectionDivider />

        {/* ─── Section 8: Final CTA ─── */}
        <section id="contact">
          <FinalCTA />
        </section>

        {/* ─── Footer ─── */}
        <Footer />
      </div>

      {/* ─── Back to Top Button ─── */}
      <BackToTop />
    </>
  )
}

export default App