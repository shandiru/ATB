import React, { useState } from "react";
import { FiPhone, FiMail, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Our Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6 lg:px-10">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/image.png"
            alt="Company Logo"
            className="h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-[16px] tracking-wide text-slate-600 hover:text-[#1E3A8A] font-medium transition-all duration-300 group ${
                window.location.pathname === link.href
                  ? "text-[#1E3A8A] font-semibold"
                  : ""
              }`}
            >
              {link.label}
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-[#1E3A8A] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Contact Info (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-slate-700">
          <div className="flex items-center gap-2 hover:text-[#1E3A8A] transition-colors duration-300">
            <FiPhone className="text-[18px]" />
            <span className="text-sm font-medium">01332 224229</span>
          </div>
          <div className="flex items-center gap-2 hover:text-[#1E3A8A] transition-colors duration-300">
            <FiMail className="text-[18px]" />
            <span className="text-sm font-medium">atbmotorengineers@gmail.com</span>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-gray-800 text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-inner border-t border-gray-200 overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700 font-medium text-lg hover:text-[#1E3A8A] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="flex flex-col items-center gap-3 pt-5 border-t border-gray-100 w-full">
            <div className="flex items-center gap-2 text-slate-700">
              <FiPhone />
              <span className="text-sm">01332 224229</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <FiMail />
              <span className="text-sm">atbmotorengineers@gmail.com</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
