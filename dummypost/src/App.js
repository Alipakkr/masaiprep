import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group"; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import About from "./pages/About";
import "./App.css";  

const AppRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      {/* <CSSTransition key={location.key} classNames="fade" timeout={300}> */}
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      {/* </CSSTransition> */}
    </TransitionGroup>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
};

export default App;
