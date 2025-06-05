import React from "react";
import { Link } from "react-router-dom";
 

const Navbar = () => (
  <nav className="navbar">
    <h2> FInd Your Movie </h2>
    <Link to="/">Home</Link>
  </nav>
);

export default Navbar;
