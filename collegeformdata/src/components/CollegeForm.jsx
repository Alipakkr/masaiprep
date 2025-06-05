import React, { useReducer, useState } from "react";
import "../index.css";

const initialState = {
  name: "",
  establishment_year: "",
  address: {
     
    street: "",
    city: {
      name: "",
      locality: {
        pinCode: "",
        landmark: "",
      },
    },
    state: "",
     
  },
  courses_offered: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.payload };

    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: { ...state.address, [action.field]: action.payload },
      };

    case "UPDATE_CITY":
      return {
        ...state,
        address: {
          ...state.address,
          city: { ...state.address.city, [action.field]: action.payload },
        },
      };

    case "UPDATE_LOCALITY":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: {
              ...state.address.city.locality,
              [action.field]: action.payload,
            },
          },
        },
      };

    case "UPDATE_COORDINATES":
      return {
        ...state,
        address: {
          ...state.address,
           
        },
      };

    case "UPDATE_COURSES":
      return { ...state, courses_offered: action.payload.split(",").map(c => c.trim()) };

    case "reset":
      return initialState;

    default:
      throw new Error("invalid action type");
  }
}

const CollegeForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (type, field, value) => {
    try {
      dispatch({ type, field, payload: value });
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
    setSubmitted(false);
    setError("");
  };

  return (
    <div className="form-container">
      <h2>College Form </h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input placeholder="College Name" value={state.name}
          onChange={(e) => handleChange("UPDATE_FIELD", "name", e.target.value)} />

        <input placeholder="Establishment Year" value={state.establishment_year}
          onChange={(e) => handleChange("UPDATE_FIELD", "establishment_year", e.target.value)} />

        <h4>Address Details</h4>
        <input placeholder="Building" value={state.address.building}
          onChange={(e) => handleChange("UPDATE_ADDRESS", "building", e.target.value)} />

        <input placeholder="Street" value={state.address.street}
          onChange={(e) => handleChange("UPDATE_ADDRESS", "street", e.target.value)} />

        <input placeholder="City Name" value={state.address.city.name}
          onChange={(e) => handleChange("UPDATE_CITY", "name", e.target.value)} />

        <input placeholder="Pincode" value={state.address.city.locality.pinCode}
          onChange={(e) => handleChange("UPDATE_LOCALITY", "pinCode", e.target.value)} />

        <input placeholder="Landmark" value={state.address.city.locality.landmark}
          onChange={(e) => handleChange("UPDATE_LOCALITY", "landmark", e.target.value)} />

        <input placeholder="State" value={state.address.state}
          onChange={(e) => handleChange("UPDATE_ADDRESS", "state", e.target.value)} />

         
        <input placeholder="Courses (comma-separated)" value={state.courses_offered.join(", ")}
          onChange={(e) => handleChange("UPDATE_COURSES", null, e.target.value)} />

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </form>

      {submitted && (
        <div className="output">
          <h3>College information Submitted</h3>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CollegeForm;
