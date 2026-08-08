import { useState } from 'react'
import Navbar from "./components/layout/Navbar";

import Logo from "./components/common/Logo";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Section from "./components/ui/Section";
import Hero from "./sections/hero/Hero";
import FeaturedProperties from "./sections/FeaturedProperties/FeaturedProperties";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProperties />
    </>
  );
}

export default App;







