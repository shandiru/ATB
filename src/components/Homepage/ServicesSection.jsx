import React, { useEffect, useState } from "react";
import {
  FaTools,
  FaCogs,
  FaWrench,
  FaHammer,
  FaCar,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: <FaCar className="text-4xl text-[#1E3A8A]" />,
    title: "MOT Testing",
    desc: "Prep and testing to meet safety standards.",
  },
  {
    icon: <FaCogs className="text-4xl text-[#1E3A8A]" />,
    title: "Servicing",
    desc: "Routine checks to keep your car smooth.",
  },
  {
    icon: <FaWrench className="text-4xl text-[#1E3A8A]" />,
    title: "Chains & Belts",
    desc: "Specialist in wet belts & timing chains.",
  },
  {
    icon: <FaHammer className="text-4xl text-[#1E3A8A]" />,
    title: "Welding",
    desc: "Structural and body welding services.",
  },
  {
    icon: <FaTools className="text-4xl text-[#1E3A8A]" />,
    title: "Mechanical Repairs",
    desc: "Repairs for brakes, exhausts, suspension.",
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      mirror: true, // works both scrolling up & down
    });
  }, []);

  const handleMobileClick = (index) => {
    if (window.innerWidth < 768) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <h4
          data-aos="fade-down"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1E3A8A] mb-14"
        >
          Our Motor Engineering Services
        </h4>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-delay={index * 100}
              onClick={() => handleMobileClick(index)}
              className={`cursor-pointer bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center 
                transition-all duration-500 transform hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(30,58,138,0.5)] 
                ${
                  activeIndex === index
                    ? "bg-[#E6ECFF] shadow-[0_0_25px_rgba(30,58,138,0.6)] scale-105"
                    : "hover:scale-105"
                }`}
            >
              <div className="mb-5">{service.icon}</div>
              <h6 className="text-lg font-semibold mb-2 text-gray-800">
                {service.title}
              </h6>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
