import DomeGallery from "./dome-gallery";
import { youtubeThumbnails } from "../../data";

// interface ContentSectionProps {
//   youtubeVideoData: string[];
// }

const ContentSection = () => {
  return (
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
  );
};

export default ContentSection;