import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import Services from './components/Services'
import DailyVitrineGallery from './components/DailyVitrineGallery'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="cursor-dot"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />

      {/* Main Content */}
      <div className="min-h-screen bg-[#faf6f5] overflow-hidden">
        <Hero />
        <div className="section-divider mx-auto max-w-4xl" />
        <BrandStory />
        <Services />
        <DailyVitrineGallery />
        <FinalCTA />
        <Footer />
      </div>
    </>
  )
}

export default App