import React from "react";

const HeroVideoSection = () => {

  return (
    <header className="relative bg-[#1E3A8A] text-white min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="/fall.png"
        onError={(e) => (e.currentTarget.style.display = "none")}
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay - Increased opacity for better text readability on mobile */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/20" />

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 py-20 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          {/* Heading - Responsive text sizes */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 mt-10 md:mt-0"
            data-aos="fade-up"
          >
            We provide a complete range of high quality, reliable motor
            engineering services in Derby
          </h1>

          {/* Description */}
          <p
            className="text-gray-100 mb-10 max-w-2xl text-base sm:text-lg md:text-xl opacity-90"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Trusted professionals delivering precision, reliability, and
            unmatched service quality for your vehicle.
          </p>

          {/* Buttons - Stack on very small screens, side-by-side on larger */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <a href="/#contact" className="w-full sm:w-auto">
              <button className="w-full bg-[#1E3A8A] hover:bg-[#0F216B] text-white px-8 py-4 rounded-lg font-bold text-base transition duration-300 shadow-lg">
                Book Appointment
              </button>
            </a>

            <a href="tel:01332224229" className="w-full sm:w-auto">
              <button className="w-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-lg font-bold text-base transition duration-300">
                Call Us Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroVideoSection;