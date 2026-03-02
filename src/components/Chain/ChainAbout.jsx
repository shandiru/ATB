import React, { useEffect } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const sections = [
  {
    title: "What's Included",
    item: [
      "Wet belt inspection, replacement, and realignment",
      "Timing chain servicing and replacement",
      "Tensioner, guide, and pulley checks",
      "Engine synchronization and recalibration",
      "OEM and manufacturer-approved parts",
      "Specialist tools and diagnostic procedures"
    ]
  },
  {
    title: "Benefits",
    item: [
      "Prevents costly engine damage and failure",
      "Ensures smooth, quiet, and reliable performance",
      "Maintains correct engine timing and efficiency",
      "Extends engine lifespan and fuel economy",
      "Backed by specialist expertise and equipment"
    ]
  },
  {
    title: "Ideal For",
    item: [
      "Vehicles with Ford EcoBoost or PSA wet belt engines",
      "Cars showing timing noise or performance issues",
      "High-mileage vehicles due for timing replacement",
      "Drivers seeking preventative maintenance",
      "Anyone wanting expert inspection before major repair"
    ]
  }
];

const ChainAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="text-black py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {sections.map((section, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-[0_0_25px_rgba(30,58,138,0.3)] transform hover:scale-105 transition-all duration-500"
          >
            <h3 className="text-[#0F216B] text-xl md:text-2xl font-bold mb-6">
              {section.title}
            </h3>
            <ul className="space-y-4">
              {section.item.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {/* Yellow checkmark with hover glow */}
                  <IoMdCheckmarkCircleOutline 
                    className="text-[#FFDF20] text-lg mt-1 flex-shrink-0 transition-all duration-300 hover:drop-shadow-[0_0_6px_#FFDF20]" 
                  />
                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChainAbout;