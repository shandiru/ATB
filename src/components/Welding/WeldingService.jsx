import { FaCalendarAlt, FaCar, FaBroom, FaFileAlt } from "react-icons/fa";

const stats = [
  {
    icon: <FaCalendarAlt className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Act Early",
    desc: "Address rust or cracks as soon as you spot them—early welding can save you from major repairs later.",
  },
  {
    icon: <FaCar className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Clean Underside Regularly",
    desc: "Regular washing (especially in winter) helps prevent corrosion on the chassis and underbody.",
  },
  {
    icon: <FaBroom className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Combine with MOT Prep",
    desc: "If your vehicle has rust near key structural points, include welding in your MOT preparation for a smoother pass.",
  },
  {
    icon: <FaFileAlt className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Choose the Right Material",
    desc: "Ensure welding matches your vehicle’s metal type—aluminium, stainless, or mild steel—to guarantee strength and longevity.",
  },
];

const WeldingStatsSection = () => {

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
              <h6 className="text-[#0F216B] font-semibold text-base mt-5 relative inline-block">
                {stat.label}
                <span className="block w-12 h-1 bg-[#969695] rounded-full mt-2 mx-auto"></span>
              </h6>
              <p className="text-gray-700 text-sm md:text-base mt-3">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeldingStatsSection;