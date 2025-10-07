import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCalendarAlt, FaCar, FaBroom, FaFileAlt } from "react-icons/fa"; // import icons

const stats = [
  {
    icon: <FaCalendarAlt className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Book Early",
    desc: "Avoid the rush—schedule your MOT up to one month before expiry without losing your renewal date.",
  },
  {
    icon: <FaCar className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Check Basics",
    desc: "Before your MOT, ensure your tyres, lights, and wipers are in good condition—it can prevent simple failures.",
  },
  {
    icon: <FaBroom className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Keep It Clean",
    desc: "A clean car (especially under the bonnet and chassis) makes inspection easier and leaves a professional impression.",
  },
  {
    icon: <FaFileAlt className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Bring the Paperwork",
    desc: "Have your previous MOT certificate and V5C logbook ready to speed up the process.",
  },
];

const MotStatsSection = () => {
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

export default MotStatsSection;
