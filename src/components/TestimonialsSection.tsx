import React from 'react';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  occasion: string;
  rating: number;
}

interface TrustBadge {
  icon: string;
  text: string;
}

interface TestimonialsSectionProps {
  compact?: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ compact = false }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Blush transformed our wedding day into something truly magical.",
      author: "Sarah & Michael",
      occasion: "Wedding",
      rating: 5
    },
    {
      id: 2,
      quote: "Every time I receive flowers from Blush, I'm reminded of how beauty can brighten even the darkest days.",
      author: "Emily Chen",
      occasion: "Regular Customer",
      rating: 5
    },
    {
      id: 3,
      quote: "The attention to detail and the way they captured the essence of our brand was absolutely perfect.",
      author: "Jennifer Martinez",
      occasion: "Corporate Event",
      rating: 5
    }
  ];

  const trustBadges: TrustBadge[] = [
    { icon: "🌿", text: "Fresh Daily" },
    { icon: "🚚", text: "Same-Day Delivery" },
    { icon: "🎁", text: "Luxury Packaging" }
  ];

  if (compact) {
    return (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blush-50 to-white">
        <div className="container-custom section-padding">
          <div 
            ref={ref}
            className={`text-center mb-12 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
          </div>

          {/* Compact Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-1000 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-soft h-full">
                  <blockquote className="text-lg text-gray-700 italic font-serif mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-blush-600">{testimonial.occasion}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-600">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blush-50 to-white">
      <div className="container-custom section-padding">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who have experienced the magic of Blush
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 italic font-serif mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-blush-600">{testimonial.occasion}</div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-4 right-4 opacity-10">
                  <svg className="w-16 h-16 text-blush-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Fresh Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Same Day Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>100% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
