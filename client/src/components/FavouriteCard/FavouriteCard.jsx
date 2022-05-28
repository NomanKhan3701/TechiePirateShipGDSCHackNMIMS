import React from "react";
import { BiLike, BiComment } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import LimitChar from "../LimitChar/LimitChar";
import './FavouriteCard.scss'

const FavouriteCard = (props) => {
  return (
    <div className="favourite-card">
      <div className="img">
        <img src={props.img} alt="" />
        <div className="title">{props.name}</div>
      </div>

      <div className="desc">
        <LimitChar word={props.desc} limit={250} />
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
          <div className="i">
            <AiOutlineHeart />
          </div>
          <div className="i">
            <AiOutlineShoppingCart />
            <span>Add to dish</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteCard;
