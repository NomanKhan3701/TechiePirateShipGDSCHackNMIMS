import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import SignUp from "./pages/SignUp/SignUp";
import Order, {
  CompletedOrders,
  CookingOrders,
  Payment,
  PreviousOrders,
} from "./pages/Order/Order";
import MyDish from "./pages/MyDish/MyDish";
import Favourite from "./pages/Favourite/Favourite";
import SingleFood from "./pages/SingleFood/SingleFood";
import Checkout from "./pages/Checkout/Checkout";
import Bill from "./pages/Bill/Bill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/mydish" element={<MyDish />} />
        <Route path="/order" element={<Order />}>
          <Route path="cookingorders" element={<CookingOrders />} />
          <Route path="completedorders" element={<CompletedOrders />} />
          <Route path="previousorders" element={<PreviousOrders />} />
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route path="/mydish" element={<MyDish />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/SingleFood" element={<SingleFood />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/bill" element={<Bill />} />
      </Routes>
    </div>
  );
}

export default App;
