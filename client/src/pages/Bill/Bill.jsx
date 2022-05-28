import React from "react";
import "./Bill.scss";

const Bill = () => {
  return (
    <div className="bill-container-client">
      <h1>Bill</h1>
      <div className="bill">
        <div className="one">
          <h2>Item Name</h2>
          <div className="lists">
            <div className="list">Chicken</div>
            <div className="list">Pizza</div>
            <div className="list">Ham</div>
          </div>
        </div>
        <div className="two">
          <h2>Item Price</h2>
          <div className="lists">
            <div className="list">$5</div>
            <div className="list">$10</div>
            <div className="list">$1</div>
          </div>
        </div>
        <div className="three">
          <h2>Item Quantity</h2>
          <div className="lists">
            <div className="list">8</div>
            <div className="list">2</div>
            <div className="list">4</div>
          </div>
        </div>
        <div className="four">
          <h2>Total Price</h2>
          <div className="lists">
            <div className="list">$40</div>
            <div className="list">$20</div>
            <div className="list">$4</div>
          </div>
        </div>
      </div>
      <div className="tax">
        <div className="prices">
          <div className="pr">Tax - $350</div> <span>|</span>{" "}
          <div className="pr">Total Price - $414</div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
