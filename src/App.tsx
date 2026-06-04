import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import Services from './components/Services'
import DailyVitrineGallery from './components/DailyVitrineGallery'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

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
      {/* Custom Cursor */}
      <div
        className={`cursor-dot${isHovering ? ' hovering' : ''}`}
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