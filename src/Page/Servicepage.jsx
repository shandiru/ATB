import OurServicesHeader from "../components/Service/OurServicesHeader";
import OurServicesGrid from "../components/Service/OurServicesGrid"
import VehicleSpecializations from "../components/Service/VehicleSpecializations"
import ContactCTA from "../components/Service/ContactCTA"
import ServicesSection from "../components/Service/ServiceSection";
import CallToActionSection from "../components/common/cta"
function Service() {
  return (
    <>
      <OurServicesHeader />
      <ServicesSection />
      {/* <OurServicesGrid /> */}
      <VehicleSpecializations />
      <CallToActionSection />
    </>
  );
}

export default  Service;
