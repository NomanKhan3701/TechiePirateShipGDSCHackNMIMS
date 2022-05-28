import React from "react";
import "./Card.scss";
import { BsBookmark } from "react-icons/bs";
import { BiLike, BiComment } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import LimitChar from "../LimitChar/LimitChar";

const Card = (props) => {
  return (
    <div className="post-card">
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
        <div className="right flex-cc"></div>
      </div>
    </div>
  );
};

export default Card;
