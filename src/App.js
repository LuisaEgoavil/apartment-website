import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Navbar from "./components/Navbar"
import Location from "./components/Location";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </div>
  );
}

export default App;
