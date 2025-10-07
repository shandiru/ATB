import React from "react"; 
import { Link } from "react-router-dom"; // <-- import Link 
 
const services = [ 
  { 
    id: "1", 
    title: "MOT", 
    imgSrc: "/back.jpg", 
    link: "/services/mot", // <-- internal route 
    serial: "01", 
  }, 
  { 
    id: "2", 
    title: "Service", 
    imgSrc: "/back.jpg", 
    link: "/services/service", 
    serial: "02", 
  }, 
  { 
    id: "3", 
    title: "Chain/Belts (Wet Belt Specialist)", 
    imgSrc: "/back.jpg", 
    link: "/services/chain/belts", 
    serial: "03", 
  }, 
  { 
    id: "4", 
    title: "Welding", 
    imgSrc: "/back.jpg", 
    link: "/services/welding", 
    serial: "04", 
  }, 
  { 
    id: "5", 
    title: "Mechanical Repairs", 
    imgSrc: "/back.jpg", 
    link: "/services/mechanical-repair", 
    serial: "05", 
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
              className="relative rounded-lg overflow-hidden h-40 shadow-md cursor-pointer group" 
              data-aos="fade-right" 
              data-aos-delay={100 * (idx + 1)} 
            > 
              {/* Card Image */} 
              <img 
                src={service.imgSrc} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              /> 
 
              {/* Title Centered */} 
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500"> 
                <h3 className="text-xl font-bold text-center px-2">{service.title}</h3> 
              </div> 
 
              {/* Overlay with Link */} 
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black/50 transition-all duration-500 opacity-0 group-hover:opacity-100"> 
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
 
              {/* Serial number */} 
              <div className="absolute top-2 left-2 text-white text-2xl font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500"> 
                {service.serial} 
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
                className="relative rounded-lg overflow-hidden h-40 shadow-md cursor-pointer group" 
                data-aos="fade-right" 
                data-aos-delay={100 * (idx + 4)} 
              > 
                {/* Card Image */} 
                <img 
                  src={service.imgSrc} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                /> 
 
                {/* Title Centered */} 
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500"> 
                  <h3 className="text-xl font-bold text-center px-2">{service.title}</h3> 
                </div> 
 
                {/* Overlay with Link */} 
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black/50 transition-all duration-500 opacity-0 group-hover:opacity-100"> 
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
 
                {/* Serial number */} 
                <div className="absolute top-2 left-2 text-white text-2xl font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500"> 
                  {service.serial} 
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