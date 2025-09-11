import React, { useEffect, useState } from 'react';
import CinematicBloom from './components/CinematicBloom';
import DailyVitrineGallery from './components/DailyVitrineGallery';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { items as vitrineItems } from './data/vitrineItems';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Simulate loading time for smooth animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      <CinematicBloom />
      <DailyVitrineGallery items={vitrineItems} />
      <TestimonialsSection compact />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
