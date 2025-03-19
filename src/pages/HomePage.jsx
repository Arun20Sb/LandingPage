import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceCards from "../components/ServiceCards";
import PricingTable from "../components/PricingTable";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServiceCards />
      <PricingTable />
      <ContactForm />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
