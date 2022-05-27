import React from "react";
import CartCard from "../../components/CartCard/CartCard";
import food1 from "../../assets/food1.jpg";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";
import "./MyDish.scss";

const MyDish = () => {
  return (
    <div className="my-dish">
      <div className="card-container">
        <CartCard img={food1} />
        <CartCard img={food2} />
        <CartCard img={food3} />
        <CartCard img={food1} />
        <CartCard img={food2} />
        <CartCard img={food3} />
      </div>
      <div className="bill-container">
          <h1>Price</h1>
        <div className="btn">Checkout | $600</div>
      </div>
    </div>
  );
};

export default MyDish;
