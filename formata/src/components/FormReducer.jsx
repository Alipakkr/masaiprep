import React, { useReducer, useState } from "react";
 
const initialState = {
  email: "",
  password: "",
};
 
function formReducer(state, action) {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("invalid action type");
  }
}

const FormReducer = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email && state.password) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
    setSubmitted(false);
  };

  return (
    <div style={styles.container}>
      <h2>📝 useReducer Form Handler</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "email", payload: e.target.value })
          }
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "password", payload: e.target.value })
          }
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Submit
        </button>
        <button type="button" style={styles.resetButton} onClick={handleReset}>
          Reset
        </button>
      </form>

      <div style={styles.output}>
        {submitted ? (
          <div>
            <div>User Email: {state.email}</div>
            <div>User Password: {state.password}</div>
          </div>
        ) : (
          <div>No details found</div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "sans-serif",
    padding: "40px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "auto",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  resetButton: {
    padding: "10px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  output: {
    marginTop: "20px",
    fontSize: "1.2rem",
    color: "#333",
  },
};

export default FormReducer;
