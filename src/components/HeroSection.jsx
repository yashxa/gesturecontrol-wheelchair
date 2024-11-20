import React, { useState, useEffect } from "react";
import "./../styles/HeroSection.css";

// Array of background images
const bgImages = [
  "/assets/images/hero-bg1.jpg",
  "/assets/images/hero-bg2.jpg",
  "/assets/images/hero-bg3.jpg",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${bgImages[currentIndex]})` }}
    >
      <div className="hero-content">
        <h1>Gesture Controlled Wheelchair</h1>
        <p>Redefining mobility with cutting-edge technology.</p>
        <a href="#about" className="btn">Learn More</a>
      </div>
    </section>
  );
};

export default HeroSection;
