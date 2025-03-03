import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Donate from "./pages/donate";
import "./App.css";
import ".//pages/Home.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
  
}

export default App;
