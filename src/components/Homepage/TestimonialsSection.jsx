import React, { useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    initials: "JM",
    name: "James Mitchell",
    location: "Derby • December 2024",
    service: "Engine Rebuild",
    review:
      "Absolutely outstanding service from ATB Motor Engineers. They rebuilt my BMW's engine after a major failure, and it now runs better than when it was new. The attention to detail and professionalism throughout the process was exceptional. Highly recommended!",
  },
  {
    initials: "ST",
    name: "Sarah Thompson",
    location: "Nottingham • November 2024",
    service: "Performance Tuning",
    review:
      "Had my Audi remapped and fitted with a custom exhaust system. The difference in performance is incredible! The team explained everything clearly and delivered exactly what they promised. Will definitely be returning for future modifications.",
  },
  {
    initials: "MR",
    name: "Michael Roberts",
    location: "Leicester • October 2024",
    service: "Classic Car Restoration",
    review:
      "ATB restored my 1967 Jaguar E-Type to concours condition. The craftsmanship is second to none, and they treated my car like it was their own. The end result exceeded all my expectations. True professionals!",
  },
  {
    initials: "DW",
    name: "David Wilson",
    location: "Burton-on-Trent • November 2024",
    service: "Commercial Fleet Maintenance",
    review:
      "We've been using ATB for our company fleet maintenance for over two years. Their reliability, competitive pricing, and quality of work keeps our vehicles on the road and our business running smoothly. Excellent service every time.",
  },
  {
    initials: "EC",
    name: "Emma Clarke",
    location: "Derby • December 2024",
    service: "Brake System Repair",
    review:
      "My car failed its MOT due to brake issues. ATB diagnosed the problem quickly, provided a fair quote, and completed the work the same day. The brakes feel much better now. Great communication too!",
  },
  {
    initials: "RA",
    name: "Robert Anderson",
    location: "Ashby-de-la-Zouch • September 2024",
    service: "Turbo Installation",
    review:
      "Fantastic work installing a turbocharger on my Honda Civic. The team's expertise in performance modifications is evident in the quality of the installation and the impressive results. The car is transformed!",
  },
  {
    initials: "LJ",
    name: "Lisa Johnson",
    location: "Swadlincote • October 2024",
    service: "Gearbox Repair",
    review:
      "My gearbox was making terrible noises and the car was barely drivable. ATB diagnosed the issue, rebuilt the gearbox, and now it's smooth as silk. Fair pricing, excellent workmanship, and great communication.",
  },
  {
    initials: "MS",
    name: "Mark Stevens",
    location: "Coalville • August 2024",
    service: "Custom Fabrication",
    review:
      "Needed some custom brackets fabricated for a modification project. ATB's fabrication skills are top-notch — they understood exactly what I needed and delivered precision work. Their attention to detail is outstanding.",
  },
];

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section
      className="relative py-20 bg-gray-50 overflow-hidden scroll-m-10"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center text-[#1E3A8A] mb-12"
        >
          What Our Customers Say
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="py-2">
              <div
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between 
    min-h-[380px] hover:shadow-[0_0_25px_rgba(30,58,138,0.25)] transition-all duration-500 hover:-translate-y-2"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#1E3A8A] text-white font-semibold text-lg">
                      {t.initials}
                    </div>
                    <div>
                      <h6 className="font-semibold text-gray-900">{t.name}</h6>
                      <p className="text-sm text-gray-500">{t.location}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-3 text-[#FACC15]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm md:text-base leading-relaxed line-clamp-5">
                    {t.review}
                  </p>
                </div>

                <div className="mt-4">
                  <hr className="border-gray-200 my-3" />
                  <p className="text-sm text-gray-500 font-medium">
                    <span className="text-[#1E3A8A] font-semibold">Service:</span>{" "}
                    {t.service}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows with React Icons */}
        <button
          className="swiper-prev absolute top-1/2 -left-4 transform -translate-y-1/2 bg-[#1E3A8A]/90 hover:bg-[#0F216B] text-white p-3 md:p-4 rounded-full shadow-lg transition z-10"
          aria-label="Previous"
        >
          <FaChevronLeft className="text-lg" />
        </button>

        <button
          className="swiper-next absolute top-1/2 -right-4 transform -translate-y-1/2 bg-[#1E3A8A]/90 hover:bg-[#0F216B] text-white p-3 md:p-4 rounded-full shadow-lg transition z-10"
          aria-label="Next"
        >
          <FaChevronRight className="text-lg" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
