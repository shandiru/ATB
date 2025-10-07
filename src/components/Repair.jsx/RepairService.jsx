import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCalendarAlt, FaCar, FaBroom, FaFileAlt } from "react-icons/fa"; // import icons

const stats = [
  {
    icon: <FaCalendarAlt className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Don’t Ignore Warning Lights",
    desc: "Dashboard alerts can signal serious issues—early checks prevent major repairs later.",
  },
  {
    icon: <FaCar className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Listen and Feel",
    desc: "Grinding, vibration, or pulling while driving are early signs something’s off—get it checked promptly.",
  },
  {
    icon: <FaBroom className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Stick to Regular Servicing",
    desc: "Routine maintenance keeps mechanical systems running smoothly and catches problems early.",
  },
  {
    icon: <FaFileAlt className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Ask for Diagnostics",
    desc: "Modern vehicles rely on sensors—professional diagnostics reveal the root cause before parts are replaced.",
  },
];

const RepairStatsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-16 bg-gray-50" id="stats">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-md hover:shadow-[0_0_25px_rgba(30,58,138,0.3)] p-8 transition-all duration-500 transform hover:-translate-y-2"
            >
              {stat.icon}
              <h6 className="text-gray-700 font-medium text-sm mt-5 md:text-base">
                {stat.label}
              </h6>
              <h6 className="text-gray-700 font-medium text-sm mt-3 md:text-base">
                {stat.desc}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepairStatsSection;
