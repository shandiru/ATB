import React, { useEffect } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const sections = [
  {
    title: "What's Included",
    item: [
      "Engine oil and filter replacement",
      "Fluid level checks and top-ups (coolant, brake, screen wash, etc.)",
      "Battery and charging system inspection",
      "Tyre pressure, tread depth, and rotation checks",
      "Full and interim service packages available",
      "Service light reset and health report"
    ]
  },
  {
    title: "Benefits",
    item: [
      "Enhances performance and fuel efficiency",
      "Prevents unexpected repairs and breakdowns",
      "Extends engine life and component durability",
      "Maintains manufacturer warranty compliance",
      "Increases vehicle resale value"
    ]
  },
  {
    title: "Ideal For",
    item: [
      "Drivers following regular maintenance schedules",
      "Fleet vehicles needing consistent upkeep",
      "New car owners maintaining warranty coverage",
      "High-mileage vehicles requiring more frequent servicing",
      "Anyone wanting reliable, worry-free motoring"
    ]
  }
];

const ServiceAbout = () => {
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

export default ServiceAbout;
