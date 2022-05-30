import React, { useEffect, useState } from "react";
import "./Order.scss";
import { GiRiceCooker, GiPlayerPrevious } from "react-icons/gi";
import { GrCompliance } from "react-icons/gr";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import food1 from "../../assets/food1.jpg";
import axios from "axios";
const client_server_url = import.meta.env.VITE_APP_CLIENT_SERVER_URL;

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
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get(`${client_server_url}/Order`, {
        params: { SortBy: "Ongoing" },
      })
      .then((res) => {
        console.log(res.data);
        setOrder(res.data);
      });
  }, []);

  return (
    <div className={`cooking-orders ${order.length === 0 ? 'active':''}`}>
      {order.length !== 0 ? (
        order.map((ord, index) => {
          return (
            <div key={index} className="card">
              <div className="top">
                <div className="info">
                  <span className="order-number">{ord.OrderId} | </span>
                  <span className="date">{ord.OrderDate}</span>
                </div>
                <div className="status">Cooking</div>
              </div>
              <div className="middle">
                <div className="left">
                  {ord.Items.map((item, index) => {
                    return (
                      <div key={index} className="order-info">
                        {item} x {ord.Quantity[index]},
                      </div>
                    );
                  })}
                </div>
                <div className="right">
                  <div className="price">Price - ${ord.TotalCost}</div>
                </div>
              </div>
              <div className="bottom">View Details</div>
            </div>
          );
        })
      ) : (
        <h1 className="nothing">Order Food</h1>
      )}
    </div>
  );
};

export const CompletedOrders = (props) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get(`${client_server_url}/Order`, {
        params: { SortBy: "Completed" },
      })
      .then((res) => {
        console.log(res.data);
        setOrder(res.data);
      });
  }, []);

  return (
    <div className={`completed-orders ${order.length === 0 ? 'active':''}`}>
      {order.length != 0 ? (
        order.map((ord, index) => {
          return (
            <div key={index} className="card">
              <div className="top">
                <div className="info">
                  <span className="order-number">{ord.OrderId} | </span>
                  <span className="date">{ord.OrderDate}</span>
                </div>
                <div className="status">Completed</div>
              </div>
              <div className="middle">
                <div className="left">
                  {ord.Items.map((item, index) => {
                    return (
                      <div key={index} className="order-info">
                        {item} x {ord.Quantity[index]},
                      </div>
                    );
                  })}
                </div>
                <div className="right">
                  <div className="price">Price - ${ord.TotalCost}</div>
                </div>
              </div>
              <div className="bottom">
                <div className="btn1">View Details</div>
                <div className="btn2">Pay</div>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="nothing">No Order Completed Yet</h1>
      )}
    </div>
  );
};

export const PreviousOrders = (props) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get(`${client_server_url}/Order`, {
        params: { SortBy: "All" },
      })
      .then((res) => {
        console.log(res.data);
        setOrder(res.data);
      });
  }, []);

  return (
    <div className={`previous-orders ${order.length === 0 ? 'active':''}`}>
      {order.length != 0 ? (
        order.map((ord, index) => {
          return (
            <div key={index} className="card">
              <div className="top">
                <div className="info">
                  <span className="order-number">{ord.OrderId} | </span>
                  <span className="date">{ord.OrderDate}</span>
                </div>
                <div className="status">Previous Order</div>
              </div>
              <div className="middle">
                <div className="left">
                  {ord.Items.map((item, index) => {
                    return (
                      <div key={index} className="order-info">
                        {item} x {ord.Quantity[index]},
                      </div>
                    );
                  })}
                </div>
                <div className="right">
                  <div className="price">Price paid - ${ord.TotalCost}</div>
                </div>
              </div>
              <div className="bottom">View Details</div>
            </div>
          );
        })
      ) : (
        <h1 className="nothing">Nothing Ordered Yet</h1>
      )}
    </div>
  );
};

export const Payment = (props) => {
  return <div className="payment">Payment</div>;
};

export default Order;
