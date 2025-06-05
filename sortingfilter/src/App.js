import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  </Router>
);

export default App;
