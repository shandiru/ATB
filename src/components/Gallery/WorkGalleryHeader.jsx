import React from "react";

const WorkGalleryHeader = () => {
  return (
    <section className="relative bg-[#1E3A8A] text-white py-24 md:py-28 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight pt-18">
          Our Work Gallery
        </h2>

        {/* Subtitle */}
        <h6 className="text-lg md:text-xl font-light text-gray-200 leading-relaxed max-w-3xl mx-auto mb-6">
          Showcasing our expertise in motor engineering through completed
          projects and satisfied customers.
        </h6>

        {/* Decorative Line */}
        <div className="w-24 h-[3px] bg-white mx-auto rounded-full mt-4"></div>
      </div>

      {/* Background pattern (subtle texture) */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:30px_30px]"></div>
    </section>
  );
};

export default WorkGalleryHeader;
