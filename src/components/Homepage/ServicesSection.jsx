"use client";
import React from "react";
import { Link } from "react-router-dom";
import { FaCar, FaTools, FaCogs, FaWrench, FaScrewdriver } from "react-icons/fa";

const services = [
  {
    id: "1",
    title: "MOT",
    imgSrc: "/back.jpg",
    link: "/services/mot",
    icon: <FaCar className="w-8 h-8 text-[#FFDF20]" />,
    description: "Prep and testing to meet safety standards.",
  },
  {
    id: "2",
    title: "Service",
    imgSrc: "/back.jpg",
    link: "/services/service",
    icon: <FaTools className="w-8 h-8 text-[#FFDF20]" />,
    description: "Routine checks to keep your car smooth.",
  },
  {
    id: "3",
    title: "Chain/Belts (Wet Belt Specialist)",
    imgSrc: "/back.jpg",
    link: "/services/chain-belts",
    icon: <FaCogs className="w-8 h-8 text-[#FFDF20]" />,
    description: "Specialist in wet belts & timing chains.",
  },
  {
    id: "4",
    title: "Welding",
    imgSrc: "/back.jpg",
    link: "/services/welding",
    icon: <FaWrench className="w-8 h-8 text-[#FFDF20]" />,
    description: "Structural and body welding services.",
  },
  {
    id: "5",
    title: "Mechanical Repairs",
    imgSrc: "/back.jpg",
    link: "/services/mechanical-repair",
    icon: <FaScrewdriver className="w-8 h-8 text-[#FFDF20]" />,
    description: "Repairs for brakes, exhausts, suspension.",
  },
];

const OurServices = () => {
  return (
    <section className="w-full bg-white text-black py-12 sm:py-16 md:py-20 overflow-x-hidden">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
        <h2 className="text-[#1E3A8A] text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase mb-2 sm:mb-3 tracking-wide">
          Our Services
        </h2>
        <div className="w-20 h-1 bg-[#FFDF20] mx-auto mb-4 rounded-full"></div>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
         Providing professional, high-quality motor engineering services to keep your vehicle safe, efficient, and road-ready
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-6 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative w-full h-[400px] transform transition-transform duration-500 hover:scale-[1.02] lg:hover:scale-[1.03] group"
          >
            {/* Background Image */}
            <img
              src={service.imgSrc}
              alt={service.title}
              className="w-full h-full object-cover rounded-xl shadow-lg"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0F216B]/20 group-hover:bg-[#0F216B]/40 transition-colors duration-300 rounded-xl"></div>

            {/* Text + Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
              {/* Icon */}
              <div className="mb-3">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-800 text-sm sm:text-base md:text-base mb-4">
                {service.description}
              </p>

              {/* Learn More Button */}
              <Link
                to={service.link}
                className="bg-[#FFDF20] text-[#0F216B] font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg uppercase text-xs sm:text-sm hover:bg-[#1E3A8A] hover:text-white transition-all duration-300 shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;