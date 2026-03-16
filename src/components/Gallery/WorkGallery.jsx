import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function GallerySection() {
  const galleryImages = [
    "/i1.jpeg", "/i2.jpeg", "/i3.jpeg", "/i4.jpeg", "/i5.jpeg",
    "/i6.jpeg", "/i7.jpeg", "/i8.jpeg", "/i9.jpeg", "/whoare.jpg",
    "/i10.jpg", "/i11.jpg", "/i12.jpg", "/i13.jpg", "/i14.jpg",
    "/i15.jpg", "/i16.jpg",
  ];

  const getImagesPerPage = () => window.innerWidth < 640 ? 3 : 6;

  const [imagesPerPage, setImagesPerPage] = useState(getImagesPerPage);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newPerPage = getImagesPerPage();
      setImagesPerPage(newPerPage);
      setStartIndex(0); // reset to first page on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (direction) => {
    const nextIndex =
      direction === "left"
        ? Math.max(startIndex - imagesPerPage, 0)
        : Math.min(startIndex + imagesPerPage, galleryImages.length - imagesPerPage);
    setStartIndex(nextIndex);
  };

  const currentImages = galleryImages.slice(startIndex, startIndex + imagesPerPage);

  return (
    <section id="gallery" className="px-4 sm:px-6 lg:px-12 bg-[#1E3A8A]/10 py-24" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-px bg-[#969695] mr-4"></div>
            <p className="text-[#1E3A8A] text-lg font-medium uppercase tracking-wider">
              OUR GALLERY
            </p>
            <div className="w-12 h-px bg-[#969695] ml-4"></div>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex items-center justify-center gap-6 pb-6" data-aos="fade-up">
          <button
            onClick={() => handleScroll("left")}
            disabled={startIndex === 0}
            className="p-2 sm:p-3 bg-[#0F216B] rounded-full hover:bg-[#969695] transition disabled:opacity-50"
          >
            <ChevronLeft className="text-white hover:text-[#1E3A8A]" />
          </button>

          <button
            onClick={() => handleScroll("right")}
            disabled={startIndex + imagesPerPage >= galleryImages.length}
            className="p-2 sm:p-3 bg-[#0F216B] rounded-full hover:bg-[#969695] transition disabled:opacity-50"
          >
            <ChevronRight className="text-white hover:text-[#1E3A8A]" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentImages.map((image, index) => (
            <div
              key={startIndex + index}
              data-aos="zoom-in"
              className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] flex items-center justify-center rounded-lg overflow-hidden group cursor-pointer border-2 border-[#969695] transition-all duration-300 shadow-lg hover:shadow-[#969695]/40"
            >
              <img
                src={image}
                loading="lazy"
                alt={`Gallery image ${startIndex + index + 1}`}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;