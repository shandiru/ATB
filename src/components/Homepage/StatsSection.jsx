import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Emergency Support" },
];

const StatsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,  // 🔁 animations trigger multiple times
      mirror: true, // 🔄 replay when scrolling up
      offset: 100,  // trigger a bit before element is fully visible
    });
  }, []);

  return (
    <section className="py-16 bg-gray-50" id="stats">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} // alternate animation
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-md hover:shadow-[0_0_25px_rgba(30,58,138,0.3)] p-8 transition-all duration-500 transform hover:-translate-y-2"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-2">
                {stat.value}
              </h3>
              <h6 className="text-gray-700 font-medium text-sm md:text-base">
                {stat.label}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
