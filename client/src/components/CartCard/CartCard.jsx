import React from "react";
import { RiSubtractLine, RiAddLine } from "react-icons/ri";
import "./CartCard.scss";

const CartCard = (props) => {
  return (
    <div className="cart-card">
      <div className="left">
        <img src={props.img} alt="" />
      </div>
      <div className="middle">
        <h2 className="name">Chicken Burger</h2>
        <h3 className="price">Price - $200</h3>
      </div>
      <div className="right">
        <RiAddLine className="i"/>
        <span>4</span>
        <RiSubtractLine />
      </div>
    </div>
  );
};

export default CartCard;
