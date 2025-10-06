import React from "react";

const brands = [
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Volkswagen",
  "Ford",
  "Vauxhall",
  "Toyota",
  "Honda",
  "Nissan",
  "Peugeot",
  "Renault",
  "Citroen",
  "Land Rover",
  "Jaguar",
  "Mini",
  "Volvo",
  "Mazda",
  "Hyundai",
  "Kia",
  "Subaru",
];

const VehicleSpecializations = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h4 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-8">
          Vehicle Specializations
        </h4>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We proudly service a wide range of vehicle makes and models, combining
          modern diagnostic technology with years of expertise across both European
          and Asian manufacturers.
        </p>

        {/* Chip Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {brands.map((brand, index) => (
            <span
              key={index}
              className="px-5 py-2 border border-[#1E3A8A] text-[#1E3A8A] font-medium text-sm rounded-full cursor-default hover:bg-[#1E3A8A] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleSpecializations;
