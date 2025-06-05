import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      navigate(`/weather/${city.trim()}`);
    }
  };

  return (
    <div className="home">
      <h1>Enter a City Name</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="e.g. New York"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          autoFocus
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default Home;
