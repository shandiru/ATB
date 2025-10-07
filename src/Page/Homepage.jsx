import Hero from "../components/Homepage/Hero";
import ServicesSection from "../components/Homepage/ServicesSection"
import AboutSection from "../components/Homepage/AboutSection"
import StatsSection from "../components/Homepage/StatsSection"
import TestimonialsSection from "../components/Homepage/TestimonialsSection"
import CallToActionSection from "../components/Homepage/CallToActionSection"

function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}

export default Home;
