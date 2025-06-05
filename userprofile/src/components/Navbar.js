import React from "react";
import { Link } from "react-router-dom";
 

const Navbar = () => (
  <nav className="navbar">
    <h2>🌐 UserPortal</h2>
    <div>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings</Link>
    </div>
  </nav>
);

export default Navbar;
