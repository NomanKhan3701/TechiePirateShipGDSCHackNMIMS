import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "rgb(26, 26, 26)" : "rgb(115, 115, 115)",
    };
  };

  return (
    <div className="navbar flex-cc">
      <div className="logo">
        <img src={logo} alt="blog logo" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search food..." />
        <BsSearch className="i" />
      </div>
      <div className="links">
        <div className="left-links flex-cc">
          <NavLink style={navLinkStyle} to="/" className="link active">
            Home
          </NavLink>
          <NavLink style={navLinkStyle} to="/menu" className="link">
            Menu
          </NavLink>
          <NavLink style={navLinkStyle} to="/mydish" className="link">
            My dish
          </NavLink>
          <NavLink style={navLinkStyle} to="/order" className="link">
            Order
          </NavLink>
          <NavLink style={navLinkStyle} to="/favourite" className="link">
            Favourite
          </NavLink>
        </div>
        {loggedIn ? (
          <div className="right-links flex-cc">
            <Link to="/profile">
              <img src="" alt="" />
            </Link>
          </div>
        ) : (
          <div className="right-links flex-cc">
            <NavLink style={navLinkStyle} to="/login" className="link">
              Login
            </NavLink>
            <Link to="/signup" className="link btn">
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
