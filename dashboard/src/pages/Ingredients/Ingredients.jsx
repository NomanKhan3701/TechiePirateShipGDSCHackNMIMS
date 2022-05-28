import React from "react";
import "./Ingredients.scss";
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import ingredient1 from "../../assets/ingredient1.jpg";
import { Link } from "react-router-dom";

const Ingredients = () => {
  return (
    <div className="ingredients">
      <Link to="/addingredient" className="add-item">
        <span>Add Item To Ingredient</span>
        <IoMdAdd />
      </Link>
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
    </div>
  );
};

export default Ingredients;
