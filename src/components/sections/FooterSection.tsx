import ColorBends from "../backgrounds/light-bend";

const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="relative min-h-screen text-cream overflow-hidden"
    >
      {/* ColorBends Background */}
      <div className="absolute inset-0 w-full h-full bg-black -z-10">
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
                  {[
                    { title: "Багц хөтөлбөр", desc: "Уламжлалт урлагийн цогц тоглолт" },
                    { title: "Урлагийн тоглолт", desc: "Хөгжим, бүжиг, уламжлалт урлаг" },
                    { title: "Үйлчилгээ", desc: "Тусгай захиалгын үйлчилгээ" },
                    { title: "Контент", desc: "Цахим контент үүсгэлт" }
                  ].map((service, index) => (
                    <div key={index} className="bg-cream/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-cream/20 hover:bg-cream/20 transition-all duration-300 group cursor-pointer">
                      <h4 className="text-base sm:text-lg font-semibold mb-2 text-cream group-hover:text-brown transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-cream/80 text-xs sm:text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  ))}
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
  );
};

export default FooterSection;