import React from "react";
import { MdDelete } from "react-icons/md";
import { RiSubtractLine, RiAddLine } from "react-icons/ri";
import "./CartCard.scss";

const CartCard = (props) => {
  const handleQty = (type) => {
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    if (type === "increase") {
      cartItems = cartItems.map((data) => {
        const qty = parseInt(data.quantity) + 1;
        return data.name == props.name
          ? { name: data.name, quantity: qty }
          : { name: data.name, quantity: data.quantity };
      });
      props.setDish(cartItems);
    } else if (type === "decrease") {
      cartItems = cartItems.map((data) => {
        if (data.name == props.name) {
          if (data.quantity == 0) {
            removeFromCart();
            return "";
          } else {
            const qty = parseInt(data.quantity) - 1;
            return { name: data.name, quantity: qty };
          }
        } else {
          return { name: data.name, quantity: data.quantity };
        }
      });
      props.setDish(cartItems);
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const removeFromCart = async () => {
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems = await cartItems.filter((data) => {
      return data.name != props.name
        ? { name: data.name, quantity: data.quantity }
        : "";
    });
    props.setDish(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  return (
    <div className="cart-card">
      <div className="top">
        <div className="left">
          <img src={props.img} alt="" />
        </div>
        <div className="right">
          <h2 className="name">{props.name}</h2>
          <h3 className="price">Price - $200</h3>
        </div>
      </div>
      <div className="bottom">
        <div className="left flex-cc">
          <RiSubtractLine onClick={() => handleQty("decrease")} className="i" />
          <span>{props.quantity}</span>
          <RiAddLine onClick={() => handleQty("increase")} />
        </div>
        <div className="right" onClick={removeFromCart}>
          Delete
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
