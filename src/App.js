import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Navbar from "./components/Navbar"
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Home from "./components/Home"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
