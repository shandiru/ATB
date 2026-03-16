import React, { useState, useEffect, useRef } from "react";
import { FiPhone, FiMail, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const dropdownRef = useRef(null);

  const navLinks = [
    { href: "/", label: "Home" },
    {
      label: "Our Services",
      dropdown: [
        { href: "/services", label: "All Services" },
        { href: "/services/mot", label: "MOT" },
        { href: "/services/service", label: "Service" },
        { href: "/services/chain-belts", label: "Chain/Belts" },
        { href: "/services/welding", label: "Welding" },
        { href: "/services/mechanical-repair", label: "Mechanical Repair" },
      ],
    },
    { href: "/gallery", label: "Gallery" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});

  // Toggle mobile dropdown
  const toggleMobileDropdown = (label) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 border-b ${scrolled
        ? "bg-[#0F216B] shadow-lg border-[#0F216B]"
        : "bg-black/40 backdrop-blur-md border-white/10"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-1 px-6 lg:px-10">
        <Link smooth to="/" className="flex items-center gap-2" onClick={closeAll}>
          <img
            src="/image.png"
            alt="Company Logo"
            className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 items-center relative">
          {navLinks.map((link, idx) => {
            if (link.dropdown) {
              return (
                <div key={idx} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex items-center gap-1 text-[16px] tracking-wide font-medium transition-all duration-300 outline-none ${scrolled ? "text-white" : "text-gray-200"
                      }`}
                  >
                    {link.label}{" "}
                    <FiChevronDown
                      className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <div
                    className={`absolute left-0 mt-4 w-52 bg-[#0F216B] rounded-md shadow-xl border border-white/10 transition-all duration-300 z-50 ${servicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                      }`}
                  >
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        smooth
                        to={item.href}
                        onClick={closeAll}
                        className="block px-4 py-3 text-gray-200 hover:bg-white/10 hover:text-white transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                smooth
                key={idx}
                to={link.href}
                className={`relative text-[16px] tracking-wide font-medium transition-all duration-300 group ${scrolled ? "text-white" : "text-gray-200"
                  }`}
              >
                {link.label}
                <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-[#969695]"></span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Contact */}
        <div className="hidden lg:flex items-center gap-8 text-gray-200">
          <a href="tel:01332224229" className="flex items-center gap-2 hover:text-[#969695] transition-all">
            <FiPhone /> <span className="text-sm">01332 224229</span>
          </a>
          <a href="mailto:atbmotorengineers@gmail.com" className="flex items-center gap-2 hover:text-[#969695] transition-all">
            <FiMail /> <span className="text-sm">atbmotorengineers@gmail.com</span>
          </a>
        </div>

        <button
          className="lg:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu - FIXED RESPONSIVENESS */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out bg-[#0F216B] overflow-y-auto ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        style={{ height: isOpen ? 'calc(100vh - 70px)' : '0px' }} // 70px is approx navbar height
      >
        <nav className="flex flex-col p-6 pb-20 space-y-4">
          {navLinks.map((link, idx) => {
            if (link.dropdown) {
              const isOpenMobile = mobileDropdownOpen[link.label];
              return (
                <div key={idx} className="w-full">
                  <button
                    onClick={() => toggleMobileDropdown(link.label)}
                    className="w-full flex justify-between items-center text-gray-200 font-medium text-xl py-2"
                  >
                    {link.label}
                    <FiChevronDown className={`transition-transform duration-300 ${isOpenMobile ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className={`flex flex-col overflow-hidden transition-all duration-500 ease-in-out ${isOpenMobile ? "max-h-[500px] mt-2 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        smooth
                        to={item.href}
                        className="py-3 pl-4 text-gray-400 text-lg border-l border-white/10 active:bg-white/5"
                        onClick={closeAll}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={idx}
                smooth
                to={link.href}
                className="text-gray-200 font-medium text-xl py-2"
                onClick={closeAll}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mobile Contact Info inside menu for better UX */}
          <div className="pt-8 border-t border-white/10 space-y-4">
            <a href="tel:01332224229" className="flex items-center gap-3 text-gray-300">
              <FiPhone /> <span>01332 224229</span>
            </a>
            <a href="mailto:atbmotorengineers@gmail.com" className="flex items-center gap-3 text-gray-300">
              <FiMail /> <span className="text-xs sm:text-base">atbmotorengineers@gmail.com</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;