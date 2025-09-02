import React, { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import DailyVitrineGallery from './components/DailyVitrineGallery'
import FeaturedProducts from './components/FeaturedProducts'
import TestimonialsSection from './components/TestimonialsSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'
import { items as vitrineItems } from './data/vitrineItems'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading time for smooth animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      <HeroSection />
      <AboutSection />
      <DailyVitrineGallery items={vitrineItems} />
      <FeaturedProducts />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}

export default App

