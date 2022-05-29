import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AddIngredient from "./pages/AddIngredient/AddIngredient";
import AddItem from "./pages/AddItem/AddItem";
import Home from "./pages/Home/Home";
import Ingredients from "./pages/Ingredients/Ingredients";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import Order, {
  CompletedOrders,
  CookingOrders,
  PreviousOrders,
} from "./pages/Order/Order";
import Signup from "./pages/Signup/Signup";
import SingleIngredient from "./pages/SingleIngredient/SingleIngredient";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />}>
          <Route path="cookingorders" element={<CookingOrders />} />
          <Route path="completedorders" element={<CompletedOrders />} />
          <Route path="previousorders" element={<PreviousOrders />} />
        </Route>
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/additemtomenu" element={<AddItem />} />
        <Route path="/singleingredient" element={<SingleIngredient />} />
        <Route path="/addingredient" element={<AddIngredient />} />
        <Route path="/createemployee" element={<CreateEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
