import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import WeatherDetails from "./pages/WeatherDetails";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather/:city" element={<WeatherDetails />} />
    </Routes>
  </Router>
);

export default App;
