import Silk from "../backgrounds/silk";
import RotatingText from "../text/rotating-text";

interface HeroSectionProps {
  scrollIndicatorOpacity: number;
  isMobile?: boolean;
}

const HeroSection = ({ scrollIndicatorOpacity }: HeroSectionProps) => {
  const heroTexts = [
    "Дээрээ тэнгэрийн\n нартай",
    "Дэргэдээ ханийн\n нартай",
    "Өвөр дээрээ\n үрийн нартай",
    "Өөдлөн\n дэвшиж",
    "Өсөн дэвжиж\n яваарай!",
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-cream relative bg-gradient-to-br from-brown/70 to-brown/50">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{ pointerEvents: 'none', touchAction: 'none' }}>
        <Silk
          speed={5}
          scale={1}
          color="#57B7FF"
          noiseIntensity={2}
          rotation={100}
        />
      </div>

      {/* Hero Text */}
      <div className="relative">
        <RotatingText
        texts={heroTexts}
        mainClassName="px-4 sm:px-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] text-cream overflow-hidden py-1 sm:py-2 md:py-3 justify-center text-center whitespace-pre-line leading-tight sm:leading-tight md:leading-normal"
        style={{
          fontFamily: '"Comfortaa", sans-serif',
          fontWeight: 600,
        }}
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        rotationInterval={3000}
      />
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-300"
        style={{ 
          opacity: scrollIndicatorOpacity, 
          pointerEvents: 'none' 
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-cream/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cream rounded-full mt-2 animate-pulse"></div>
          </div>
          <svg
            className="w-4 h-4 text-cream/60 animate-bounce"
            style={{ animationDelay: "0.5s" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;