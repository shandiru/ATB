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
    { url: "/logo1-removebg-preview.png", width: 140 },
    { url: "/Mercedes-Benz-removebg-preview.png", width: 70 },
    { url: "/Color-Audi-logo-removebg-preview.png", width: 140 },
    { url: "/images-removebg-preview.png", width: 80 },
    { url: "/logo4-removebg-preview.png", width: 110 },
    { url: "/Vauxhall-Logo-removebg-preview.png", width: 110 },
    { url: "/Toyota-removebg-preview.png", width: 160 },
    { url: "/Honda.svg-removebg-preview.png", width: 80 },
    { url: "/Peugeot-logo-removebg-preview.png", width: 80 },
  ];

  // Tripled for a perfectly smooth infinite loop on large screens
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section
      id="partners"
      className={`bg-[#1E3A8A] py-8 md:py-12 overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Added a Gradient Fade Mask to edges */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)]">
          <div className="flex items-center animate-scroll hover:pause py-4">
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="shrink-0 flex items-center justify-center px-6 sm:px-10 lg:px-16"
              >
                <img
                  src={logo.url}
                  alt="Partner brand"
                  style={{ width: `${logo.width}px` }}
                  className="h-auto max-w-[none] brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }

        .hover\\:pause:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 15s; /* Faster on mobile for better feel */
          }
          /* Ensure logos don't get too small or too big */
          img {
            transform: scale(0.85);
          }
        }
      `}</style>
    </section>
  );
}