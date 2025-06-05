import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OPENWEATHER_API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_EMBED_API_KEY";

const WeatherDetails = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${OPENWEATHER_API_KEY}&units=metric`
    )
      .then((res) => {
        if (!res.ok) throw new Error("City not found");
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [city]);

  if (loading) return <p className="loading">Loading weather for {city}...</p>;
  if (error) return <p className="error">{error}</p>;

  const { main, weather: weatherArr, name } = weather;
  const weatherCondition = weatherArr[0].description;

  return (
    <div className="weather-details">
      <h2>Weather in {name}</h2>
      <div className="weather-info">
        <p>Temperature: {main.temp}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Condition: {weatherCondition}</p>
      </div>

      {/* Bonus: Google Maps Embed */}
      <div className="map-container">
        <iframe
          title="city-map"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "15px", boxShadow: "0 0 15px #00ffe7" }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
            name
          )}`}
        ></iframe>
      </div>
    </div>
  );
};

export default WeatherDetails;
