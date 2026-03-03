"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Content object
const testimonialsContent = {
  headerSmall: "Testimonials",
  headerBig: "What Our Customers Say",
  description:
    "Our mission is to deliver precision, reliability, and workmanship you can trust. Here’s what our customers say about their experience with ATB Motor Engineers.",
  buttonText: "Speak to Our Team",
};

// Testimonials data (can later come from API)
const testimonialsData = [
    {
    initials: "JM",
    name: "James Mitchell",
    location: "Derby • December 2024",
    service: "Engine Rebuild",
    review:
      "Absolutely outstanding service from ATB Motor Engineers. They rebuilt my BMW's engine after a major failure, and it now runs better than when it was new. The attention to detail and professionalism throughout the process was exceptional. Highly recommended!",
  },
  {
    initials: "ST",
    name: "Sarah Thompson",
    location: "Nottingham • November 2024",
    service: "Performance Tuning",
    review:
      "Had my Audi remapped and fitted with a custom exhaust system. The difference in performance is incredible! The team explained everything clearly and delivered exactly what they promised. Will definitely be returning for future modifications.",
  },
  {
    initials: "MR",
    name: "Michael Roberts",
    location: "Leicester • October 2024",
    service: "Classic Car Restoration",
    review:
      "ATB restored my 1967 Jaguar E-Type to concours condition. The craftsmanship is second to none, and they treated my car like it was their own. The end result exceeded all my expectations. True professionals!",
  },
  {
    initials: "DW",
    name: "David Wilson",
    location: "Burton-on-Trent • November 2024",
    service: "Commercial Fleet Maintenance",
    review:
      "We've been using ATB for our company fleet maintenance for over two years. Their reliability, competitive pricing, and quality of work keeps our vehicles on the road and our business running smoothly. Excellent service every time.",
  },
  {
    initials: "EC",
    name: "Emma Clarke",
    location: "Derby • December 2024",
    service: "Brake System Repair",
    review:
      "My car failed its MOT due to brake issues. ATB diagnosed the problem quickly, provided a fair quote, and completed the work the same day. The brakes feel much better now. Great communication too!",
  },
  {
    initials: "RA",
    name: "Robert Anderson",
    location: "Ashby-de-la-Zouch • September 2024",
    service: "Turbo Installation",
    review:
      "Fantastic work installing a turbocharger on my Honda Civic. The team's expertise in performance modifications is evident in the quality of the installation and the impressive results. The car is transformed!",
  },
  {
    initials: "LJ",
    name: "Lisa Johnson",
    location: "Swadlincote • October 2024",
    service: "Gearbox Repair",
    review:
      "My gearbox was making terrible noises and the car was barely drivable. ATB diagnosed the issue, rebuilt the gearbox, and now it's smooth as silk. Fair pricing, excellent workmanship, and great communication.",
  },
  {
    initials: "MS",
    name: "Mark Stevens",
    location: "Coalville • August 2024",
    service: "Custom Fabrication",
    review:
      "Needed some custom brackets fabricated for a modification project. ATB's fabrication skills are top-notch — they understood exactly what I needed and delivered precision work. Their attention to detail is outstanding.",
  },
];

const TestimonialsSection = () => {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-cubic", once: false });
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white text-black py-24 px-6 md:px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header */}
      <div
        className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-14"
        data-aos="fade-up"
      >
        <div data-aos="fade-right">
          <p className="text-[#FFDF20] uppercase tracking-[5px] text-sm font-semibold mb-2">
            {testimonialsContent.headerSmall}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.2] text-[#1E3A8A]">
            {testimonialsContent.headerBig.split(" ")[0]}{" "}
            <span className="text-[#FFDF20]">
              {testimonialsContent.headerBig.split(" ")[2]}
            </span>{" "}
            {testimonialsContent.headerBig.split(" ").slice(3).join(" ")}
          </h2>
          <p className="text-[#0F216B] text-base mt-4 max-w-lg">
            {testimonialsContent.description}
          </p>
        </div>

        {/* Scroll Button */}
        <button
          onClick={() => scrollToSection("contact")}
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mt-8 md:mt-0 flex items-center gap-2 bg-[#FFDF20] hover:bg-[#1E3A8A] text-[#0F216B] hover:text-[#FFDF20] font-semibold uppercase px-8 py-3 rounded-md transition-all duration-300"
        >
          {testimonialsContent.buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Testimonials Rows */}
      {["left", "right"].map((direction, idx) => (
        <div
          key={idx}
          data-aos="fade-up"
          data-aos-delay={200 + idx * 200}
          className={`relative z-10 flex gap-8 mt-${idx === 0 ? "0" : "10"} animate-scroll-${
            direction
          }`}
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {[...testimonialsData, ...testimonialsData].map((item, i) => (
            <div
              key={`${direction}-${i}`}
              className="bg-[#1E3A8A]/10 border border-[#0F216B] rounded-2xl p-6 flex flex-col justify-between shrink-0 hover:border-[#FFDF20] transition-all duration-300 w-[340px] h-80"
            >
              <p className="italic text-[#0F216B] text-[15px] leading-relaxed line-clamp-8 overflow-hidden">
                “{item.review}”
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 flex items-center justify-center bg-[#FFDF20] text-[#0F216B] font-semibold rounded-full">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-[#1E3A8A] font-semibold text-sm">{item.name}</h4>
                  <p className="text-[#0F216B] text-xs">{item.location}</p>
                  <p className="text-[#1E3A8A] text-xs font-semibold">{item.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Animation Keyframes */}
      <style>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left 45s linear infinite; display: flex; width: max-content; }
        .animate-scroll-right { animation: scroll-right 50s linear infinite; display: flex; width: max-content; }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;



