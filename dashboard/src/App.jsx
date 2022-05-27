import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AddItem from "./pages/AddItem/AddItem";
import Home from "./pages/Home/Home";
import Ingredients from "./pages/Ingredients/Ingredients";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import Order from "./pages/Order/Order";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/additemtomenu" element={<AddItem />} />
        <Route path="/additemtospecial" element={<AddItem />} />
      </Routes>
    </div>
  );
}

export default App;
