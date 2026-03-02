import React, { useState, useEffect } from "react";

const vehicleBrands = [
  "BMW","Mercedes-Benz","Audi","Volkswagen","Ford","Vauxhall",
  "Toyota","Honda","Nissan","Peugeot","Renault","Citroen",
  "Land Rover","Jaguar","Mini","Volvo","Mazda","Hyundai","Kia","Subaru",
];

export default function VehicleSpecializations() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("vehicle-specializations");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const allBrands = [...vehicleBrands, ...vehicleBrands];

  return (
    <section
      id="vehicle-specializations"
      className={`bg-white py-16 px-6 md:px-12 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h4 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
          Vehicle Specializations
        </h4>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We proudly service a wide range of vehicle makes and models, combining
          modern diagnostic technology with years of expertise across both European
          and Asian manufacturers.
        </p>

        {/* Infinite Scroll Text Chips */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll hover:pause gap-4">
            {allBrands.map((brand, index) => (
              <span
                key={index}
                className="px-5 py-2 border border-[#1E3A8A] text-[#1E3A8A] font-medium text-sm rounded-full cursor-default 
                           hover:bg-[#FFDF20] hover:text-[#0F216B] transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 35s linear infinite;
          }

          .hover\\:pause:hover {
            animation-play-state: paused;
          }

          @media (max-width: 640px) { .animate-scroll { animation-duration: 20s; } }
          @media (min-width: 1024px) { .animate-scroll { animation-duration: 45s; } }
        `}</style>
      </div>
    </section>
  );
}