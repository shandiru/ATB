import React, { useState, useEffect } from "react";

const vehicleBrands = [
  { name: "BMW", slug: "bmw" },
  { name: "Mercedes-Benz", slug: "mercedes" },
  { name: "Audi", slug: "audi" },
  { name: "Volkswagen", slug: "volkswagen" },
  { name: "Ford", slug: "ford" },
  { name: "Vauxhall", slug: "vauxhall" },
  { name: "Toyota", slug: "toyota" },
  { name: "Honda", slug: "honda" },
  { name: "Nissan", slug: "nissan" },
  { name: "Peugeot", slug: "peugeot" },
  { name: "Renault", slug: "renault" },
  { name: "Citroen", slug: "citroen" },
  { name: "Land Rover", slug: "landrover" },
  { name: "Jaguar", slug: "jaguar" },
  { name: "Mini", slug: "mini" },
  { name: "Volvo", slug: "volvo" },
  { name: "Mazda", slug: "mazda" },
  { name: "Hyundai", slug: "hyundai" },
  { name: "Kia", slug: "kia" },
  { name: "Subaru", slug: "subaru" },
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

  // Duplicate the list for the infinite scroll effect
  const allBrands = [...vehicleBrands, ...vehicleBrands];

  return (
    <section
      id="vehicle-specializations"
      className={`bg-white py-16 px-6 md:px-12 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
          Vehicle Specializations
        </h4>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We proudly service a wide range of vehicle makes and models, combining
          modern diagnostic technology with years of expertise.
        </p>

        {/* Infinite Scroll Container */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll hover:pause gap-6 py-4">
            {allBrands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 border border-[#1E3A8A]/20 bg-gray-50 text-[#1E3A8A] font-semibold text-sm rounded-xl cursor-default 
                           hover:bg-[#FFDF20] hover:text-[#0F216B] hover:border-[#FFDF20] transition-all duration-300 shadow-sm hover:shadow-lg whitespace-nowrap group"
              >
                {/* Logo Image */}
                <img
                  src={`https://cdn.simpleicons.org/${brand.slug}/1E3A8A`}
                  alt={`${brand.name} logo`}
                  className="w-6 h-6 object-contain group-hover:filter group-hover:brightness-0 transition-all duration-300"
                  onError={(e) => (e.target.style.display = 'none')} // Hide if logo fails to load
                />
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 40s linear infinite;
          }

          .hover\\:pause:hover {
            animation-play-state: paused;
          }

          @media (max-width: 640px) { 
            .animate-scroll { animation-duration: 25s; } 
          }
        `}</style>
      </div>
    </section>
  );
}