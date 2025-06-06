import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Navbar = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h2> Auth app</h2>
      <button onClick={isLoggedIn ? logout : login}>
        {isLoggedIn ? "LogOut" : "LogIn"}
      </button>
    </nav>
  );
};

export default Navbar;
