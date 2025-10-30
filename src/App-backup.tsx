import { useEffect, useState } from "react";
// import Lenis from "lenis";

// Components
import Navigation from "./components/Navigation";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import PackageSection from "./components/sections/PackageSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContentSection from "./components/sections/ContentSection";
import FooterSection from "./components/sections/FooterSection";

// Data
import { menuItems, socialItems, artServices } from "./data";

function App() {
  const [scrollIndicatorOpacity, setScrollIndicatorOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // COMPLETELY DISABLE LENIS FOR NOW
    // let lenis: any = null;
    // let rafId: number;

    // Force native scrolling on ALL devices
    document.body.style.removeProperty('touch-action');
    document.documentElement.style.removeProperty('touch-action');
    document.body.style.overflow = 'visible';
    document.documentElement.style.overflow = 'visible';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowY = 'auto';
    document.documentElement.style.overflowY = 'auto';
    
    // Remove any height restrictions
    document.body.style.height = 'auto';
    document.documentElement.style.height = 'auto';

    // Handle scroll for fade effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fadeStart = windowHeight * 0.1;
      const fadeEnd = windowHeight * 0.5;

      if (scrollY <= fadeStart) {
        setScrollIndicatorOpacity(1);
      } else if (scrollY >= fadeEnd) {
        setScrollIndicatorOpacity(0);
      } else {
        const opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
        setScrollIndicatorOpacity(opacity);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // if (lenis) {
      //   lenis.destroy();
      // }
      // if (rafId) {
      //   cancelAnimationFrame(rafId);
      // }
    };
  }, [isMobile]);

  return (
    <div className="app">
      <Navigation 
        menuItems={menuItems}
        socialItems={socialItems}
      />
      
      <HeroSection 
        scrollIndicatorOpacity={scrollIndicatorOpacity}
      />
      
      <AboutSection />
      
      <PackageSection />
      
      <ServicesSection 
        artServices={artServices}
        isMobile={isMobile}
      />
      
      <ContentSection />
      
      <FooterSection />
    </div>
  );
}

export default App;