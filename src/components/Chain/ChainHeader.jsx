import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ChainHeader = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,       // Animation speed
      easing: "ease-in-out", // Smooth easing
      once: false,           // ✅ Animation will trigger both on scroll down & up
      mirror: true,          // ✅ Reverses animation when scrolling up
      offset: 120,           // Triggers animation slightly before visible
    });
  }, []);

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div data-aos="fade-right">
            <p className="text-lg font-bold text-[#1E3A8A] mb-6 leading-tight border-b-2 w-71">
              Chain / Belts (Wet Belt Specialist)
            </p>
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-6 leading-tight">
             Expert Timing Chain & Wet Belt Services
            </h4>

            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-gray-700 text-base md:text-lg leading-relaxed mb-4"
            >
             Ensure your engine runs seamlessly with our professional timing chain and wet belt services. We use specialist tools, OEM parts, and expert diagnostics to maintain precision, prevent failure, and protect your engine’s longevity.
            </p>

            <a
              href="/#contact"
              data-aos="zoom-in"
              data-aos-delay="450"
              className="inline-block bg-[#1E3A8A] hover:bg-[#0F216B] text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:shadow-xl transition-all duration-300"
            >
              Book Appointment
            </a>
          </div>

          {/* Image Section */}
          <div
            data-aos="fade-left"
            className="flex justify-center items-center relative"
          >
            <div className="relative group">
              <img
                src="/car.png"
                alt="ATB Motor Engineers"
                className="rounded-2xl shadow-lg h-110 w-120 hover:shadow-[0_0_30px_rgba(30,58,138,0.4)] transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl bg-[#1E3A8A]/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChainHeader;
