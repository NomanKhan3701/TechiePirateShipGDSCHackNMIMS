import React from "react";
import { MdDelete } from "react-icons/md";
import { RiSubtractLine, RiAddLine } from "react-icons/ri";
import "./CartCard.scss";

const CartCard = (props) => {
  return (
    <div className="cart-card">
      <div className="top">
        <div className="left">
          <img src={props.img} alt="" />
        </div>
        <div className="right">
          <h2 className="name">Chicken Burger</h2>
          <h3 className="price">Price - $200</h3>
        </div>
      </div>
      <div className="bottom">
        <div className="left flex-cc">
          <RiAddLine className="i" />
          <span>4</span>
          <RiSubtractLine />
        </div>
        <div className="right">
          Delete
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
