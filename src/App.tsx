import { useEffect } from "react";
import Lenis from "lenis";
import Silk from "./components/backgrounds/silk.tsx";
import StaggeredMenu from "./components/sections/stagger-header.tsx";
import logo from "../public/logo.jpg";
import RotatingText from "./components/text/rotating-text.tsx";

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

  const socialItems = [
    { label: "Email", link: "mailto:info@nair.mn" },
    { label: "Twitter", link: "https://twitter.com/nairenterainment" },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/company/nair-entertainment",
    },
  ];

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
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
            noiseIntensity={0}
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
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center bg-cream text-brown px-8">
        <h2 className="text-4xl font-bold mb-8">Бидний тухай</h2>
        <div className="max-w-2xl text-center space-y-4">
          <p className="text-2xl">
            Үндэсний урлагийн тоглолтын цогц үйлчилгээ үзүүлэгч компани
          </p>
          <p className="text-lg">
            Та доош гүйлгэж бидний үзүүлдэг үйлчилгээнүүдтэй танилцаарай!
          </p>
        </div>
      </section>

      {/* Package Programs Section */}
      <section
        id="package-programs"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-purple-800 text-cream px-8"
      >
        <h2 className="text-5xl font-bold mb-12 text-center">Багц хөтөлбөр</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          <div className="bg-purple-800/50 p-8 rounded-xl backdrop-blur-sm border border-purple-600/30">
            <h3 className="text-2xl font-semibold mb-4">
              Үлгэрийн баатруудын тоглолт
            </h3>
            <p className="text-purple-200">
              Traditional Mongolian storytelling performances featuring
              legendary heroes and their adventures.
            </p>
          </div>
          <div className="bg-purple-800/50 p-8 rounded-xl backdrop-blur-sm border border-purple-600/30">
            <h3 className="text-2xl font-semibold mb-4">
              Жаргалтайн дэлгэр хөтөлбөр
            </h3>
            <p className="text-purple-200">
              Comprehensive happiness and cultural enrichment programs for all
              ages.
            </p>
          </div>
          <div className="bg-purple-800/50 p-8 rounded-xl backdrop-blur-sm border border-purple-600/30">
            <h3 className="text-2xl font-semibold mb-4">
              Жаргалтайн дэлгэр PLUS хөтөлбөр
            </h3>
            <p className="text-purple-200">
              Enhanced cultural programs with premium content and exclusive
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Art Performances Section */}
      <section
        id="art-performances"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-indigo-800 text-cream px-8"
      >
        <h2 className="text-5xl font-bold mb-12 text-center">
          Урлагийн тоглолт
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <div className="bg-indigo-800/50 p-12 rounded-xl backdrop-blur-sm border border-indigo-600/30 text-center">
            <h3 className="text-3xl font-semibold mb-6">
              Хөгжмийн урлагийн тоглолт
            </h3>
            <p className="text-indigo-200 text-lg">
              Experience the rich musical traditions of Mongolia through live
              performances.
            </p>
          </div>
          <div className="bg-indigo-800/50 p-12 rounded-xl backdrop-blur-sm border border-indigo-600/30 text-center">
            <h3 className="text-3xl font-semibold mb-6">
              Бүжгийн урлагийн тоглолт
            </h3>
            <p className="text-indigo-200 text-lg">
              Traditional Mongolian dance performances showcasing cultural
              heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-cream px-8"
      >
        <h2 className="text-5xl font-bold mb-12 text-center">Үйлчилгээ</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
          <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-slate-600/30 text-center">
            <h3 className="text-2xl font-semibold mb-4">📧 Email</h3>
            <p className="text-slate-200">
              Get in touch with us for inquiries and bookings.
            </p>
            <a
              href="mailto:info@nair.mn"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-slate-600/30 text-center">
            <h3 className="text-2xl font-semibold mb-4">🐦 Twitter</h3>
            <p className="text-slate-200">
              Follow us for updates and cultural content.
            </p>
            <a
              href="https://twitter.com/nairenterainment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Follow
            </a>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-slate-600/30 text-center">
            <h3 className="text-2xl font-semibold mb-4">💼 LinkedIn</h3>
            <p className="text-slate-200">Connect with us professionally.</p>
            <a
              href="https://linkedin.com/company/nair-entertainment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Connect
            </a>
          </div>
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
      <section
        id="content"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-900 to-emerald-800 text-cream px-8"
      >
        <h2 className="text-5xl font-bold mb-12 text-center">Контент</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          <div className="bg-emerald-800/50 p-8 rounded-xl backdrop-blur-sm border border-emerald-600/30">
            <h3 className="text-2xl font-semibold mb-4">🎬 Видео</h3>
            <p className="text-emerald-200">
              Professional video content showcasing our performances and
              cultural programs.
            </p>
          </div>
          <div className="bg-emerald-800/50 p-8 rounded-xl backdrop-blur-sm border border-emerald-600/30">
            <h3 className="text-2xl font-semibold mb-4">🎙️ Подкаст</h3>
            <p className="text-emerald-200">
              Audio content featuring discussions on Mongolian culture and
              traditions.
            </p>
          </div>
          <div className="bg-emerald-800/50 p-8 rounded-xl backdrop-blur-sm border border-emerald-600/30">
            <h3 className="text-2xl font-semibold mb-4">📸 Зураг</h3>
            <p className="text-emerald-200">
              Photo galleries capturing the beauty of our performances and
              events.
            </p>
          </div>
        </div>
      </section>

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
