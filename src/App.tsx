import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import Services from "./components/Services";
import Process from "./components/Process";
import DailyVitrineGallery from "./components/DailyVitrineGallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-[#fbf8f6] text-[#21191d]">
        <section id="hero">
          <Hero />
        </section>
        <BrandStory />
        <Services />
        <Process />
        <DailyVitrineGallery />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
