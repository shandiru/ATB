import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const transformations = [
  {
    title: "Classic Mini Restoration",
    beforeImg: "/placeholder.svg?height=300&width=400",
    afterImg: "/placeholder.svg?height=300&width=400",
    description:
      "Complete restoration including bodywork, engine rebuild, interior refurbishment, and paint job. This classic Mini was transformed from a project car to a show-quality vehicle.",
  },
  {
    title: "Engine Bay Overhaul",
    beforeImg: "/placeholder.svg?height=300&width=400",
    afterImg: "/placeholder.svg?height=300&width=400",
    description:
      "Full engine bay refurbishment — cleaned, repainted, and rewired. Result: like-new appearance and improved reliability.",
  },
  {
    title: "Performance Upgrade",
    beforeImg: "/placeholder.svg?height=300&width=400",
    afterImg: "/placeholder.svg?height=300&width=400",
    description:
      "Upgraded turbocharger, custom exhaust, and ECU remap — delivering exceptional power gains and smoother acceleration.",
  },
];

const BeforeAfterTransformations = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="bg-gray-50 py-20 md:py-28 text-center">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <h4
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-10"
        >
          Before &amp; After Transformations
        </h4>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {transformations.map((item, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Title */}
              <h5 className="text-xl font-semibold text-[#1E3A8A] py-4 px-6 border-b border-gray-100">
                {item.title}
              </h5>

              {/* Image Comparison */}
              <div className="flex justify-between gap-4 px-6 py-4">
                <div className="w-1/2">
                  <h6 className="font-semibold text-gray-600 mb-2">Before</h6>
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={item.beforeImg}
                      alt="Before"
                      className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <h6 className="font-semibold text-gray-600 mb-2">After</h6>
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={item.afterImg}
                      alt="After"
                      className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base px-6 pb-6 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterTransformations;
