import { useState } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
