import React from "react";
import CartCard from "../../components/CartCard/CartCard";
import food1 from "../../assets/food1.jpg";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";
import { Link } from "react-router-dom";
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
        <div className="total">
          <span>Total Price </span>
          <span>$600</span>
        </div>
        <div className="gst">
          <span>GST</span>
          <span>$10</span>
        </div>
        <Link to="/checkout">
          <div className="btn">Checkout | $610</div>
        </Link>
      </div>
    </div>
  );
};

export default MyDish;
