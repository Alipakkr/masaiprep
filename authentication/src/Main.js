import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Main = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <main className="main-content">
      {isLoggedIn ? (
        <h3> Welcome to the Dashboard!!</h3>
      ) : (
        <h3> Please log in to access your dashboard.</h3>
      )}
    </main>
  );
};

export default Main;
