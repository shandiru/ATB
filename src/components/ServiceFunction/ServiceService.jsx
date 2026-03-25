import { ClipboardCheck, Droplets, Volume2, History } from "lucide-react";

const stats = [
  {
    icon: <ClipboardCheck className="text-4xl mx-auto text-[#1E3A8A]" />,
    title: "Follow Your Service Schedule",
    desc: "Stick to your vehicle’s recommended service intervals—usually every 6 or 12 months—to keep it running at its best.",
  },
  {
    icon: <Droplets className="text-4xl mx-auto text-[#1E3A8A]" />,
    title: "Use Quality Parts & Fluids",
    desc: "Always opt for genuine or approved components and high-grade fluids to protect your engine and systems.",
  },
  {
    icon: <Volume2 className="text-4xl mx-auto text-[#1E3A8A]" />,
    title: "Listen to Your Car",
    desc: "Unusual noises, vibrations, or dashboard warnings often mean it’s time for a check-up—don’t ignore them.",
  },
  {
    icon: <History className="text-4xl mx-auto text-[#1E3A8A]" />,
    title: "Keep Records",
    desc: "Maintain your service history—it proves care, preserves value, and builds buyer confidence.",
  },
];

const ServiceStatsSection = () => {

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
                {stat.title}
                {/* Yellow underline */}
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

export default ServiceStatsSection;