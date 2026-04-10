import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Navbar from './components/navbar';
import Hero from './components/Hero';
import SectionTomorrow from './components/SectionTomorrow';
import ProgressSection from './components/ProgressSection';
import OfferSection from './components/OfferSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

// Register global plugins exclusively once
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize standard Lenis configuration for buttery scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true,
      smoothTouch: false,
    });

    // Tie ScrollTrigger tracking into the Lenis loop seamlessly
    lenis.on('scroll', ScrollTrigger.update);

    // Provide GSAP ticker access to the RAF native engine
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return (
    <>
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <SectionTomorrow />
        <ProgressSection />
        <OfferSection />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
