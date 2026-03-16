import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";

const CallToActionSection = () => {

  return (
    <section
      id="contact"
      className="relative bg-[#1E3A8A] text-white py-20 md:py-24 overflow-hidden scroll-m-24"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center">
        
        {/* Heading */}
        <h4
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-extrabold mb-5"
        >
         Reliable Repairs. Trusted Technicians.
        </h4>

        {/* Paragraph */}
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-lg md:text-xl font-medium text-gray-100 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          Every repair is carried out by skilled mechanics using advanced diagnostic equipment and top-grade components. We’re committed to quality workmanship, fair pricing, and getting you back on the road with complete confidence.
        </p>

        {/* Buttons */}
        <div
          data-aos="zoom-in-up"
          className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10"
        >
          <a
            href="tel:01332224229"
            className="bg-[#969695] text-[#1E3A8A] px-8 py-3 rounded-full font-semibold text-lg md:text-xl shadow-md hover:shadow-[#969695] hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <FiPhone className="text-xl" />
            Call Us: 01332 224229
          </a>

          <a
            href="mailto:atbmotorengineers@gmail.com"
            className="border-2 border-[#969695] text-white px-8 py-3 rounded-full font-semibold text-lg md:text-xl hover:bg-[#969695] hover:text-[#1E3A8A] hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <FiMail className="text-xl" />
            Email Us
          </a>
        </div>

        {/* Decorative Line */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-12 w-24 h-[3px] bg-[#969695] mx-auto rounded-full"
        ></div>
      </div>
    </section>
  );
};

export default CallToActionSection;