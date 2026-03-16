import Hero from "../components/Homepage/Hero";
import ServicesSection from "../components/Homepage/ServicesSection"
import AboutSection from "../components/Homepage/AboutSection"
import TestimonialsSection from "../components/Homepage/TestimonialsSection"
import CallToActionSection from "../components/Homepage/CallToActionSection"
import Whychoose from "../components/Homepage/WhyChoose";
import PartnersSection from "../components/Homepage/PartnersSection";
import ContactSection from "../components/Homepage/ContactSection";
function Home() {
  return (
    <>
      <Hero />
      <PartnersSection />
      <AboutSection />
      <Whychoose />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <CallToActionSection />
    </>
  );
}

export default Home;
