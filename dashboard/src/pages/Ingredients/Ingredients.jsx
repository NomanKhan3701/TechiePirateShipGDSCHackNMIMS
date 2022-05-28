import React from "react";
import "./Ingredients.scss";
import food2 from "../../assets/food2.jpg";
import { AiOutlineMinus } from "react-icons/ai";
import ingredient1 from "../../assets/ingredient1.jpg";

const Ingredients = () => {
  return (
    <div className="ingredients-container">
      <div className="ingredient">
        <div className="img">
          <img src={ingredient1} alt="" />
          <div className="item-id">#FF7236</div>
          <div className="info-div">
            <AiOutlineMinus />
            <div className="name">Beans</div>
            <div className="quantity">Quantity - 7kg</div>
          </div>
        </div>
      </div>
      <div className="ingredient">
        <div className="img">
          <img src={ingredient1} alt="" />
          <div className="item-id">#FF7236</div>
          <div className="info-div">
            <AiOutlineMinus />
            <div className="name">Beans</div>
            <div className="quantity">Quantity - 7kg</div>
          </div>
        </div>
      </div>
      <div className="ingredient">
        <div className="img">
          <img src={ingredient1} alt="" />
          <div className="item-id">#FF7236</div>
          <div className="info-div">
            <AiOutlineMinus />
            <div className="name">Beans</div>
            <div className="quantity">Quantity - 7kg</div>
          </div>
        </div>
      </div>
      <div className="ingredient">
        <div className="img">
          <img src={ingredient1} alt="" />
          <div className="item-id">#FF7236</div>
          <div className="info-div">
            <AiOutlineMinus />
            <div className="name">Beans</div>
            <div className="quantity">Quantity - 7kg</div>
          </div>
        </div>
      </div>
      <div className="ingredient">
        <div className="img">
          <img src={ingredient1} alt="" />
          <div className="item-id">#FF7236</div>
          <div className="info-div">
            <AiOutlineMinus />
            <div className="name">Beans</div>
            <div className="quantity">Quantity - 7kg</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
