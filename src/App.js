import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Navbar from "./components/Navbar"
import Location from "./components/Location";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/location" element={<Location />}></Route>
      </Routes>
    </div>
  );
}

export default App;
