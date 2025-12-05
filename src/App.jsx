// src/App.jsx
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Ourstory from "./pages/Ourstory";
import Ourteam from "./pages/Ourteam";
// import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PregnancyMaternity from "./pages/PregnancyMaternity";
import FetalMedicine from "./pages/FetalMedicine";
import Ultrasound from "./pages/Ultrasound";
import SurgerySection from "./pages/SurgerySection";
import Lab from "./pages/Lab";




export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Ourstory />} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pregnancy-maternity" element={<PregnancyMaternity />} />
        <Route path="/fetal-medicine" element={<FetalMedicine />} />
        <Route path="/ultrasound" element={<Ultrasound />} />
        <Route path="/surgery-and-procedures" element={<SurgerySection />} />
         <Route path="/lab" element={<Lab />} />
      </Routes>
      <Footer />
    </Router>
  );
}
