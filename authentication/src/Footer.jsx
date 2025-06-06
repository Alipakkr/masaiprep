import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Footer = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <footer className="footer">
      {isLoggedIn ? "👋 Welcome, User!" : "🔑 Please log in"}
    </footer>
  );
};

export default Footer;
