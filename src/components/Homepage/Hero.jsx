import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroVideoSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <header className="relative bg-[#1f2a44] text-white h-[100vh]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1f2a44]/80" />

      {/* Content */}
      <div className="relative py-28 px-8 md:px-16 xl:px-24">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          {/* Heading */}
          <h1
            className="text-4xl font-bold leading-tight mb-6 mt-25"
            data-aos="fade-up"
          >
            We provide a complete range of high quality, reliable motor
            engineering services in Derby and the surrounding areas
          </h1>

          {/* Description */}
          <p
            className="text-gray-200 mb-10 max-w-2xl text-lg"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Trusted professionals delivering precision, reliability, and
            unmatched service quality for your vehicle.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-wrap gap-5 justify-center md:justify-start"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <a href="/#contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold text-base sm:text-lg transition duration-300 shadow-md hover:shadow-lg">
                Book an Appointment
              </button>
            </a>

            <a
              href="tel:01332224229"
              className="bg-white text-gray-900 hover:bg-gray-100 px-7 py-3 rounded-lg font-semibold text-base sm:text-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroVideoSection;
