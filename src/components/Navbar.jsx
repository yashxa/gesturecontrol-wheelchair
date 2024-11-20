import React from "react";
import "./../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-menu">
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#technical">Technical</a></li>
      <li><a href="#team">Team</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
