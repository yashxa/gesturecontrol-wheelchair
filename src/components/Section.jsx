import React from "react";
import "./../styles/Section.css";

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <h2>{title}</h2>
    <div className="section-content">{children}</div>
  </section>
);

export default Section;
