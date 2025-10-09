import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Whychoose = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,       // Animation speed
            easing: "ease-in-out", // Smooth easing
            once: false,           // ✅ Animation will trigger both on scroll down & up
            mirror: true,          // ✅ Reverses animation when scrolling up
            offset: 120,           // Triggers animation slightly before visible
        });
    }, []);

    return (
        <section className="py-20 bg-[#1E3A8A]" id="about">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div
                        data-aos="fade-left"
                        className="flex justify-center items-center relative"
                    >
                        <div className="relative group">
                            <img
                                src="/car.png"
                                alt="ATB Motor Engineers"
                                className="rounded-2xl shadow-lg h-110 w-120 hover:shadow-[0_0_30px_rgba(30,58,138,0.4)] transition-all duration-500 transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-[#1E3A8A]/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div data-aos="fade-right">
                        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            Why Choose Us?
                        </h4>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="150"
                            className="text-white text-base md:text-lg leading-relaxed mb-4"
                        >
                           ATB Motor Engineers Ltd have been providing the people of Derby with a wide range of customer focused motor engineering services for many years!
                        </p>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="text-white text-base md:text-lg leading-relaxed mb-8"
                        >
                            ATB Motor Engineers Ltd have many satisfied and returning customers because we provide the best and most comprehensive motor engineering services in and around Derby, with a friendly service from start to completion, and a time served and highly skilled team, you can rest assured that you are getting both excellent value for money and a personal service at each and every job we attend.
                        </p>
                        <a
                            href="/services"
                            data-aos="zoom-in"
                            data-aos-delay="450"
                            className="inline-block bg-[#0F216B] hover:bg-[#183bc7] text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            View Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Whychoose;
