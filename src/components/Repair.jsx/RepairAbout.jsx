import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const sections = [
  {
    title: "What's Included",
    item: [
      "Brake and suspension inspection and repair",
      "Steering system servicing and adjustments",
      "Clutch, flywheel, and gearbox repairs",
      "Cooling system diagnostics and radiator replacement",
      "Exhaust and emission system repairs",
      "Full mechanical fault diagnostics and reporting"
    ]
  },
  {
    title: "Benefits",
    item: [
      "Restores vehicle reliability and performance",
      "Prevents breakdowns and costly future damage",
      "Improves handling, braking, and efficiency",
      "Uses OEM or equivalent high-quality parts",
      "Fast turnaround with transparent pricing"
    ]
  },
  {
    title: "Ideal For",
    item: [
      "Vehicles showing warning lights or unusual noises",
      "Cars with reduced performance or handling issues",
      "Fleet vehicles needing consistent maintenance",
      "Drivers preparing for MOT or long-distance travel",
      "Anyone seeking trusted, professional mechanical care"
    ]
  }
];

const RepairAbout = () => {

  return (
    <section className="text-black py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {sections.map((section, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-[0_0_25px_rgba(255,223,32,0.3)] transform hover:scale-105 transition-all duration-500"
          >
            <h3 className="text-[#0F216B] text-xl md:text-2xl font-bold mb-6">{section.title}</h3>
            <ul className="space-y-4">
              {section.item.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <IoMdCheckmarkCircleOutline 
                    className="text-[#969695] mt-1 flex-shrink-0 text-lg transition-all duration-300 hover:drop-shadow-[0_0_6px_#969695]" 
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

export default RepairAbout;