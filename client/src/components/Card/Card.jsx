import React, { useState, useEffect } from "react";
import "./Card.scss";
import { BiLike, BiComment } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import LimitChar from "../LimitChar/LimitChar";
import axios from "axios";
const client_server_url = import.meta.env.VITE_APP_CLIENT_SERVER_URL;

const Card = (props) => {
  const addToDish = async () => {
    var cartItems = await JSON.parse(localStorage.getItem("cart"));
    if (cartItems === null) cartItems = [];
    var exist = false;
    cartItems.map((data) => {
      if (data.name == props.name) exist = true;
    });
    if (exist) return;
    const data = {
      name: props.name,
      quantity: 1,
    };
    cartItems.push(data);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const addToFavourite = () => {
    try {
      const MobileNumber = JSON.parse(localStorage.getItem("User"));
      axios
        .patch(`${client_server_url}/UpdateFavourites`, {
          ItemId: props.name,
          MobileNumber: MobileNumber,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="post-card">
      <div className="img">
        <img src={props.img} alt="" />
        <div className="title">{props.name}</div>
      </div>

      <div className="desc">
        <LimitChar word={props.desc} limit={150} />
      </div>
      <div className="status">
        <div className="price">Price - ${props.price}</div>
        <div className="status">{props.status}</div>
      </div>

      <div className="card-bottom flex-cc">
        <div className="left flex-cc">
          <div className="i">
            <BiLike />
            <div className="like-count">
              {props.like === 0 ? "Like" : props.like}
            </div>
          </div>
          <div className="i">
            <BiComment />
            <span>Reviews</span>
          </div>
        </div>
        <div className="right flex-cc">
          <div className="i" onClick={addToFavourite}>
            <AiOutlineHeart />
          </div>
          <div className="i" onClick={addToDish}>
            <AiOutlineShoppingCart />
            <span>Add to dish</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
