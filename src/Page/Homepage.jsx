import Hero from "../components/Homepage/Hero";
import ServicesSection from "../components/Homepage/ServicesSection"
import AboutSection from "../components/Homepage/AboutSection"
import StatsSection from "../components/Homepage/StatsSection"
import TestimonialsSection from "../components/Homepage/TestimonialsSection"
import CallToActionSection from "../components/Homepage/CallToActionSection"
import Whychoose from "../components/Homepage/WhyChoose";
import PartnersSection from "../components/Homepage/PartnersSection";
function Home() {
  return (
    <>
      <Hero />
      <PartnersSection />
      {/* <StatsSection /> */}
      <AboutSection />
      <Whychoose />
      <ServicesSection />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}

export default Home;
