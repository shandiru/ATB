// src/App.jsx
import React, { useEffect } from "react"; // Added useEffect
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Page/Homepage"; 
import TermsConditions from "./components/Term.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import Gallery from "../src/Page/Gallery.jsx";
import Servicepage from "../src/Page/Servicepage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import GDPRConsent from "./components/GDPRBanner.jsx";
import Mot from "./Page/Mot.jsx";
import Service from "./Page/Service.jsx";
import Chain from "./Page/Chain.jsx";
import Welding from "./Page/Welding.jsx";
import Repair from "./Page/Repair.jsx";
import ScrollToHash from "./components/ScrollToHash.jsx";

function App() {
  // Global AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Smooth easing
      once: true, // Animation happens only once while scrolling down
      mirror: false, // Prevents animation from repeating when scrolling back up
      anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
    });

    // Optional: Refresh AOS when routes change
    AOS.refresh();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/services/mot" element={<Mot />} />
        <Route path="/services/service" element={<Service />} />
        <Route path="/services/chain-belts" element={<Chain />} />
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