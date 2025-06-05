import React, { useReducer } from "react";

// Initial state
const initialState = { count: 0 };

// Reducer function to manage state transitions
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={styles.container}>
      <h1>Simple Counter with useReducer</h1>
      <div style={styles.countDisplay}>Count: {state.count}</div>
      <div>
        <button style={styles.button} onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button style={{ ...styles.button, marginLeft: 10 }} onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    marginTop: "100px",
  },
  countDisplay: {
    fontSize: "2rem",
    margin: "20px 0",
  },
  button: {
    fontSize: "1.2rem",
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default Counter;
