import React from "react";
import "./../styles/TechnicalSection.css";

const TechnicalSection = () => (
  <section id="technical" className="technical-section">
    <h2>Technical Details</h2>
    <div className="technical-card">
      <ul>
        <li><strong>Torque:</strong> Max torque of 24.02 Nm for smooth operation.</li>
        <li><strong>Battery:</strong> Lithium-ion battery with 1.5 hours runtime.</li>
        <li><strong>Turning Radius:</strong> Safe turning radius of 0.42m.</li>
      </ul>
    </div>
  </section>
);

export default TechnicalSection;
