import { useEffect, useState } from "react";
import Lenis from "lenis";
import Silk from "./components/backgrounds/silk.tsx";
import StaggeredMenu from "./components/sections/stagger-header-simple.tsx";
import logo from "/logo.jpg?url";
import RotatingText from "./components/text/rotating-text.tsx";
import CircularGallery from "./components/sections/circular-gallery.tsx";
// import SpotlightCard from "./components/SpotlightCard.tsx";
import DomeGallery from "./components/sections/dome-gallery.tsx";
import TiltedCard from "./components/cards/tilted-card.tsx";
import StackedCard from "./components/cards/stacked-card.tsx";

import ColorBends from "./components/backgrounds/light-bend.tsx";
function App() {
  const menuItems = [
    {
      label: "Багц хөтөлбөр",
      ariaLabel: "Go to package programs",
      link: "#package-programs",
    },
    {
      label: "Үйлчилгээ",
      ariaLabel: "View art performances",
      link: "#art-performances",
    },
    { label: "Контент", ariaLabel: "View content", link: "#content" },
    { label: "Холбоо барих", ariaLabel: "Read articles", link: "#footer" },
  ];

  // const items = [
  //   {
  //     image: "/1.JPG",
  //     title: "Уртын дуу",
  //     subtitle: "Уламжлалт дуу",
  //     handle: "Найр",
  //     borderColor: "#ba9a32",
  //     gradient: "linear-gradient(145deg, #ba9a32, #472913)",
  //     url: "#traditional-singers",
  //   },
  //   {
  //     image: "/2.JPG",
  //     title: "Морин хуур",
  //     subtitle: "Хөгжмийн зэмсэг",
  //     handle: "Найр",
  //     borderColor: "#472913",
  //     gradient: "linear-gradient(180deg, #472913, #ba9a32)",
  //     url: "#art-performances",
  //   },
  //   {
  //     image: "/3.JPG",
  //     title: "Бүжиг",
  //     subtitle: "Уламжлалт бүжиг",
  //     handle: "Найр",
  //     borderColor: "#ba9a32",
  //     gradient: "linear-gradient(225deg, #ba9a32, #472913)",
  //     url: "#art-performances",
  //   },
  //   {
  //     image: "/4.JPG",
  //     title: "Хөтөлбөр",
  //     subtitle: "Багц тоглолт",
  //     handle: "Найр",
  //     borderColor: "#472913",
  //     gradient: "linear-gradient(315deg, #472913, #ba9a32)",
  //     url: "#package-programs",
  //   },
  // ];

  const socialItems = [
    { label: "Facebook", link: "https://www.facebook.com/NAIR.entertainment" },
    {
      label: "Instagram",
      link: "https://www.instagram.com/nair.entertainment/",
    },
    { label: "YouTube", link: "https://www.youtube.com/@Nair.entertainment" },
  ];

  const artServices = [
    {
      title: "Бэр гуйх ёслол",
      image: "/ber-guih.jpg",
      description: "Уламжлалт бэр гуйх ёслолын тоглолт",
    },
    {
      title: "Шинэ гэрийн найр",
      image: "/shine-geriin-nair.jpg",
      description: "Шинэ гэр барисны баяр ёслолын найр",
    },
    {
      title: "Одонгийн цайллага найр",
      image: "/odongiin-nair.jpg",
      description: "Одонгийн цайллагын тусгай найр",
    },
    {
      title: "Цагаан сар",
      image: "/tsagaan-sar.jpg",
      description: "Цагаан сарын баярын тоглолт",
    },
    {
      title: "Төслийн нээлт, Байгууллагын арга хэмжээ",
      image: "/tusliin-neelt.jpg",
      description: "Албан ёсны арга хэмжээний тоглолт",
    },
    {
      title: "Хүндэтгэлийн хүлээн авалт, Жуулчны тоглолт",
      image: "/huleen-avalt.jpg",
      description: "Зочид, жуулчдын хүлээн авалтын тоглолт",
    },
    {
      title: "Сэвлэг үргээх ёслол",
      image: "/sevleg-urgeeh.jpg",
      description: "Сэвлэг үргээх ёслолын найр",
    },
    {
      title: "Хурим",
      image: "/hurim.jpg",
      description: "Хуримын ёслолын тоглолт",
    },
  ];

  // YouTube video data for interactive DomeGallery
  const youtubeVideoData = [
    "mCXgzPP1sh8",
    "Ze4FNHIv8pQ",
    "lHT7gVDDVHE",
    "iz7wXlVQjj8",
    "z25wCzCjoC0",
    "dKySWwfq1Ig",
    "jefLAGVStcY",
    "yOpSK8uIt0M",
    "cdAiTMhF3OE",
    "CluFAVM7AWI",
    "L96c3qf57rA",
    "wYYroSSVYBY",
    "Ujt_-t3M0E8",
    "hzwyuI94mGE",
    "uhHKChAZI6Y",
    "Ob8u4zxf7HA",
    "rdQ-F1tcBK4",
    "49aZsVS7A5s",
    "oAer8J5CYZA",
    "6fkt27_Io40",
    "dy9Zf_0LGZU",
    "-GsHnI5gwzU",
    "1BFmL8SiCTE",
  ];

  const youtubeThumbnails = youtubeVideoData.map((videoId) => ({
    src: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    alt: "Nair Entertainment Performance",
    videoId: videoId,
  }));

  const [scrollIndicatorOpacity, setScrollIndicatorOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [currentTopCardId, setCurrentTopCardId] = useState(
    artServices.length - 1,
  );

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle scroll for fade effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fadeStart = windowHeight * 0.1; // Start fading at 10% of viewport height
      const fadeEnd = windowHeight * 0.5; // Fully faded at 50% of viewport height

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={["#472913", "#472913", "#ba9a32"]}
        logoUrl={logo}
        logoText="НАЙР энтертайнмент"
        accentColor="#ba9a32"
        isFixed={true}
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-brown to-brown/80 text-cream relative">
        <div className="absolute inset-0">
          <Silk
            speed={5}
            scale={1}
            color="#57B7FF"
            noiseIntensity={2}
            rotation={100}
          />
        </div>

        <RotatingText
          texts={[
            "Дээрээ тэнгэрийн\n нартай",
            "Дэргэдээ ханийн\n нартай",
            "Өвөр дээрээ\n үрийн нартай",
            "Өөдлөн\n дэвшиж",
            "Өсөн дэвжиж\n яваарай!",
          ]}
          mainClassName="px-4 sm:px-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] text-cream overflow-hidden py-1 sm:py-2 md:py-3 justify-center text-center whitespace-pre-line leading-tight sm:leading-tight md:leading-normal"
          style={{
            fontFamily: '"Comfortaa", sans-serif',
            fontWeight: 600,
          }}
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          rotationInterval={3000}
        />

        {/* Bouncy Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-300"
          style={{ opacity: scrollIndicatorOpacity }}
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

      {/* Package Programs Section */}
      <section
        id="package-programs"
        className="relative bg-cream text-brown py-16 md:py-24 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-brown">
              Багц хөтөлбөр
            </h2>
            <p className="text-lg sm:text-xl text-brown/80 max-w-2xl mx-auto">
              Үндэсний урлагийн тоглолтын цогц хөтөлбөрүүдээр танилцаарай
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start lg:items-center">
            {/* Simple Cards - Left Half */}
            <div className="relative order-2 lg:order-1 space-y-4 sm:space-y-6">
              <div className="bg-white border border-gray-200 shadow-xl rounded-[16px] sm:rounded-[20px] lg:rounded-[40px] p-6 sm:p-8 lg:p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <span className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Хөтөлбөр 01
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800 mt-3 mb-4 leading-tight">
                    Үлгэрийн баатруудын тоглолт
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Хүүхдийн хөтлөгч Алагаа хүүгийн мэндчилгээ Пороро найзын
                    хамт Хөтлөгчийн хөгжөөнт тоглоом Супер Марио Хүүхдийн
                    флашмоб Хүүхдүүдтэй зураг даруулах ҮРГЭЛЖЛЭХ ХУГАЦАА: 40-45
                    МИНУТ
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 shadow-xl rounded-[16px] sm:rounded-[20px] lg:rounded-[40px] p-6 sm:p-8 lg:p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <span className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Хөтөлбөр 02
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800 mt-3 mb-4 leading-tight">
                    Жаргалтайн дэлгэр хөтөлбөр
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Танд мэргэжлийн чадварлаг уран бүтээлчдийн тоглолтыг баялаг
                    хөтөлбөртэйгээр санал болгож байна.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 shadow-xl rounded-[16px] sm:rounded-[20px] lg:rounded-[40px] p-6 sm:p-8 lg:p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <span className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Хөтөлбөр 03
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800 mt-3 mb-4 leading-tight">
                    Жаргалтайн дэлгэр PLUS
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Нээлтийн хөтлөлт, Морин хуурын аяз, Уртын дуу, Найрын ерөөл,
                    Ардын дуу, Нийтийн дуу, PLUS хөтөлбөрийн уран бүтээлчид.
                  </p>
                </div>
              </div>
            </div>

            {/* Text Content - Right Half */}
            <div className="lg:pl-8 space-y-6 lg:space-y-8 order-1 lg:order-2 mb-8 lg:mb-0">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-brown mb-4 lg:mb-6 leading-tight">
                  Монгол соёлын өвийг дамжуулан
                </h3>
                <p className="text-brown/80 text-base lg:text-lg leading-relaxed mb-4 lg:mb-6">
                  Бид үндэсний урлагийн тоглолтын олон төрлийн хөтөлбөрүүдийг
                  санал болгож байна. Эдгээр хөтөлбөрүүд нь Монгол соёлын баялаг
                  өвийг орчин үеийн хэлбэрээр дамжуулахад чиглэгдсэн.
                </p>
                <p className="text-brown/70 text-sm lg:text-base leading-relaxed">
                  Манай багийн туршлагатай урлагчид таны хүсэл сонирхолд
                  тохирсон хөтөлбөрийг тусгайлан бэлтгэх боломжтой.
                </p>
              </div>

              <div className="border-l-4 border-brown pl-4 lg:pl-6">
                <h4 className="text-lg lg:text-xl font-semibold text-brown mb-3">
                  Онцлох шинж чанарууд:
                </h4>
                <ul className="space-y-2 lg:space-y-3 text-brown/70 text-sm lg:text-base">
                  <li className="flex items-start">
                    <span className="text-brown/90 mr-3">•</span>
                    Уламжлалт хөгжим, дуу, бүжгийн нэгдэл
                  </li>
                  <li className="flex items-start">
                    <span className="text-brown/90 mr-3">•</span>
                    Орчин үеийн технологийн дэмжлэг
                  </li>
                  <li className="flex items-start">
                    <span className="text-brown/90 mr-3">•</span>
                    Интерактив элементүүд
                  </li>
                  <li className="flex items-start">
                    <span className="text-brown/90 mr-3">•</span>
                    Бүх насны үзэгчдэд тохиромжтой
                  </li>
                </ul>
              </div>

              <div className="bg-brown/10 rounded-lg p-4 lg:p-6 border border-brown/20">
                <h4 className="text-base lg:text-lg font-semibold text-brown mb-3">
                  Захиалгын талаар:
                </h4>
                <p className="text-brown/70 text-xs lg:text-sm leading-relaxed">
                  Та өөрийн арга хэмжээний онцлог, үзэгчдийн тоо, хүссэн
                  хугацааг харгалзан хөтөлбөрийн төрлөө сонгон захиалах
                  боломжтой. Бидэнтэй холбогдож дэлгэрэнгүй мэдээлэл авна уу.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art Performances Section */}
      <section
        id="art-performances"
        className="relative bg-cream py-16 sm:py-20 lg:py-24"
      >
        {/* Header Section - Above Animation */}
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
          {/* Cards overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
              {isMobile ? (
                // Mobile: Single Stacked Cards Stack
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <StackedCard
                      cardsData={artServices.map((service, index) => ({
                        id: index,
                        img: service.image,
                      }))}
                      cardDimensions={{ width: 320, height: 320 }}
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
                  <div className="mt-6 text-center bg-cream/90 backdrop-blur-sm rounded-lg p-4 mx-4">
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

      {/* Services Section */}
      {/*<section
        id="services"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-cream px-8 py-16"
      >
        <h2 className="text-5xl font-bold mb-12 text-center">Контент</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
          {items.map((item, index) => (
            <SpotlightCard
              key={index}
              className="h-[400px] cursor-pointer hover:scale-105 transition-transform duration-300"
              spotlightColor="rgba(186, 154, 50, 0.3)"
            >
              <div className="relative h-full flex flex-col">
                <div className="flex-1 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                </div>
                <div className="text-cream">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-cream/80 mb-2">{item.subtitle}</p>
                  <span className="text-sm text-cream/60">{item.handle}</span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>*/}

      {/* YouTube Videos Section */}
      <section
        id="content"
        className="min-h-screen bg-cream text-brown relative z-50"
      >
        <div className="text-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6 text-brown leading-tight">
            Бидний{" "}
            <a
              href="https://www.youtube.com/@Nair.entertainment"
              target="_blank"
              rel="noopener noreferrer"
            >
              You
              <span className="bg-red-600 rounded-xl ml-1 p-1 text-white">
                Tube
              </span>
            </a>
            -р зочлоорой!{" "}
          </h2>
          <p className="text-lg sm:text-xl lg:text-xl text-brown/80 max-w-3xl mx-auto leading-relaxed px-2">
            Манай тоглолт, хөтөлбөрүүдийг үзээрэй
          </p>
        </div>

        <div className="h-[700px] w-full">
          <DomeGallery
            images={youtubeThumbnails}
            fit={1.2}
            minRadius={600}
            maxRadius={900}
            dragSensitivity={15}
            maxVerticalRotationDeg={0}
            dragDampening={1.5}
            grayscale={false}
            imageBorderRadius="20px"
            openedImageBorderRadius="20px"
            overlayBlurColor="#060010"
            autoRotate={true}
            autoRotateSpeed={0.1}
          />
        </div>
      </section>

      {/* Content Section */}

      {/* Luxury Footer Section */}
      <footer
        id="footer"
        className="relative min-h-screen text-cream overflow-hidden"
      >
        {/* ColorBends Background */}
        <div className="absolute inset-0 w-full h-full bg-black">
          <ColorBends
            colors={["#ba9a32", "#57b7ff", "#472913", "#0000ff"]}
            rotation={90}
            autoRotate={1}
            speed={0.2}
            scale={2}
            frequency={1.2}
            warpStrength={1}
            mouseInfluence={0.8}
            parallax={2}
            noise={0.08}
          />
        </div>

        {/* Accessibility Overlay */}
        <div className="absolute inset-0 bg-black/60 z-5"></div>

        {/* Content Overlay */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Main Footer Content */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-6 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start lg:items-center">
                {/* Left Side - Brand & Mission */}
                <div className="space-y-6 sm:space-y-8 lg:space-y-12 text-center lg:text-left">
                  <div>
                    <img
                      src="/logo.jpg"
                      alt="НАЙР энтертайнмент"
                      className="h-[80px] sm:h-[100px] lg:h-[150px] w-auto object-contain mb-4 sm:mb-6 mx-auto lg:mx-0"
                    />
                    <div className="h-1 w-24 bg-cream rounded-full mx-auto lg:mx-0"></div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-base sm:text-lg lg:text-xl text-cream/90 leading-relaxed px-2 lg:px-0">
                      Үндэсний найрны цогц үйлчилгээ үзүүлэгч компани
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-cream/80 leading-relaxed px-2 lg:px-0">
                      Монгол соёлын баялаг өвийг орчин үеийн хэлбэрээр
                      дамжуулан, бүх насны үзэгчдэд гайхамшигтай туршлага
                      бэлтгэж байна.
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold text-cream uppercase tracking-wider">
                      Бидэнтэй нэгдээрэй
                    </h3>
                    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                      <a
                        href="https://www.facebook.com/NAIR.entertainment"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-6 py-3 bg-cream/10 backdrop-blur-sm rounded-full border border-cream/20 hover:bg-cream/20 transition-all duration-300 hover:scale-105"
                      >
                        <span className="text-cream group-hover:text-brown group-hover:bg-cream group-hover:px-2 group-hover:py-1 group-hover:rounded transition-all">
                          Facebook
                        </span>
                      </a>
                      <a
                        href="https://www.instagram.com/nair.entertainment/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-6 py-3 bg-cream/10 backdrop-blur-sm rounded-full border border-cream/20 hover:bg-cream/20 transition-all duration-300 hover:scale-105"
                      >
                        <span className="text-cream group-hover:text-brown group-hover:bg-cream group-hover:px-2 group-hover:py-1 group-hover:rounded transition-all">
                          Instagram
                        </span>
                      </a>
                      <a
                        href="https://www.youtube.com/@Nair.entertainment"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-6 py-3 bg-cream/10 backdrop-blur-sm rounded-full border border-cream/20 hover:bg-cream/20 transition-all duration-300 hover:scale-105"
                      >
                        <span className="text-cream group-hover:text-brown group-hover:bg-cream group-hover:px-2 group-hover:py-1 group-hover:rounded transition-all">
                          YouTube
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Side - Contact & Services */}
                <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                  {/* Contact Information */}
                  <div className="bg-cream/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-cream/20 shadow-2xl">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-cream text-center lg:text-left">
                      Холбоо барих
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-cream/20 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-cream"></div>
                        </div>
                        <div>
                          <p className="text-cream font-medium">Утас</p>
                          <p className="text-cream/80">+976 7600-4455</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-cream/20 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-cream"></div>
                        </div>
                        <div>
                          <p className="text-cream font-medium">И-мэйл</p>
                          <p className="text-cream/80">info@nair.mn</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-cream/20 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-cream"></div>
                        </div>
                        <div>
                          <p className="text-cream font-medium">Хаяг</p>
                          <p className="text-cream/80">
                            Улаанбаатар хот, Монгол улс
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-cream/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-cream/20 hover:bg-cream/20 transition-all duration-300 group cursor-pointer">
                      <h4 className="text-base sm:text-lg font-semibold mb-2 text-cream group-hover:text-brown transition-colors">
                        Багц хөтөлбөр
                      </h4>
                      <p className="text-cream/80 text-xs sm:text-sm leading-relaxed">
                        Уламжлалт урлагийн цогц тоглолт
                      </p>
                    </div>
                    <div className="bg-cream/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-cream/20 hover:bg-cream/20 transition-all duration-300 group cursor-pointer">
                      <h4 className="text-base sm:text-lg font-semibold mb-2 text-cream group-hover:text-brown transition-colors">
                        Урлагийн тоглолт
                      </h4>
                      <p className="text-cream/80 text-xs sm:text-sm leading-relaxed">
                        Хөгжим, бүжиг, уламжлалт урлаг
                      </p>
                    </div>
                    <div className="bg-cream/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-cream/20 hover:bg-cream/20 transition-all duration-300 group cursor-pointer">
                      <h4 className="text-base sm:text-lg font-semibold mb-2 text-cream group-hover:text-brown transition-colors">
                        Үйлчилгээ
                      </h4>
                      <p className="text-cream/80 text-xs sm:text-sm leading-relaxed">
                        Тусгай захиалгын үйлчилгээ
                      </p>
                    </div>
                    <div className="bg-cream/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-cream/20 hover:bg-cream/20 transition-all duration-300 group cursor-pointer">
                      <h4 className="text-base sm:text-lg font-semibold mb-2 text-cream group-hover:text-brown transition-colors">
                        Контент
                      </h4>
                      <p className="text-cream/80 text-xs sm:text-sm leading-relaxed">
                        Цахим контент үүсгэлт
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-cream/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                <div className="flex items-center gap-4">
                  <p className="text-cream/70 text-xs sm:text-sm leading-relaxed">
                    © 2024 НАЙР энтертайнмент. Бүх эрх хуулиар хамгаалагдсан.
                  </p>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <a
                    href="#"
                    className="text-cream/70 hover:text-cream text-xs sm:text-sm transition-colors"
                  >
                    Нууцлалын бодлого
                  </a>
                  <a
                    href="#"
                    className="text-cream/70 hover:text-cream text-xs sm:text-sm transition-colors"
                  >
                    Үйлчилгээний нөхцөл
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
