import React, { useReducer } from "react";
import { initialState, themeReducer } from "../context/ThemeContext";
import "../styles/themes.css";

const ThemeToggle = () => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const isDark = state.theme === "dark";

  return (
    <div className={`container ${state.theme}`}>
      <h1 className="title">🚀 Futuristic Theme Toggle</h1>
      <p className="subtitle">Current Theme: <strong>{state.theme.toUpperCase()}</strong></p>
      <button
        className="glow-button"
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
