"use client";
import React from "react";
import { Link } from "react-router-dom";
import { FaCar, FaTools, FaCogs, FaWrench, FaScrewdriver } from "react-icons/fa";

const services = [
  {
    id: "1",
    title: "MOT",
    imgSrc: "/mot.png",
    link: "/services/mot",
    icon: <FaCar className="w-8 h-8 text-[#969695]" />,
    description: "Prep and testing to meet safety standards.",
  },
  {
    id: "2",
    title: "Service",
    imgSrc: "/service.png",
    link: "/services/service",
    icon: <FaTools className="w-8 h-8 text-[#969695]" />,
    description: "Routine checks to keep your car smooth.",
  },
  {
    id: "3",
    title: "Chain/Belts (Wet Belt Specialist)",
    imgSrc: "/belts.png",
    link: "/services/chain-belts",
    icon: <FaCogs className="w-8 h-8 text-[#969695]" />,
    description: "Specialist in wet belts & timing chains.",
  },
  {
    id: "4",
    title: "Welding",
    imgSrc: "/welding.png",
    link: "/services/welding",
    icon: <FaWrench className="w-8 h-8 text-[#969695]" />,
    description: "Structural and body welding services.",
  },
  {
    id: "5",
    title: "Mechanical Repairs",
    imgSrc: "/mechanical-repair.png",
    link: "/services/mechanical-repair",
    icon: <FaScrewdriver className="w-8 h-8 text-[#969695]" />,
    description: "Repairs for brakes, exhausts, suspension.",
  },
];

const OurServices = () => {
  return (
    <section className="w-full bg-white py-14">
      {/* Heading */}
      <div className="text-center mb-10 md:mb-14 px-4">
        <h2 className="text-[#1E3A8A] text-3xl sm:text-4xl font-extrabold uppercase tracking-wide">
          Our Services
        </h2>
        <div className="w-20 h-1 bg-[#969695] mx-auto my-4 rounded-full"></div>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Providing professional, high-quality motor engineering services to
          keep your vehicle safe, efficient, and road-ready
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative h-[350px] rounded-xl overflow-hidden shadow-xl group transition-transform duration-500 hover:scale-[1.03]"
          >
            {/* Image */}
            <img
              src={service.imgSrc}
              alt={service.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Blue Overlay */}
            <div className="absolute inset-0  group-hover:bg-[#0F216B]/55 transition-all duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center px-6 py-6 text-white">
              <div>
                {/* Icon */}
                <div className="mb-4 text-[#969695] text-4xl drop-shadow-lg">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-3 drop-shadow-lg">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-sm md:text-lg max-w-xs drop-shadow-md">
                  {service.description}
                </p>
              </div>

              {/* Button */}
              <Link
                to={service.link}
                className="bg-[#969695] text-[#0F216B] font-bold px-6 py-3 rounded-lg uppercase text-sm tracking-wide transition-all duration-300 hover:bg-[#1E3A8A] hover:text-white shadow-lg"
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