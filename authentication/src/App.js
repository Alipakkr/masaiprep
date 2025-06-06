import React from "react";
import { AuthProvider } from "./AuthContext";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import "./styles.css";

const App = () => {
  return (
    <AuthProvider>
      <div className="app-container">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
