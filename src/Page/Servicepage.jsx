import OurServicesHeader from "../components/Service/OurServicesHeader";
import OurServicesGrid from "../components/Service/OurServicesGrid"
import VehicleSpecializations from "../components/Service/VehicleSpecializations"
import ContactCTA from "../components/Service/ContactCTA"
import ServicesSection from "../components/Service/ServiceSection";

function Service() {
  return (
    <>
      <OurServicesHeader />
      <ServicesSection />
      {/* <OurServicesGrid /> */}
      <VehicleSpecializations />
      <ContactCTA />
    </>
  );
}

export default  Service;
