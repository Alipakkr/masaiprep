import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h2>🌐 Weather Dashboard</h2>
    <div className="nav-links">
      <Link to="/">Home</Link>
    </div>
  </nav>
);

export default Navbar;
