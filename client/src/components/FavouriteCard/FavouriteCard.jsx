import React from "react";
import LimitChar from "../LimitChar/LimitChar";
import "./FavouriteCard.scss";
const FavouriteCard = (props) => {
  return (
    <div className="post-card">
      <div className="image">
        <img src={props.img} alt="" />
      </div>
      <div className="footer">
        <div className="title">{props.name}</div>
        <div className="favourite-desc">
          <LimitChar limit={100} word={props.desc} />
        </div>
        <div className="utilities">
            <div className="add-to-cart"></div>
        </div>
        <div className="favourite-status">Price: ${props.price}</div>
      </div>
    </div>
  );
};

export default FavouriteCard;
