import React from "react";
import { Award, Drill, Settings, UserCheck } from "lucide-react";

const features = [
  {
    icon: <Award className="w-8 h-8 text-[#FFDF20]" />,
    text: "Years of hands-on experience delivering professional motor engineering services across Derby and surrounding areas.",
  },
  {
    icon: <Drill className="w-8 h-8 text-[#FFDF20]" />,
    text: "Specialists in MOT preparation, servicing, wet belt replacements, welding, and complex mechanical repairs.",
  },
  {
    icon: <Settings className="w-8 h-8 text-[#FFDF20]" />,
    text: "Equipped with modern diagnostic technology and industry-approved tools to ensure accurate and efficient results.",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-[#FFDF20]" />,
    text: "Customer-focused service with transparent pricing, clear communication, and attention to detail on every vehicle.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div>
            <img
              src="whoare.jpg"
              alt="About us"
              className="w-full max-w-[580px] rounded-3xl object-cover shadow-xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Caption */}
            <span className="block mb-5 text-[#1E3A8A] font-semibold tracking-wide uppercase">
              Who We Are
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F216B] mb-6">
              Trusted Motor Engineering Specialists in Derby
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-12 max-w-xl">
              Building long-term customer relationships through expert workmanship,
              honest advice, and dependable automotive solutions.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-14">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1E3A8A] group-hover:bg-[#0F216B] transition-all duration-300">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;