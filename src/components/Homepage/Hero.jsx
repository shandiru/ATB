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
    <section className="relative w-full h-[100vh] overflow-hidden" id="home">
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center mt-25 justify-center text-center h-full px-6 md:px-10">
        <div className="flex gap-30 mt-15 max-w-4xl mx-auto">
          <h3
            data-aos="fade-up"
            className="text-white text-left font-semibold text-2xl max-w-xl mx-auto leading-snug md:leading-snug tracking-tight drop-shadow-lg"
          >
            We provide a complete range of{" "}
            <span className="text-[#1E3A8A] font-bold">high quality</span>, reliable motor
            engineering services in{" "}
            <span className="text-[#1E3A8A] font-bold">Derby</span> and the surrounding areas
          </h3>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-gray-200 text-sm text-left sm:text-base md:text-lg max-w-xl leading-relaxed"
          >
            Trusted professionals delivering precision, reliability, and unmatched
            service quality for your vehicle.
          </p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="600" className="mt-15">
          <a
            href="/#contact"
            className="bg-[#1E3A8A] hover:bg-[#0F216B] text-white px-6 py-2.5 rounded-full text-base sm:text-lg font-medium transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;
