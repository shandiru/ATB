import React from "react";
import { FaCar, FaCogs, FaTools, FaWrench, FaBolt, FaCertificate } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const services = [
  {
    icon: <FaCertificate className="text-4xl text-[#1E3A8A]" />,
    title: "MOT",
    description: "Comprehensive MOT testing preparation services",
    features: [
      "Pre-MOT inspections",
      "Emissions testing",
      "Lighting and electrical checks",
      "Brake and suspension inspections",
      "Documentation and certification",
      "Post-failure repair services",
    ],
  },
  {
    icon: <FaCogs className="text-4xl text-[#1E3A8A]" />,
    title: "Service",
    description: "Routine vehicle servicing for optimal performance",
    features: [
      "Oil and filter changes",
      "Fluid level checks and top-ups",
      "Battery and charging system checks",
      "Tyre pressure and tread inspection",
      "Full and interim service packages",
      "Service light reset",
    ],
  },
  {
    icon: <FaTools className="text-4xl text-[#1E3A8A]" />,
    title: "Chain/Belts (Wet Belt Specialist)",
    description: "Expert timing chain and wet belt services",
    features: [
      "Wet belt inspections and replacement",
      "Timing chain servicing",
      "Tensioner and pulley checks",
      "Engine synchronization",
      "OEM parts usage",
      "Specialist tools and diagnostics",
    ],
  },
  {
    icon: <FaWrench className="text-4xl text-[#1E3A8A]" />,
    title: "Welding",
    description: "Professional automotive welding services",
    features: [
      "Structural chassis welding",
      "Exhaust pipe repairs",
      "Bodywork welding",
      "Aluminium and stainless welding",
      "Rust damage repair",
      "Custom fabrication",
    ],
  },
  {
    icon: <FaBolt className="text-4xl text-[#1E3A8A]" />,
    title: "Mechanical Repairs",
    description: "All types of mechanical repairs for your vehicle",
    features: [
      "Brake and suspension repairs",
      "Steering system servicing",
      "Clutch and gearbox repairs",
      "Cooling system diagnostics",
      "Exhaust and emission systems",
      "Full mechanical fault diagnostics",
    ],
  },
];

const OurServicesGrid = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-center mb-6">
          Our Services
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Comprehensive motor engineering services delivered by experienced
          professionals using the latest equipment and techniques.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                {service.icon}
                <h5 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h5>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                {service.description}
              </p>

              {/* Feature List */}
              <ul>
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-700 hover:text-[#1E3A8A] transition"
                  >
                    <IoMdCheckmarkCircleOutline className="text-[#1E3A8A] mt-[2px] w-4 h-4 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesGrid;
