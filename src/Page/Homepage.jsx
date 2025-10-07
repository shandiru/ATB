import Hero from "../components/Homepage/Hero";
import ServicesSection from "../components/Homepage/ServicesSection"
import AboutSection from "../components/Homepage/AboutSection"
import StatsSection from "../components/Homepage/StatsSection"
import TestimonialsSection from "../components/Homepage/TestimonialsSection"
import CallToActionSection from "../components/Homepage/CallToActionSection"
import Whychoose from "../components/Homepage/WhyChoose";

function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutSection />
      <Whychoose />
      <ServicesSection />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}

export default Home;
