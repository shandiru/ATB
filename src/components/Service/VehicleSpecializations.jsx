import React, { useState, useEffect } from "react";

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

  const logos = [
    { url: "/logo1-removebg-preview.png", width: 180 },
    { url: "/Mercedes-Benz-removebg-preview.png", width: 80 },
    { url: "/Color-Audi-logo-removebg-preview.png", width: 160 },
    { url: "/images-removebg-preview.png", width: 90 },
    { url: "/logo4-removebg-preview.png", width: 130 },
    { url: "/Vauxhall-Logo-removebg-preview.png", width: 130 },
    { url: "/Toyota-removebg-preview.png", width: 200 },
    { url: "/Honda.svg-removebg-preview.png", width: 90 },
    { url: "/Peugeot-logo-removebg-preview.png", width: 90 },
  ];

  // Duplicate for seamless infinite loop
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section
      id="vehicle-specializations"
      className={`overflow-hidden transition-opacity duration-1000 py-10 border-t border-white/10 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="container mx-auto px-4 mb-8 text-center">
        <h4 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
          Vehicle Specializations
        </h4>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We proudly service a wide range of vehicle makes and models, combining
          modern diagnostic technology with years of expertise.
        </p>
      </div>

      <div className="relative flex overflow-hidden max-w-5xl mx-auto">
        {/* The Scrolling Track */}
        <div className="flex animate-scroll hover:pause items-center ">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="shrink-0 flex items-center justify-center px-6 sm:px-12"
            >
              <img
                src={logo.url}
                alt={`Vehicle brand ${index + 1}`}
                style={{ width: `${logo.width}px` }}
                className="h-auto max-w-full transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

     .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .hover\\:pause:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 20s;
          }
        }

        @media (min-width: 1024px) {
          .animate-scroll {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
}