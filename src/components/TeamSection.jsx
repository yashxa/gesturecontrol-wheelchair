import React from "react";
import "./../styles/TeamSection.css";

const teamMembers = [
  { name: "Dheeraj Khurana", role: "Mechanical and CAD Engineer" },
  { name: "Jai Arora", role: "Hardware Engineer" },
  { name: "Arnav Sethi", role: "Project Lead" },
  { name: "Gurvir Singh", role: "System Analyst" },
];

const TeamSection = () => (
  <section id="team" className="team-section">
    <h2>Meet the Team</h2>
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-card">
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
