import React, { useState } from "react";
import { FiPhone, FiMail, FiMenu, FiX } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/services", label: "Our Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6 lg:px-10">
        {/* Logo */}
        <Link smooth to="/#home" className="flex items-center gap-2">
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
              className={`relative text-[16px] tracking-wide text-gray-200 hover:text-white font-medium transition-all duration-300 group ${window.location.hash === link.href.split("#")[1]
                ? "text-white font-semibold"
                : ""
                }`}
            >
              {link.label}
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-[#1E3A8A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Contact Info (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-gray-200">
          {/* Phone / WhatsApp Link */}
          <a
            href="tell: 01332 224229" // WhatsApp link (use your country code, e.g., +44 for UK)
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <FiPhone className="text-[18px]" />
            <span className="text-sm font-medium">01332 224229</span>
          </a>

          {/* Email Link */}
          <a
            href="mailto:atbmotorengineers@gmail.com"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <FiMail className="text-[18px]" />
            <span className="text-sm font-medium">
              atbmotorengineers@gmail.com
            </span>
          </a>
        </div>


        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/70 backdrop-blur-lg border-t border-white/10 overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[400px]" : "max-h-0"
          }`}
      >
        <nav className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              smooth
              key={link.href}
              to={link.href}
              className="text-gray-200 font-medium text-lg hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col items-center gap-3 pt-5 border-t border-white/10 w-full">
            {/* Phone / WhatsApp Link */}
            <a
              href="tel: 01332 224229" // Replace with your full number (no '+' or spaces)
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
            >
              <FiPhone />
              <span className="text-sm">01332 224229</span>
            </a>

            {/* Email Link */}
            <a
              href="mailto:atbmotorengineers@gmail.com"
              className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
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
