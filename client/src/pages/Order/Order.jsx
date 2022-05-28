import React, { useEffect } from "react";
import "./Order.scss";
import { GiRiceCooker, GiPlayerPrevious } from "react-icons/gi";
import { GrCompliance } from "react-icons/gr";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import food1 from "../../assets/food1.jpg";

const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/order") navigate("cookingorders");
    console.log(location.pathname);
  });

  const navLinkStyle = ({ isActive }) => {
    return {
      background: isActive ? "white" : "",
    };
  };

  return (
    <div className="order-container">
      <div className="sidebar">
        <div className="links">
          <NavLink style={navLinkStyle} to="cookingorders" className="link">
            <GiRiceCooker /> Orders Cooking
          </NavLink>
          <NavLink style={navLinkStyle} to="completedorders" className="link">
            <div className="link">
              <GrCompliance /> Completed Orders
            </div>
          </NavLink>
          <NavLink style={navLinkStyle} to="previousorders" className="link">
            <BsFillCartCheckFill /> Previous Orders
          </NavLink>
          <NavLink style={navLinkStyle} to="payment" className="link">
            <MdOutlinePayment /> Payment
          </NavLink>
        </div>
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
};

export const CookingOrders = (props) => {
  return (
    <div className="cooking-orders">
      <div className="card">
        <div className="top">
          <div className="info">
            <span className="order-number">#oms8328273 | </span>
            <span className="date">27 Feb 2003</span>
          </div>
          <div className="status">Cooking</div>
        </div>
        <div className="middle">
          <div className="left">
            <div className="order-info">Dragon Chicken x 1,</div>
            <div className="order-info">Veg Fried Rice x 1</div>
            <div className="order-info">& Schezwan Cauliflower x 1</div>
          </div>
          <div className="right">
            <div className="price">Price - $1000</div>
          </div>
        </div>
        <div className="bottom">View Details</div>
      </div>
      <div className="card">
        <div className="top">
          <div className="info">
            <span className="order-number">#oms8328273 | </span>
            <span className="date">27 Feb 2003</span>
          </div>
          <div className="status">Cooking</div>
        </div>
        <div className="middle">
          <div className="left">
            <div className="order-info">Dragon Chicken x 1,</div>
            <div className="order-info">Veg Fried Rice x 1</div>
            <div className="order-info">& Schezwan Cauliflower x 1</div>
          </div>
          <div className="right">
            <div className="price">Price - $1000</div>
          </div>
        </div>
        <div className="bottom">View Details</div>
      </div>
      <div className="card">
        <div className="top">
          <div className="info">
            <span className="order-number">#oms8328273 | </span>
            <span className="date">27 Feb 2003</span>
          </div>
          <div className="status">Cooking</div>
        </div>
        <div className="middle">
          <div className="left">
            <div className="order-info">Dragon Chicken x 1,</div>
            <div className="order-info">Veg Fried Rice x 1</div>
            <div className="order-info">& Schezwan Cauliflower x 1</div>
          </div>
          <div className="right">
            <div className="price">Price - $1000</div>
          </div>
        </div>
        <div className="bottom">View Details</div>
      </div>
      <div className="card">
        <div className="top">
          <div className="info">
            <span className="order-number">#oms8328273 | </span>
            <span className="date">27 Feb 2003</span>
          </div>
          <div className="status">Cooking</div>
        </div>
        <div className="middle">
          <div className="left">
            <div className="order-info">Dragon Chicken x 1,</div>
            <div className="order-info">Veg Fried Rice x 1</div>
            <div className="order-info">& Schezwan Cauliflower x 1</div>
          </div>
          <div className="right">
            <div className="price">Price - $1000</div>
          </div>
        </div>
        <div className="bottom">View Details</div>
      </div>
      <div className="card">
        <div className="top">
          <div className="info">
            <span className="order-number">#oms8328273 | </span>
            <span className="date">27 Feb 2003</span>
          </div>
          <div className="status">Cooking</div>
        </div>
        <div className="middle">
          <div className="left">
            <div className="order-info">Dragon Chicken x 1,</div>
            <div className="order-info">Veg Fried Rice x 1</div>
            <div className="order-info">& Schezwan Cauliflower x 1</div>
          </div>
          <div className="right">
            <div className="price">Price - $1000</div>
          </div>
        </div>
        <div className="bottom">View Details</div>
      </div>
    </div>
  );
};

