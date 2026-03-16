import { FaCalendarAlt, FaCar, FaBroom, FaFileAlt } from "react-icons/fa";

const stats = [
  {
    icon: <FaCalendarAlt className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Don’t Ignore Engine Noise",
    desc: "Rattling or ticking sounds often signal timing issues—get it checked immediately to avoid serious damage.",
  },
  {
    icon: <FaCar className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Check Service Intervals",
    desc: "Wet belts usually require replacement every 6–10 years or 60,000–100,000 miles, depending on your vehicle model.",
  },
  {
    icon: <FaBroom className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Use Certified Specialists",
    desc: "Timing work demands precision—always choose an expert with the correct tools and OEM-approved procedures.",
  },
  {
    icon: <FaFileAlt className="mx-auto text-4xl text-[#1E3A8A]" />,
    label: "Replace Together",
    desc: "When replacing a timing belt or chain, always replace the water pump, tensioners, and pulleys for complete reliability.",
  },
];

const ChainStatsSection = () => {

  return (
    <section className="py-16 bg-gray-50" id="stats">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-md p-8 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(30,58,138,0.3)]"
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

export default ChainStatsSection;