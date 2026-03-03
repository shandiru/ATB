import React, { useState, useEffect } from "react";

export default function PartnersSection() {
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

    const section = document.getElementById("partners");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const logos = [
    { url: "/logo1-removebg-preview.png", width: 200 },
    { url: "/Mercedes-Benz-removebg-preview.png", width: 100 },
    { url: "/Color-Audi-logo-removebg-preview.png", width: 200 },
    { url: "/images-removebg-preview.png", width: 100 },
    { url: "/logo4-removebg-preview.png", width: 150 },
    { url: "/Vauxhall-Logo-removebg-preview.png", width: 150 },
    { url: "/Toyota-removebg-preview.png", width: 250 },
     { url: "/Honda.svg-removebg-preview.png", width: 100 },

  ];

  const allLogos = [...logos, ...logos]; // duplicate for seamless scroll

  return (
    <section
      id="partners"
      className={`bg-[#1E3A8A] overflow-hidden transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="flex animate-scroll hover:pause">
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="shrink-0 flex items-center justify-center px-8 sm:px-12 lg:px-16"
              >
                <img
                  src={logo.url}
                  alt={`Partner logo ${index + 1}`}
                  style={{ width: `${logo.width}px` }}
                  className="h-auto max-w-full rounded-2xl transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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