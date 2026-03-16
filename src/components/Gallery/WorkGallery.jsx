"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export function GallerySection() {
  const galleryImages = Array.from(
    { length: 22 },
    (_, i) => `/gallery/${i + 1}.jpeg`
  );

  const IMAGES_PER_PAGE = 6;
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const handleScroll = (direction) => {
    const nextIndex =
      direction === "left"
        ? Math.max(startIndex - IMAGES_PER_PAGE, 0)
        : Math.min(
            startIndex + IMAGES_PER_PAGE,
            galleryImages.length - IMAGES_PER_PAGE
          );

    setStartIndex(nextIndex);
  };

  const currentImages = galleryImages.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE
  );

  return (
    <section
      id="gallery"
      className="px-6 lg:px-12 bg-[#1E3A8A] py-24"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-px bg-[#969695] mr-4"></div>
            <p className="text-[#969695] text-sm font-medium uppercase tracking-wider">
              OUR GALLERY
            </p>
            <div className="w-12 h-px bg-[#969695] ml-4"></div>
          </div>
        </div>

        {/* Arrows */}
        <div
          className="flex items-center justify-center gap-6 pb-3"
          data-aos="fade-up"
        >
          <button
            onClick={() => handleScroll("left")}
            disabled={startIndex === 0}
            className="p-2 bg-[#0F216B] rounded-full hover:bg-[#969695] transition disabled:opacity-50"
          >
            <ChevronLeft className="text-white hover:text-[#1E3A8A]" />
          </button>

          <button
            onClick={() => handleScroll("right")}
            disabled={startIndex + IMAGES_PER_PAGE >= galleryImages.length}
            className="p-2 bg-[#0F216B] rounded-full hover:bg-[#969695] transition disabled:opacity-50"
          >
            <ChevronRight className="text-white hover:text-[#1E3A8A]" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentImages.map((image, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="relative h-[520px] w-full flex items-center justify-center rounded-lg overflow-hidden group cursor-pointer border-2 border-[#969695] hover:border-[#969695] transition-all duration-300 shadow-lg hover:shadow-[#969695]/40"
            >
              <img
                src={image}
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