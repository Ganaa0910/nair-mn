const PackageSection = () => {
  const packages = [
    {
      id: "01",
      title: "Үлгэрийн баатруудын тоглолт",
      description: "Хүүхдийн хөтлөгч Алагаа хүүгийн мэндчилгээ Пороро найзын хамт Хөтлөгчийн хөгжөөнт тоглоом Супер Марио Хүүхдийн флашмоб Хүүхдүүдтэй зураг даруулах ҮРГЭЛЖЛЭХ ХУГАЦАА: 40-45 МИНУТ"
    },
    {
      id: "02",
      title: "Жаргалтайн дэлгэр хөтөлбөр",
      description: "Танд мэргэжлийн чадварлаг уран бүтээлчдийн тоглолтыг баялаг хөтөлбөртэйгээр санал болгож байна."
    },
    {
      id: "03",
      title: "Жаргалтайн дэлгэр PLUS",
      description: "Нээлтийн хөтлөлт, Морин хуурын аяз, Уртын дуу, Найрын ерөөл, Ардын дуу, Нийтийн дуу, PLUS хөтөлбөрийн уран бүтээлчид."
    }
  ];

  return (
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
          {/* Package Cards */}
          <div className="relative order-2 lg:order-1 space-y-4 sm:space-y-6">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className="bg-white border border-gray-200 shadow-xl rounded-[16px] sm:rounded-[20px] lg:rounded-[40px] p-6 sm:p-8 lg:p-8 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-center">
                  <span className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Хөтөлбөр {pkg.id}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800 mt-3 mb-4 leading-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Info Content */}
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
  );
};

export default PackageSection;