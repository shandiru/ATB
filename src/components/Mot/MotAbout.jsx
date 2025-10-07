import React, { useEffect } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const sections = [
  {
    title: "What's Included",
    items: [
      "Full pre-MOT inspection and report",
      "Emissions testing and compliance check",
      "Lighting, electrical, and signalling inspection",
      "Brake, steering, and suspension checks",
      "Documentation and certification assistance",
      "Post-failure repairs and retesting service"
    ]
  },
  {
    title: "Benefits",
    items: [
      "Avoid unexpected MOT failures and repair costs",
      "Ensure your vehicle meets DVSA safety standards",
      "Improve road safety and vehicle reliability",
      "Fast turnaround with same-day service available",
      "Transparent pricing with no hidden fees"
    ]
  },
  {
    title: "Ideal For",
    items: [
      "Vehicle owners due for annual MOT testing",
      "Fleet operators requiring consistent compliance",
      "Drivers wanting peace of mind before testing",
      "Anyone purchasing or selling a used vehicle",
      "Commercial vans and Class 7 vehicles"
    ]
  }
];

const MotAbout = () => {
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
              {section.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <IoMdCheckmarkCircleOutline className="text-[#1E3A8A] mt-1 flex-shrink-0 text-lg" />
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

export default MotAbout;
