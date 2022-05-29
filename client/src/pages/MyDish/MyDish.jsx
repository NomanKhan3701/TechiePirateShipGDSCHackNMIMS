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
  const [totalPrice, setTotalPrice] = useState(0);
  const gst = 5;
  const navigate = useNavigate();

  useEffect(() => {
    var price = 0;
    dish.map((d) => (price = price + d.quantity * d.price));
    setTotalPrice(price);
  }, [dish]);

  useEffect(() => {
    var cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems === null) cartItems = [];
    if (!cartItems == []) {
      var ItemId = cartItems.map((item) => {
        return item.name;
      });
      var Quantity = cartItems.map((item) => {
        return item.quantity;
      });
      var i = -1;
      axios
        .get(`${client_server_url}/FoodItem`, {
          params: { SortBy: "Custom", Items: ItemId },
        })
        .then((res) => {
          var currDish = res.data.map((dish) => {
            i++;
            return {
              name: dish.ItemId,
              price: dish.Price,
              quantity: Quantity[i],
              img: dish.Image,
            };
          });
          setDish(currDish);
        })
        .catch((e) => console.log(e));
    } else {
      setDish([]);
    }

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
    if (localStorage.getItem("token") == null) {
      alert("Please Login before checkout");
      return;
    }
    if (cartItems === null) cartItems = [];
    var ItemId = cartItems.map((item) => {
      return item.name;
    });
    var Quantity = cartItems.map((item) => {
      return item.quantity;
    });
    console.log({
      Items: ItemId,
      Quantity: Quantity,
      OrderedBy: String(MobileNumber),
      TotalCost: totalPrice + (gst * totalPrice) / 100,
    });
    axios
      .post(`${client_server_url}/Order`, {
        Items: ItemId,
        Quantity: Quantity,
        OrderedBy: MobileNumber,
        TotalCost: totalPrice + (gst * totalPrice) / 100,
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
                img={data.img}
                name={data.name}
                quantity={data.quantity}
                price={data.price}
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
          <span>${totalPrice}</span>
        </div>
        <div className="gst">
          <span>GST</span>
          <span>${(gst * totalPrice) / 100}</span>
        </div>
        <div onClick={checkout}>
          <div className="btn">
            Checkout | ${totalPrice + (gst * totalPrice) / 100}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDish;
