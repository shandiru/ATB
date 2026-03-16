import React from "react";
import { Link } from "react-router-dom";
import { FaCar, FaTools, FaCogs, FaWrench, FaScrewdriver } from "react-icons/fa";

const services = [
  {
    id: "1",
    title: "MOT",
    imgSrc: "/mot.png",
    link: "/services/mot",
    icon: <FaCar className="text-[#969695]" />,
    description: "Prep and testing to meet safety standards.",
  },
  {
    id: "2",
    title: "Service",
    imgSrc: "/service.png",
    link: "/services/service",
    icon: <FaTools className="text-[#969695]" />,
    description: "Routine checks to keep your car smooth.",
  },
  {
    id: "3",
    title: "Chain/Belts (Wet Belt Specialist)",
    imgSrc: "/belts.png",
    link: "/services/chain-belts",
    icon: <FaCogs className="text-[#969695]" />,
    description: "Specialist in wet belts & timing chains.",
  },
  {
    id: "4",
    title: "Welding",
    imgSrc: "/welding.png",
    link: "/services/welding",
    icon: <FaWrench className="text-[#969695]" />,
    description: "Structural and body welding services.",
  },
  {
    id: "5",
    title: "Mechanical Repairs",
    imgSrc: "/mechanical-repair.png",
    link: "/services/mechanical-repair",
    icon: <FaScrewdriver className="text-[#969695]" />,
    description: "Repairs for brakes, exhausts, suspension.",
  },
];

const OurServices = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[#1E3A8A] text-3xl sm:text-4xl font-extrabold uppercase tracking-wide">
          Our Services
        </h2>
        <div className="w-20 h-1 bg-[#969695] mx-auto my-4 rounded-full"></div>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Providing professional, high-quality motor engineering services to keep your vehicle safe, efficient, and road-ready
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col h-full"
          >
            {/* Image */}
            <div className="relative w-full aspect-[4/3]">
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1E3A8A] mb-4 text-2xl">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#1E3A8A] font-bold text-xl sm:text-2xl mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base flex-grow">{service.description}</p>

              {/* Button */}
              <div className="mt-4">
                <Link
                  to={service.link}
                  className="inline-block bg-[#969695] text-[#0F216B] font-bold px-5 py-2 rounded-lg uppercase text-sm tracking-wide transition-all duration-300 hover:bg-[#1E3A8A] hover:text-white shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;