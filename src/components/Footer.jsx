import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0F216B] text-white py-8 md:py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <p className="text-sm text-center md:text-left">
          © 2024 <span className="font-semibold">ATB Motor Engineers Ltd.</span>{" "}
          All rights reserved.
        </p>

        {/* Middle Section (Contact Info) */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-gray-200">
          <div className="flex items-center gap-2">
            <FiPhone className="text-[#CCDAFF]" />
            <span>01332 224229</span>
          </div>

          <div className="hidden sm:block h-4 w-[1px] bg-gray-400 opacity-50" />

          <div className="flex items-center gap-2">
            <FiMail className="text-[#CCDAFF]" />
            <a
              href="mailto:atbmotorengineers@gmail.com"
              className="hover:text-[#CCDAFF] transition-colors"
            >
              atbmotorengineers@gmail.com
            </a>
          </div>
        </div>

        {/* Right Section (Social Media Icons) */}
        <div className="flex items-center gap-4">
          <a
            href="#"
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

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#1E3A8A] via-[#00B4D8] to-[#1E3A8A]" />
    </footer>
  );
};

export default Footer;
