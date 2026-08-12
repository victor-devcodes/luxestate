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

function HomePage() {
  return (
    <>
      <Hero />
      <Properties />
      <div className="bg-gray-50">
        <About />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/properties/:id"
          element={<PropertyDetails />}
        />
      </Routes>
    </>
  );
}

export default App;







