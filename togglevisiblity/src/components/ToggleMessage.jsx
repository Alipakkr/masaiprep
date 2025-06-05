import React, { useReducer } from "react";
 
const initialState = {
  isVisible: false,
};
 
function visibilityReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_VISIBILITY":
      return { isVisible: !state.isVisible };
    default:
      return state;
  }
}

const ToggleMessage = () => {
  const [state, dispatch] = useReducer(visibilityReducer, initialState);

  return (
    <div style={styles.container}>
      <h1>oggle Visibility App</h1>
      <button
        style={styles.button}
        onClick={() => dispatch({ type: "TOGGLE_VISIBILITY" })}
      >
        Toggle Message
      </button>
      {state.isVisible && <p style={styles.message}>Hello There !! hows your day is doing on.</p>}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
    textAlign: "center",
    marginTop: "100px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "20px",
  },
  message: {
    marginTop: "20px",
    fontSize: "1.5rem",
    color: "#333",
  },
};

export default ToggleMessage;
