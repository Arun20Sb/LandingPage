import React from "react";
import { Route, Routes } from "react-router-dom";
import ServiceCards from "./components/ServiceCards";
import PricingTable from "./components/PricingTable";
import ContactForm from "./components/ContactForm";
import UserSearch from "./components/UserSearch";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServiceCards />} />
        <Route path="/pricing" element={<PricingTable />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/usersearch" element={<UserSearch />} />
      </Routes>
    </div>
  );
};

export default App;
