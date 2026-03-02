import React, { useState } from "react";
import { FiPhone, FiMail, FiMenu, FiX } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" }, // ✅ removed #home
    { href: "/services", label: "Our Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6 lg:px-10">
        
        {/* Logo */}
        <Link smooth to="/" className="flex items-center gap-2">
          <img
            src="/image.png"
            alt="Company Logo"
            className="h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              smooth
              key={link.href}
              to={link.href}
              className="relative text-[16px] tracking-wide text-gray-200 hover:text-[#FFDF20] font-medium transition-all duration-300 group"
            >
              {link.label}
              {/* Yellow hover underline */}
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-[#FFDF20] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Contact Info (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-gray-200">

          {/* Phone */}
          <a
            href="tel:01332224229"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-transparent hover:border-[#FFDF20] hover:bg-[#0F216B]/40 hover:text-[#FFDF20] transition-all duration-300 hover:scale-105"
          >
            <FiPhone className="text-[18px] transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-sm font-medium tracking-wide">
              01332 224229
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:atbmotorengineers@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-transparent hover:border-[#FFDF20] hover:bg-[#1E3A8A]/40 hover:text-[#FFDF20] transition-all duration-300 hover:scale-105"
          >
            <FiMail className="text-[18px]" />
            <span className="text-sm font-medium tracking-wide">
              atbmotorengineers@gmail.com
            </span>
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none hover:text-[#FFDF20] transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/70 backdrop-blur-lg border-t border-white/10 overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              smooth
              key={link.href}
              to={link.href}
              className="text-gray-200 font-medium text-lg hover:text-[#FFDF20] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col items-center gap-3 pt-5 border-t border-white/10 w-full">
            
            {/* Phone */}
            <a
              href="tel:01332224229"
              className="flex items-center gap-2 text-gray-200 hover:text-[#FFDF20] transition-all duration-300 hover:scale-105"
            >
              <FiPhone />
              <span className="text-sm">01332 224229</span>
            </a>

            {/* Email */}
            <a
              href="mailto:atbmotorengineers@gmail.com"
              className="flex items-center gap-2 text-gray-200 hover:text-[#FFDF20] transition-all duration-300 hover:scale-105"
            >
              <FiMail />
              <span className="text-sm">atbmotorengineers@gmail.com</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;