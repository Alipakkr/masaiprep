import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
 
import "./styles.css";

const AppContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <div className="glass-container">
        <h1 className="title">🚀 Futuristic Theme Switcher</h1>
        <button className="toggle-button" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
 
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
