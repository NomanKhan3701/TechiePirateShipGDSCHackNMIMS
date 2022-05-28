import React from "react";
import "./Ingredients.scss";
import food2 from "../../assets/food2.jpg";
import ingredient1 from "../../assets/ingredient1.jpg";

const Ingredients = () => {
  return (
    <div className="ingredients-container">
      <div className="ingredient">
        <img src={ingredient1} alt="" />
        <div className="info-div"></div>
      </div>
    </div>
  );
};

export default Ingredients;
