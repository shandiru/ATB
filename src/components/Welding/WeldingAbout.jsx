import React, { useEffect } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const sections = [
  {
    title: "What's Included",
    item: [
      "Structural chassis inspection and welding repairs",
      "Exhaust pipe and joint restoration",
      "Bodywork welding and corrosion repair",
      "Aluminium, stainless steel, and mild steel welding",
      "Rust damage treatment and prevention",
      "Custom fabrication and reinforcement work"
    ]
  },
  {
    title: "Benefits",
    item: [
      "Restores vehicle strength and safety",
      "Extends lifespan of bodywork and components",
      "Prevents further rust and corrosion damage",
      "Suitable for MOT and insurance repairs",
      "Performed by certified, experienced welders"
    ]
  },
  {
    title: "Ideal For",
    item: [
      "Vehicles with structural or body corrosion",
      "Classic and restoration projects",
      "Exhaust leaks or broken mounting points",
      "MOT failures due to rusted chassis or panels",
      "Custom fabrication or modification work"
    ]
  }
];

const WeldingAbout = () => {
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
            className="bg-gray-200 p-8 rounded-lg shadow-md hover:shadow-[0_0_25px_rgba(30,58,128,0.3)] transform hover:scale-105 transition-all duration-500"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6">{section.title}</h3>
            <ul className="space-y-4">
              {section.item.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <IoMdCheckmarkCircleOutline className="text-[#1E3A8A] text-lg mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeldingAbout;
