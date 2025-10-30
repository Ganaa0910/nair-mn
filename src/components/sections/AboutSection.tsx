import CircularGallery from "./circular-gallery";

// interface AboutSectionProps {
//   isMobile: boolean;
// }

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-cream text-brown">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center">
          Бидний тухай
        </h2>
        <div className="max-w-4xl text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed px-2">
            Үндэсний урлагийн тоглолтын цогц үйлчилгээ үзүүлэгч компани
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-brown/80 leading-relaxed px-2">
            Та доош гүйлгэж бидний үзүүлдэг үйлчилгээнүүдтэй танилцаарай!
          </p>
        </div>
      </div>

      <div className="w-full h-[80vh] relative">
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </section>
  );
};

export default AboutSection;