import React from "react";
import "./../styles/FeaturesSection.css";

const features = [
  { title: "Advanced Sensors", description: "Includes ultrasonic, infrared, and pressure sensors for smooth navigation." },
  { title: "Durable Design", description: "Built with high-quality materials like silicone rubber for extended use." },
  { title: "Battery Optimization", description: "Optimized for a runtime of up to 1.5 hours on a single charge." },
];

const FeaturesSection = () => (
  <section id="features" className="features-section">
    <h2>Key Features</h2>
    <div className="features-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