export const CompletedOrders = (props) => {
  return (
    <div className="completed-orders">
      <div className="card">
        <div className="top">
          <div className="info">
            <span className="order-number">#oms8328273 | </span>
            <span className="date">27 Feb 2003</span>
          </div>
          <div className="status">Completed</div>
        </div>
        <div className="middle">
          <div className="left">
            <div className="order-info">Dragon Chicken x 1,</div>
            <div className="order-info">Veg Fried Rice x 1</div>
            <div className="order-info">& Schezwan Cauliflower x 1</div>
          </div>
          <div className="right">
            <div className="price">Price - $1000</div>
          </div>
        </div>
        <div className="bottom">View Details</div>
      </div>
      <div className="card">
        <div className="top">
          <div className="info">
            <span className="order-number">#oms8328273 | </span>
            <span className="date">27 Feb 2003</span>
          </div>
          <div className="status">Completed</div>
        </div>
        <div className="middle">
          <div className="left">
            <div className="order-info">Dragon Chicken x 1,</div>
            <div className="order-info">Veg Fried Rice x 1</div>
            <div className="order-info">& Schezwan Cauliflower x 1</div>
          </div>
          <div className="right">
            <div className="price">Price - $1000</div>
          </div>
        </div>
        <div className="bottom">View Details</div>
      </div>
      <div className="card">
        <div className="top">
          <div className="info">
            <span className="order-number">#oms8328273 | </span>
            <span className="date">27 Feb 2003</span>
          </div>
          <div className="status">Completed</div>
        </div>
        <div className="middle">
          <div className="left">
            <div className="order-info">Dragon Chicken x 1,</div>
            <div className="order-info">Veg Fried Rice x 1</div>
            <div className="order-info">& Schezwan Cauliflower x 1</div>
          </div>
          <div className="right">
            <div className="price">Price - $1000</div>
          </div>
        </div>
        <div className="bottom">View Details</div>
      </div>
    </div>
  );
};

export const PreviousOrders = (props) => {
  return (
    <div className="previous-orders">
      <div className="card">
        <div className="top">
          <div className="info">
            <span className="order-number">#oms8328273 | </span>
            <span className="date">27 Feb 2003</span>
          </div>
          <div className="status">Previous Order</div>
        </div>
        <div className="middle">
          <div className="left">
            <div className="order-info">Dragon Chicken x 1,</div>
            <div className="order-info">Veg Fried Rice x 1</div>
            <div className="order-info">& Schezwan Cauliflower x 1</div>
          </div>
          <div className="right">
            <div className="price">Price paid - $1000</div>
          </div>
        </div>
        <div className="bottom">View Details</div>
      </div>
      <div className="card">
        <div className="top">
          <div className="info">
            <span className="order-number">#oms8328273 | </span>
            <span className="date">27 Feb 2003</span>
          </div>
          <div className="status">Previous Order</div>
        </div>
        <div className="middle">
          <div className="left">
            <div className="order-info">Dragon Chicken x 1,</div>
            <div className="order-info">Veg Fried Rice x 1</div>
            <div className="order-info">& Schezwan Cauliflower x 1</div>
          </div>
          <div className="right">
            <div className="price">Price paid - $1000</div>
          </div>
        </div>
        <div className="bottom">View Details</div>
      </div>
      <div className="card">
        <div className="top">
          <div className="info">
            <span className="order-number">#oms8328273 | </span>
            <span className="date">27 Feb 2003</span>
          </div>
          <div className="status">Previous Order</div>
        </div>
        <div className="middle">
          <div className="left">
            <div className="order-info">Dragon Chicken x 1,</div>
            <div className="order-info">Veg Fried Rice x 1</div>
            <div className="order-info">& Schezwan Cauliflower x 1</div>
          </div>
          <div className="right">
            <div className="price">Price paid - $1000</div>
          </div>
        </div>
        <div className="bottom">View Details</div>
      </div>
    
    </div>
  );
};

export const Payment = (props) => {
  return <div className="payment">Payment</div>;
};

export default Order;
