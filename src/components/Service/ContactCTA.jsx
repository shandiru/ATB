import React from "react";

const ContactCTA = () => {
  return (
    <section className="bg-[#1E3A8A] text-white py-16 px-6 md:px-12 text-center mb-16">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h4 className="text-3xl md:text-4xl font-bold mb-4">
          Need Professional Motor Engineering Services?
        </h4>

        {/* Subheading */}
        <h6 className="text-lg md:text-xl text-gray-200 mb-8">
          Contact us today for a free consultation and quote.
        </h6>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="tel:01332224229"
            className="text-white text-lg md:text-xl font-semibold hover:text-yellow-300 transition-colors duration-300"
          >
            📞 01332 224229
          </a>
          <a
            href="mailto:atbmotorengineers@gmail.com"
            className="text-white text-lg md:text-xl font-semibold hover:text-yellow-300 transition-colors duration-300"
          >
            ✉️ atbmotorengineers@gmail.com
          </a>
        </div>

        {/* Divider line */}
        <div className="mt-10 flex justify-center">
          <div className="w-20 h-[2px] bg-white opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
