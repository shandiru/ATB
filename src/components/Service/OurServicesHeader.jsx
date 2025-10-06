import React from "react";

const OurServicesHeader = () => {
  return (
    <section className="bg-[#1E3A8A] text-white py-28 md:py-32 text-center">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Our Services
        </h2>

        {/* Subtitle */}
        <h6 className="text-lg md:text-xl font-light text-gray-200 leading-relaxed max-w-2xl mx-auto mb-8">
          Comprehensive motor engineering services delivered by experienced
          professionals using the latest equipment and techniques.
        </h6>

        {/* Decorative Line */}
        <div className="w-24 h-[3px] bg-white mx-auto rounded-full"></div>
      </div>
    </section>
  );
};

export default OurServicesHeader;
