import { Link } from "react-router-dom";

const slides = [
  { image: '/back.jpg', title: 'MOT', description: 'Comprehensive MOT testing preparation services', path: '/services/mot' },
  { image: '/back.jpg', title: 'Service', description: 'Routine vehicle servicing for optimal performance', path: '/services/service' },
  { image: '/back.jpg', title: 'Chain/Belts (Wet Belt Specialist)', description: 'Expert timing chain and wet belt services', path: '/services/chain/belts' },
  { image: '/back.jpg', title: 'Welding', description: 'Professional automotive welding services', path: '/services/welding' },
  { image: '/back.jpg', title: 'Mechanical Repairs', description: 'All types of mechanical repairs for your vehicle', path: '/services/mechanical-repair' },
];

export default function ServicesSection() {
  return (
    <div className="w-full px-4 md:px-10 py-10 bg-white mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group h-[300px]"
          >
            {/* Card Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Title Centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-xl font-bold text-center transition-opacity duration-500 group-hover:opacity-0">
                {slide.title}
              </h2>
            </div>

            {/* Overlay with description and button */}
            <div className="absolute inset-0 flex flex-col justify-end">
              <div className="bg-black/60 p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white mb-3">{slide.description}</p>
                <Link
                  to={slide.path}
                  className="bg-blue-700 text-white px-4 py-2 justify-center rounded hover:bg-blue-800 transition text-center"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
