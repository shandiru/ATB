import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  "All",
  "Engine Services",
  "Performance Tuning",
  "Vehicle Repairs",
  "Custom Engineering",
  "Restoration",
  "Transmission Services",
];

const galleryItems = [
  {
    id: 1,
    category: "Engine Services",
    image: "/images/engine1.jpg",
    title: "Engine Overhaul",
  },
  {
    id: 2,
    category: "Performance Tuning",
    image: "/images/tuning1.jpg",
    title: "ECU Remapping",
  },
  {
    id: 3,
    category: "Vehicle Repairs",
    image: "/images/repair1.jpg",
    title: "Suspension Repair",
  },
  {
    id: 4,
    category: "Custom Engineering",
    image: "/images/custom1.jpg",
    title: "Custom Turbo Setup",
  },
  {
    id: 5,
    category: "Restoration",
    image: "/images/restore1.jpg",
    title: "Classic Car Restoration",
  },
  {
    id: 6,
    category: "Transmission Services",
    image: "/images/gearbox1.jpg",
    title: "Gearbox Repair",
  },
];

const WorkGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* === Category Filter Chips === */}
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-[#1E3A8A]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* === Gallery Grid === */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h5 className="text-white text-lg font-semibold text-center px-4">
                  {item.title}
                </h5>
              </div>
            </div>
          ))}
        </div>

        {/* No items message */}
        {filteredItems.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No projects found for this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default WorkGallery;
