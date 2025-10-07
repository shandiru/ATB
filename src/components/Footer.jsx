import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0F216B] text-white py-5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <p className="text-sm">
            © 2025 <span className="font-semibold">ATB Motor Engineers Ltd.</span> All rights reserved.
          </p>
          {/* Terms & Privacy Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-300 mt-1">
            <a
              href="/terms-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CCDAFF] hover:underline"
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CCDAFF] hover:underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Middle Section (Contact Info) */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-sm text-gray-200">
          <a
            href="tel:01332224229"
            className="flex items-center gap-2 hover:text-[#CCDAFF] transition-colors"
          >
            <FiPhone className="text-[#CCDAFF]" />
            01332 224229
          </a>

          <div className="hidden sm:block h-4 w-[1px] bg-gray-400 opacity-50" />

          <a
            href="mailto:atbmotorengineers@gmail.com"
            className="flex items-center gap-2 hover:text-[#CCDAFF] transition-colors"
          >
            <FiMail className="text-[#CCDAFF]" />
            atbmotorengineers@gmail.com
          </a>
        </div>

        {/* Right Section (Social Media Icons) */}
        <div className="flex items-center gap-4 justify-center md:justify-end">
          <a
            href="https://www.facebook.com/profile.php?id=100054506707364"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <FiFacebook className="text-white text-lg hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <FiTwitter className="text-white text-lg hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <FiInstagram className="text-white text-lg hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Powered By */}
      <div className="mt- text-center text-gray-300 text-sm md:text-base">
        <p>
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline font-semibold"
          >
            Ansely
          </a>
        </p>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#1E3A8A] via-[#00B4D8] to-[#1E3A8A]" />
    </footer>
  );
};

export default Footer;
