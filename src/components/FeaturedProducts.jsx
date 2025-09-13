import React from 'react'
import { useInView } from 'react-intersection-observer'

const FeaturedProducts = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const products = [
    {
      id: 1,
      name: "Eternal Romance",
      description: "A timeless arrangement of deep red roses and white peonies",
      price: "$180 - $280",
      image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Romance"
    },
    {
      id: 2,
      name: "Spring Awakening",
      description: "Fresh tulips and daffodils in a modern ceramic vase",
      price: "$120 - $180",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Seasonal"
    },
    {
      id: 3,
      name: "Golden Hour",
      description: "Luxurious arrangement with golden roses and orchids",
      price: "$220 - $350",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
      category: "Luxury"
    },
    {
      id: 4,
      name: "Blush Dreams",
      description: "Soft pink peonies and garden roses in blush tones",
      price: "$160 - $240",
      image: "https://images.unsplash.com/photo-1589244159943-460088ed5c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Signature"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-custom section-padding">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Featured Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most beloved arrangements, each crafted with passion and precision
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-800 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  {/* Quick View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button type="button" className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-white transition-colors duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2 group-hover:text-blush-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gold-600">
                      {product.price}
                    </span>
                    <button type="button" className="text-blush-600 hover:text-blush-700 font-medium text-sm transition-colors duration-300">
                      Add to Cart →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button type="button" className="btn-primary">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts

