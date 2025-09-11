import React from 'react';
import { openWhatsApp } from '../utils/whatsapp';

const FinalCTA: React.FC = () => {
  const handleWhatsAppClick = () => {
    openWhatsApp('989900190067', 'سلام! می‌خوام درباره محصولات Blush اطلاعات بیشتری داشته باشم');
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blush-50 to-white">
      <div className="container-custom section-padding">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Ready to Experience Blush?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Let's create something beautiful together. Get in touch with our floral experts today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-gold-400 to-gold-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:from-gold-500 hover:to-gold-600 hover:shadow-lg hover:shadow-gold-200/50 hover:scale-105 transform"
              aria-label="Chat with us on WhatsApp"
            >
              Chat on WhatsApp
            </button>
            <a 
              href="#daily-vitrine"
              className="border border-gold-400 text-gold-600 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-gold-50 hover:border-gold-500"
              aria-label="View our daily vitrine collection"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
