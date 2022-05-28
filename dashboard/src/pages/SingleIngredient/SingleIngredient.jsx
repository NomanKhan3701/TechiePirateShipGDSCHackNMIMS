import React, { useState } from "react";
import "./SingleIngredient.scss";
import { BiFoodMenu } from "react-icons/bi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import food from "../../assets/ingredient1.jpg";

const SingleIngredient = () => {
  const [qty, setQty] = useState(2);

  return (
    <div className="single-ingredient">
      <img src={food} alt="" />
      <div className="qty-container">
        <h1>Beans - Quantity |</h1>
        <AiOutlineMinus
          onClick={() =>
            setQty((qty) => {
              return qty === 0 ? 0 : parseInt(qty) - 1;
            })
          }
        />
        <input
          type="number"
          className="qty"
          onChange={(e) => setQty(e.target.value)}
          value={qty}
          placeholder="0"
        />
        <span>Kg</span>
        <AiOutlinePlus
          onClick={() =>
            setQty((qty) => {
              return qty ? parseInt(qty) + 1 : 1;
            })
          }
        />
      </div>

      <div className="ingredients">
        <h2>This ingredient is used in</h2>
        <ol>
          <li>
            <BiFoodMenu />
            Burger
          </li>
          <li>
            <BiFoodMenu />
            Chicken
          </li>
          <li>
            <BiFoodMenu />
            Pizza
          </li>
          <li>
            <BiFoodMenu />
            Chicken wings
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SingleIngredient;
