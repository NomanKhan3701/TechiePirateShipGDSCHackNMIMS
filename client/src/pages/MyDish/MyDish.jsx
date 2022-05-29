import React, { useState, useEffect } from "react";
import CartCard from "../../components/CartCard/CartCard";
import food1 from "../../assets/food1.jpg";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./MyDish.scss";
const client_server_url = import.meta.env.VITE_APP_CLIENT_SERVER_URL;

const MyDish = () => {
  const [dish, setDish] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    var cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems === null) cartItems = [];
    var ItemId = cartItems.map((item) => {
      return item.name;
    });

    axios
      .get(`${client_server_url}/FoodItem`, {
        params: { SortBy: "Custom", ItemId: ItemId },
      })
      .then((res) => console.log(res));

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

  const checkout = () => {
    var cartItems = JSON.parse(localStorage.getItem("cart"));
    var MobileNumber = JSON.parse(localStorage.getItem("User"));
    if (cartItems === null) cartItems = [];
    var ItemId = cartItems.map((item) => {
      return item.name;
    });
    var Quantity = cartItems.map((item) => {
      return item.quantity;
    });
    console.log(ItemId, Quantity);
    axios
      .post(`${client_server_url}/`, {
        ItemId: ItemId,
        Quantity: Quantity,
        OrderedBy: MobileNumber,
      })
      .then((res) => console.log(res));
    navigate("/order");
  };

  return (
    <div className="my-dish">
      <div className="card-container">
        {dish.length !== 0 ? (
          dish.map((data, index) => {
            return (
              <CartCard
                key={index}
                img={food1}
                name={data.name}
                quantity={data.quantity}
                setDish={setDish}
              />
            );
          })
        ) : (
          <h1 className="nothing">Add Items To your Dish</h1>
        )}
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
        <div onClick={checkout}>
          <div className="btn">Checkout | $610</div>
        </div>
      </div>
    </div>
  );
};

export default MyDish;
