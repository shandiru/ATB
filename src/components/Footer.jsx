import React from "react";
import { FiFacebook, FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F216B] text-white py-5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} <span className="font-semibold">ATB Motor Engineers Ltd.</span> All rights reserved.
          </p>
          {/* Terms & Privacy Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-300 mt-1">
            <Link
              to="/terms-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CCDAFF] hover:text-[#969695] hover:underline"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CCDAFF] hover:text-[#969695] hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Middle Section (Contact Info) */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-sm text-gray-200">
          <a
            href="tel:01332224229"
            className="flex items-center gap-2 hover:text-[#969695] transition-colors"
          >
            <FiPhone className="text-[#969695]" />
            01332 224229
          </a>

          <div className="hidden sm:block h-4 w-[1px] bg-gray-400 opacity-50" />

          <a
            href="mailto:atbmotorengineers@gmail.com"
            className="flex items-center gap-2 hover:text-[#969695] transition-colors"
          >
            <FiMail className="text-[#969695]" />
            atbmotorengineers@gmail.com
          </a>
        </div>

        {/* Right Section (Social Media Icons) */}
        <div className="flex items-center gap-4 justify-center md:justify-end">
          <a
            href="https://www.facebook.com/profile.php?id=100054506707364"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-[#1E3A8A]/20 transition-all duration-300"
          >
            <FiFacebook className="text-white text-lg hover:text-[#969695] hover:scale-110 transition-transform duration-300" />
          </a>
          
          
        </div>
      </div>

      {/* Powered By */}
      <div className="mt-4 text-center text-gray-300 text-sm md:text-base">
        <p>
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#969695] hover:underline font-semibold"
          >
            Ansely
          </a>
        </p>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#1E3A8A] via-[#969695] to-[#1E3A8A]" />
    </footer>
  );
};

export default Footer;