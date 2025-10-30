import { useState } from "react";
import TiltedCard from "../cards/tilted-card";
import StackedCard from "../cards/stacked-card";
import type { ArtService } from "../../data";

interface ServicesSectionProps {
  artServices: ArtService[];
  isMobile: boolean;
}

const ServicesSection = ({ artServices, isMobile }: ServicesSectionProps) => {
  const [currentTopCardId, setCurrentTopCardId] = useState(
    artServices.length - 1,
  );

  return (
    <section
      id="art-performances"
      className="relative bg-cream py-16 sm:py-20 lg:py-24"
    >
      {/* Header */}
      <div className="relative z-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brown mb-4 sm:mb-6 leading-tight">
              Үйлчилгээ
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-brown/80 max-w-3xl mx-auto leading-relaxed">
              Хөгжим, бүжиг, уламжлалт урлагийн нэгдсэн тоглолтууд
            </p>
          </div>
        </div>
      </div>

      {/* Animated Background Section */}
      <div className="relative min-h-[800px] overflow-hidden">
        {/* Background - Only show Ballpit on desktop */}

        {/* Cards Content */}
        <div className="relative z-10 flex items-center justify-center h-full py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            {isMobile ? (
              // Mobile: Single Stacked Cards Stack
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="relative">
                  <StackedCard
                    cardsData={artServices.map((service, index) => ({
                      id: index,
                      img: service.image,
                    }))}
                    cardDimensions={{ width: 280, height: 400 }}
                    sensitivity={150}
                    sendToBackOnClick={true}
                    animationConfig={{ stiffness: 300, damping: 25 }}
                    randomRotation={true}
                    onTopCardChange={setCurrentTopCardId}
                  />
                  {/* Event name overlay */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2">
                      <h3 className="text-white font-bold text-base text-center leading-tight">
                        {artServices[currentTopCardId]?.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center bg-white rounded-lg p-4 mx-4 shadow-lg">
                  <p className="text-brown font-semibold text-lg">
                    Drag or tap to see all services
                  </p>
                </div>
              </div>
            ) : (
              // Desktop: Tilted Cards Layout
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 px-4">
                {artServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center w-full"
                  >
                    <TiltedCard
                      imageSrc={service.image}
                      altText={service.title}
                      captionText={service.title}
                      containerHeight="280px"
                      containerWidth="100%"
                      imageHeight="260px"
                      imageWidth="260px"
                      scaleOnHover={1.15}
                      rotateAmplitude={20}
                      showMobileWarning={false}
                      showTooltip={false}
                      displayOverlayContent={false}
                    />
                    <div className="mt-3 text-center px-1">
                      <h4 className="text-brown font-semibold text-base leading-tight">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
