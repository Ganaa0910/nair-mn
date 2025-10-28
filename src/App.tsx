import { useEffect, useState } from "react";
import Lenis from "lenis";
import Silk from "./components/backgrounds/silk.tsx";
import StaggeredMenu from "./components/sections/stagger-header.tsx";
import logo from "/logo.jpg?url";
import RotatingText from "./components/text/rotating-text.tsx";
import CircularGallery from "./components/sections/circular-gallery.tsx";
import SpotlightCard from "./components/SpotlightCard.tsx";

import Ballpit from "./components/backgrounds/ball-pit.tsx";
function App() {
  const menuItems = [
    {
      label: "Багц хөтөлбөр",
      ariaLabel: "Go to package programs",
      link: "#package-programs",
    },
    {
      label: "Урлагийн тоглолт",
      ariaLabel: "View art performances",
      link: "#art-performances",
    },
    { label: "Үйлчилгээ", ariaLabel: "Our services", link: "#services" },
    {
      label: "Уртын дуучид, Ерөөлчид",
      ariaLabel: "Traditional singers",
      link: "#traditional-singers",
    },
    { label: "Контент", ariaLabel: "View content", link: "#content" },
    { label: "Нийтлэл", ariaLabel: "Read articles", link: "#articles" },
  ];

  const items = [
    {
      image: "/1.JPG",
      title: "Уртын дуу",
      subtitle: "Уламжлалт дуу",
      handle: "Найр",
      borderColor: "#ba9a32",
      gradient: "linear-gradient(145deg, #ba9a32, #472913)",
      url: "#traditional-singers",
    },
    {
      image: "/2.JPG",
      title: "Морин хуур",
      subtitle: "Хөгжмийн зэмсэг",
      handle: "Найр",
      borderColor: "#472913",
      gradient: "linear-gradient(180deg, #472913, #ba9a32)",
      url: "#art-performances",
    },
    {
      image: "/3.JPG",
      title: "Бүжиг",
      subtitle: "Уламжлалт бүжиг",
      handle: "Найр",
      borderColor: "#ba9a32",
      gradient: "linear-gradient(225deg, #ba9a32, #472913)",
      url: "#art-performances",
    },
    {
      image: "/4.JPG",
      title: "Хөтөлбөр",
      subtitle: "Багц тоглолт",
      handle: "Найр",
      borderColor: "#472913",
      gradient: "linear-gradient(315deg, #472913, #ba9a32)",
      url: "#package-programs",
    },
  ];

  const socialItems = [
    { label: "Email", link: "mailto:info@nair.mn" },
    { label: "Twitter", link: "https://twitter.com/nairenterainment" },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/company/nair-entertainment",
    },
  ];

  const [scrollIndicatorOpacity, setScrollIndicatorOpacity] = useState(1);

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
          mainClassName="px-2 sm:px-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] md:px-3 text-cream overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center text-center whitespace-pre-line"
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
          rotationInterval={4000}
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
        <div className="flex flex-col items-center justify-center px-8 py-16">
          <h2 className="text-4xl font-bold mb-8">Бидний тухай</h2>
          <div className="max-w-2xl text-center space-y-4 mb-12">
            <p className="text-2xl">
              Үндэсний урлагийн тоглолтын цогц үйлчилгээ үзүүлэгч компани
            </p>
            <p className="text-lg">
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

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Simple Cards - Left Half */}
            <div className="relative order-1 lg:order-1 space-y-6">
              <div className="bg-white border border-gray-200 shadow-xl rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] p-4 sm:p-6 lg:p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <span className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Хөтөлбөр 01
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mt-2 mb-3">
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

              <div className="bg-white border border-gray-200 shadow-xl rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] p-4 sm:p-6 lg:p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <span className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Хөтөлбөр 02
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mt-2 mb-3">
                    Жаргалтайн дэлгэр хөтөлбөр
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Танд мэргэжлийн чадварлаг уран бүтээлчдийн тоглолтыг баялаг
                    хөтөлбөртэйгээр санал болгож байна.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 shadow-xl rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] p-4 sm:p-6 lg:p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <span className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Хөтөлбөр 03
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mt-2 mb-3">
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
            <div className="lg:pl-8 space-y-6 lg:space-y-8 order-2 lg:order-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brown mb-4 lg:mb-6">
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
        className="relative min-h-screen bg-cream"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Ballpit
          count={100}
          gravity={0}
          friction={0.995}
          wallBounce={0.95}
          followCursor={false}
          colors={[0x3b82f6, 0x1e40af, 0xba9a32]}
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brown mb-4 sm:mb-6">
                Урлагийн тоглолт
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-brown/80 max-w-3xl mx-auto px-4">
                Хөгжим, бүжиг, уламжлалт урлагийн нэгдсэн тоглолтууд
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
              <div className="group relative bg-gradient-to-br from-cream/95 to-cream/90 backdrop-blur-md p-6 sm:p-8 lg:p-12 rounded-2xl border border-brown/30 shadow-2xl hover:shadow-3xl text-center transform hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brown/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brown/60 via-brown/80 to-brown/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
                <div className="relative z-10">
                  <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-brown/10 flex items-center justify-center group-hover:bg-brown/20 transition-colors duration-300">
                      <img
                        src="/music.png"
                        className="object-contain w-8 sm:w-10 lg:w-12"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6 text-brown group-hover:text-brown/90 transition-colors duration-300 leading-tight">
                    Хөгжмийн урлагийн тоглолт
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-brown/90 transition-colors duration-300 text-brown/80">
                    Үндэсний хөгжмийн хамтлаг, Уртын дуучин Бүжигчин Хөөмийч
                    Нугараачийн бүрэлдэхүүн бүхий тоглолтын баг. Хүндэтгэлийн
                    хүлээн авалт, Жуулчдын хүлээн авалтад тохирожтой.
                  </p>
                  <div className="mt-4 sm:mt-6 lg:mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-brown/60">
                      <span className="text-xs sm:text-sm">морин хуур</span>
                      <span className="text-xs sm:text-sm">•</span>
                      <span className="text-xs sm:text-sm">уртын дуу</span>
                      <span className="text-xs sm:text-sm">•</span>
                      <span className="text-xs sm:text-sm">ардын дуу</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-cream/95 to-cream/90 backdrop-blur-md p-6 sm:p-8 lg:p-12 rounded-2xl border border-brown/30 shadow-2xl hover:shadow-3xl text-center transform hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brown/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brown/60 via-brown/80 to-brown/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
                <div className="relative z-10">
                  <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-brown/10 flex items-center justify-center group-hover:bg-brown/20 transition-colors duration-300">
                      <img
                        src="/dance.png"
                        className="h-8 sm:h-10 lg:h-12 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6 text-brown group-hover:text-brown/90 transition-colors duration-300 leading-tight">
                    Бүжгийн урлагийн тоглолт
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-brown/90 transition-colors duration-300 text-brown/80">
                    Уламжлалт монгол бүжгийн өвийг мэргэжлийн бүжигчид танд
                    хүргэнэ
                  </p>
                  <div className="mt-4 sm:mt-6 lg:mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-brown/60">
                      <span className="text-xs sm:text-sm">халх бүжиг</span>
                      <span className="text-xs sm:text-sm">•</span>
                      <span className="text-xs sm:text-sm">цам</span>
                      <span className="text-xs sm:text-sm">•</span>
                      <span className="text-xs sm:text-sm">биелгээ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
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
      </section>

      {/* Traditional Singers Section */}
      <section
        id="traditional-singers"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-900 to-amber-800 text-cream px-8"
      >
        <h2 className="text-5xl font-bold mb-12 text-center">
          Уртын дуучид, Ерөөлчид
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          <div className="bg-amber-800/50 p-8 rounded-xl backdrop-blur-sm border border-amber-600/30">
            <h3 className="text-2xl font-semibold mb-4">
              Морин хуурын тоглолт
            </h3>
            <p className="text-amber-200">
              Traditional horsehead fiddle performances featuring ancient
              melodies.
            </p>
          </div>
          <div className="bg-amber-800/50 p-8 rounded-xl backdrop-blur-sm border border-amber-600/30">
            <h3 className="text-2xl font-semibold mb-4">Уртын дууны тоглолт</h3>
            <p className="text-amber-200">
              Long song performances showcasing Mongolia's vocal traditions.
            </p>
          </div>
          <div className="bg-amber-800/50 p-8 rounded-xl backdrop-blur-sm border border-amber-600/30">
            <h3 className="text-2xl font-semibold mb-4">
              Ерөөлийн дууны тоглолт
            </h3>
            <p className="text-amber-200">
              Blessing song performances for special occasions and ceremonies.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}

      {/* Articles Section */}
      <section
        id="articles"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-900 to-rose-800 text-cream px-8"
      >
        <h2 className="text-5xl font-bold mb-12 text-center">Нийтлэл</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          <div className="bg-rose-800/50 p-8 rounded-xl backdrop-blur-sm border border-rose-600/30">
            <h3 className="text-2xl font-semibold mb-4">Соёлын нийтлэл</h3>
            <p className="text-rose-200">
              Articles exploring Mongolian cultural heritage and traditions.
            </p>
          </div>
          <div className="bg-rose-800/50 p-8 rounded-xl backdrop-blur-sm border border-rose-600/30">
            <h3 className="text-2xl font-semibold mb-4">Урлагийн нийтлэл</h3>
            <p className="text-rose-200">
              In-depth articles about traditional and contemporary Mongolian art
              forms.
            </p>
          </div>
          <div className="bg-rose-800/50 p-8 rounded-xl backdrop-blur-sm border border-rose-600/30">
            <h3 className="text-2xl font-semibold mb-4">Хэвлэлийн мэдээ</h3>
            <p className="text-rose-200">
              Latest news and press releases about our activities and
              achievements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
