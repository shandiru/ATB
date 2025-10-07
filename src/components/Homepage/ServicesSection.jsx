// import React, { useEffect, useState } from "react";
// import { FaTools, FaCogs, FaWrench, FaHammer, FaCar } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const services = [
//   {
//     icon: <FaCar className="text-4xl text-[#1E3A8A]" />,
//     title: "MOT Testing",
//     desc: "Prep and testing to meet safety standards.",
//   },
//   {
//     icon: <FaCogs className="text-4xl text-[#1E3A8A]" />,
//     title: "Servicing",
//     desc: "Routine checks to keep your car smooth.",
//   },
//   {
//     icon: <FaWrench className="text-4xl text-[#1E3A8A]" />,
//     title: "Chains & Belts",
//     desc: "Specialist in wet belts & timing chains.",
//   },
//   {
//     icon: <FaHammer className="text-4xl text-[#1E3A8A]" />,
//     title: "Welding",
//     desc: "Structural and body welding services.",
//   },
//   {
//     icon: <FaTools className="text-4xl text-[#1E3A8A]" />,
//     title: "Mechanical Repairs",
//     desc: "Repairs for brakes, exhausts, suspension.",
//   },
// ];

// const ServicesSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       easing: "ease-in-out",
//       once: false,
//       mirror: true,
//     });
//   }, []);

//   const handleMobileClick = (index) => {
//     if (window.innerWidth < 768) {
//       setActiveIndex(activeIndex === index ? null : index);
//     }
//   };

//   return (
//     <section className="py-20 bg-gray-50 scroll-m-10" id="services">
//       <div className="max-w-7xl mx-auto px-6 md:px-10">
//         {/* Heading */}
//         <h4
//           data-aos="fade-down"
//           className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1E3A8A] mb-14"
//         >
//           Our Motor Engineering Services
//         </h4>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
//               data-aos-delay={index * 100}
//               onClick={() => handleMobileClick(index)}
//               className={`cursor-pointer bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center 
//                 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(30,58,138,0.5)] 
//                 ${
//                   activeIndex === index
//                     ? "bg-[#E6ECFF] shadow-[0_0_25px_rgba(30,58,138,0.6)] scale-105"
//                     : "hover:scale-105"
//                 }`}
//             >
//               <div className="mb-5">{service.icon}</div>
//               <h6 className="text-lg font-semibold mb-2 text-gray-800">
//                 {service.title}
//               </h6>
//               <p className="text-gray-600 text-sm">{service.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Learn More Button */}
//         <div className="mt-14 text-center" data-aos="fade-up">
//           <a
//             href="/services"
//             className="inline-block bg-[#1E3A8A] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#152c70] hover:shadow-lg transition-all duration-300"
//           >
//             Learn More
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import React from "react";
import { Link } from "react-router-dom";
import { FaCar, FaTools, FaCogs, FaWrench, FaScrewdriver } from "react-icons/fa";

const services = [
  {
    id: "1",
    title: "MOT",
    imgSrc: "/back.jpg",
    link: "/services/mot",
    icon: <FaCar />,
    description: "Prep and testing to meet safety standards.",
  },
  {
    id: "2",
    title: "Service",
    imgSrc: "/back.jpg",
    link: "/services/service",
    icon: <FaTools />,
    description: "Routine checks to keep your car smooth.",
  },
  {
    id: "3",
    title: "Chain/Belts (Wet Belt Specialist)",
    imgSrc: "/back.jpg",
    link: "/services/chain/belts",
    icon: <FaCogs />,
    description: "Specialist in wet belts & timing chains.",
  },
  {
    id: "4",
    title: "Welding",
    imgSrc: "/back.jpg",
    link: "/services/welding",
    icon: <FaWrench />,
    description: "Structural and body welding services.",
  },
  {
    id: "5",
    title: "Mechanical Repairs",
    imgSrc: "/back.jpg",
    link: "/services/mechanical-repair",
    icon: <FaScrewdriver />,
    description: "Repairs for brakes, exhausts, suspension.",
  },
];

const ServiceSection = () => {
  return (
    <section className="text-black py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Grid - 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.slice(0, 3).map((service, idx) => (
            <div
              key={service.id}
              className="relative rounded-lg overflow-hidden h-56 shadow-md cursor-pointer group"
              data-aos="fade-right"
              data-aos-delay={100 * (idx + 1)}
            >
              {/* Card Image */}
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Title Centered (default state) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-xl font-bold text-center px-2">{service.title}</h3>
              </div>

              {/* Overlay with Description and Link (hover state) */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black/60 transition-all duration-500 opacity-0 group-hover:opacity-100 text-center">
                <p className="text-white mb-3 text-sm md:text-base max-w-xs">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="bg-blue-700 text-white px-4 py-1.5 rounded hover:bg-blue-800 transition overflow-hidden relative group/button h-9 flex items-center justify-center"
                >
                  <span className="inline-block transition-transform duration-300 transform translate-y-0 group-hover/button:-translate-y-full">
                    Read More
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover/button:translate-y-0">
                    Read More
                  </span>
                </Link>
              </div>

              {/* Icon in corner */}
              <div className="absolute top-2 left-2 text-white text-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                {service.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Two Cards - Centered */}
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full lg:w-2/3">
            {services.slice(3).map((service, idx) => (
              <div
                key={service.id}
                className="relative rounded-lg overflow-hidden h-56 shadow-md cursor-pointer group"
                data-aos="fade-right"
                data-aos-delay={100 * (idx + 4)}
              >
                {/* Card Image */}
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Title Centered (default state) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="text-xl font-bold text-center px-2">{service.title}</h3>
                </div>

                {/* Overlay with Description and Link (hover state) */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black/60 transition-all duration-500 opacity-0 group-hover:opacity-100 text-center">
                  <p className="text-white mb-3 text-sm md:text-base max-w-xs">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="bg-blue-700 text-white px-4 py-1.5 rounded hover:bg-blue-800 transition overflow-hidden relative group/button h-9 flex items-center justify-center"
                  >
                    <span className="inline-block transition-transform duration-300 transform translate-y-0 group-hover/button:-translate-y-full">
                      Read More
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover/button:translate-y-0">
                      Read More
                    </span>
                  </Link>
                </div>

                {/* Icon in corner */}
                <div className="absolute top-2 left-2 text-white text-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  {service.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
