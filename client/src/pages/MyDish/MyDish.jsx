import React, { useState, useEffect } from "react";
import CartCard from "../../components/CartCard/CartCard";
import food1 from "../../assets/food1.jpg";

import { Link } from "react-router-dom";
import "./MyDish.scss";

const MyDish = () => {
  const [dish, setDish] = useState([]);

  useEffect(() => {
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setDish(cartItems);
    function checkCartData() {
      const item = JSON.parse(localStorage.getItem("cart"));
      if (item) {
        setDish(item);
      }
    }
    window.addEventListener("cart", checkCartData);
    return () => {
      window.removeEventListener("cart", checkCartData);
    };
  }, []);

  return (
    <div className="my-dish">
      <div className="card-container">
        {dish.map((data, index) => {
          return (
            <CartCard
              key={index}
              img={food1}
              name={data.name}
              quantity={data.quantity}
              setDish={setDish}
            />
          );
        })}
      </div>
      <div className="bill-container">
        <h1>Price</h1>
        <div className="total">
          <span>Total Price </span>
          <span>$600</span>
        </div>
        <div className="gst">
          <span>GST</span>
          <span>$10</span>
        </div>
        <Link to="/checkout">
          <div className="btn">Checkout | $610</div>
        </Link>
      </div>
    </div>
  );
};

export default MyDish;
