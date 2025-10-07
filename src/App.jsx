// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Page/Homepage"; // corrected path
import TermsConditions from "./components/Term.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import Gallery from "../src/Page/Gallery.jsx"
import Servicepage from "../src/Page/Servicepage.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx";
import GDPRConsent from "./components/GDPRBanner.jsx";
import Mot from "./Page/Mot.jsx";
import Service from "./Page/Service.jsx";
import Chain from "./Page/Chain.jsx";
import Welding from "./Page/Welding.jsx";
import Repair from "./Page/Repair.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/services/mot" element={<Mot />} />
        <Route path="/services/service" element={<Service />} />
        <Route path="/services/chain/belts" element={<Chain />} />
        <Route path="/services/welding" element={<Welding />} />
         <Route path="/services/mechanical-repair" element={<Repair />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
