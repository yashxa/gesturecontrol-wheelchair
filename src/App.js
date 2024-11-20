import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import TechnicalSection from "./components/TechnicalSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./styles/global.css";

const App = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <TechnicalSection />
    <TeamSection />
    <ContactSection />
    <Footer />
  </>
);

export default App;
