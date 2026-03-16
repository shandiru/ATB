import { FiPhone, FiMail } from "react-icons/fi";

const CallToActionSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-black text-white py-20 md:py-24 overflow-hidden scroll-m-24"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/bg.jpg')" }} // Replace with your image in public folder
      ></div>

      {/* Overlay (optional, for better contrast) */}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center">
        {/* Heading */}
        <h4
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-extrabold mb-5"
        >
          Need Professional Motor Engineering Services?
        </h4>

        {/* Paragraph */}
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-lg md:text-xl font-medium text-gray-100 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          Contact us today for a free consultation and quote.
        </p>

        {/* Buttons */}
        <div
          data-aos="zoom-in-up"
          className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10"
        >
          <a
            href="tel:01332224229"
            className="bg-[#969695] text-white px-8 py-3 rounded-full font-semibold text-lg md:text-xl shadow-md hover:shadow-[#969695] hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
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
      </div>
    </section>
  );
};

export default CallToActionSection;