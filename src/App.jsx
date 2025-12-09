// src/App.jsx
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Ourstory from "./pages/Ourstory";
import Ourteam from "./pages/Ourteam";
import Contact from "./pages/Contact";
import PregnancyMaternity from "./pages/PregnancyMaternity";
import FetalMedicine from "./pages/FetalMedicine";
import Ultrasound from "./pages/Ultrasound";
import SurgerySection from "./pages/SurgerySection";
import Lab from "./pages/Lab";
import Gallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import PrePregnancy from "./pages/PrePregnancy";
import Pregnancy from "./pages/Pregnancy";
import CervicalEncirclage from "./pages/CervicalEncirclage";
import Highrisk from "./pages/Highrisk";
import Gdm from "./pages/Gdm";
import Hypertension from "./pages/Hypertension";



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
         <Route path="/gallery" element={<Gallery />} />
         <Route path="/videos" element={<Videos />} />
         <Route path="/pre-pregnancy" element={<PrePregnancy />} />
         <Route path="/cervical-encirclage" element={<CervicalEncirclage />} />
         <Route path="/pregnancy" element={<Pregnancy />} />
         <Route path="/highrisk" element={<Highrisk />} />
         <Route path="/gdm" element={<Gdm />} />
         <Route path="/hypertension" element={<Hypertension />} />
      </Routes>
      <Footer />
    </Router>
  );
}
