// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Ourstory from "./pages/Ourstory";
import Ourteam from "./pages/Ourteam";
import Services from "./pages/Services";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Ourstory />} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
