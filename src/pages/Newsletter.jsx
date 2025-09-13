import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blush-400 via-blush-500 to-blush-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gold-200 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <section className="py-20 lg:py-32 relative z-10">
        <div className="container-custom section-padding">
          <div 
            ref={ref}
            className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Stay in Bloom
            </h1>
            <p className="text-xl text-white/90 mb-2">
              Join Our Newsletter
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Be the first to discover our seasonal collections, exclusive offers, and floral inspiration delivered to your inbox.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-gold-400 focus:outline-none text-gray-900 placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-gold-400 to-gold-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:from-gold-500 hover:to-gold-600 hover:shadow-lg hover:shadow-gold-200/50 hover:scale-105 transform whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium animate-fade-in">
                Thank you for subscribing! 🌸
              </div>
            )}

            {/* Benefits */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white/90">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5 text-gold-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-sm">Exclusive Offers</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5 text-gold-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-sm">Seasonal Collections</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5 text-gold-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-sm">Floral Inspiration</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newsletter
