import { useState } from 'react'
import Navbar from "./components/layout/Navbar";
import { Routes, Route } from "react-router-dom";

import Logo from "./components/common/Logo";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Section from "./components/ui/Section";
import Hero from "./sections/hero/Hero";
import FeaturedProperties from "./sections/FeaturedProperties/FeaturedProperties";
import Properties from "./sections/Properties/Properties";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import Testimonials from "./sections/Testimonials/Testimonials";
import CTA from "./sections/CTA/CTA";
import Footer from "./components/layout/Footer";

import AboutPage from "./pages/About";
import Agents from "./pages/Agents";
import Contact from "./pages/Contact";
import BookInspection from "./pages/BookInspection";

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Properties />
        <div className="bg-gray-50">
          <About />
        </div>
        <Services />
        <Testimonials />
        <CTA/>
      </main>
      
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/properties/:id" element={<PropertyDetails />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/agents" element={<Agents />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/properties" element={<Properties />} />

        <Route path="/book-inspection" element={<BookInspection />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;







