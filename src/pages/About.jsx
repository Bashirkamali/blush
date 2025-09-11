import React from 'react'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blush-50">
      <section className="py-20 lg:py-32">
        <div className="container-custom section-padding">
          <div 
            ref={ref}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
                  Experience the Art of Flowers
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full" />
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  At Blush, we believe that flowers are more than just beautiful arrangements—they are 
                  expressions of emotion, moments of beauty, and symbols of life's most precious occasions. 
                  Our master florists craft each piece with the precision of artists and the passion of poets.
                </p>
                
                <p>
                  From intimate bouquets to grand installations, every creation tells a story. We source 
                  only the finest seasonal blooms, ensuring that each arrangement is not just visually 
                  stunning, but also a testament to nature's perfect timing.
                </p>
                
                <p className="text-blush-600 font-medium">
                  Discover the difference that passion, artistry, and attention to detail can make in 
                  transforming ordinary moments into extraordinary memories.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Arrangements</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">5★</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80"
                  alt="Luxury flower arrangement"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-gold-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blush-300 rounded-full opacity-60 animate-float" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gold-300 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
