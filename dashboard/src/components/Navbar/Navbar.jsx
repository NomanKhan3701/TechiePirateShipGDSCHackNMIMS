import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import userImg from "../../assets/p1.jpg";

const Navbar = () => {
  const [loggedIn, setloggedIn] = useState(false);

  return (
    <div className="navbar flex-cc">
      <div className="logo">
        <img src={logo} alt="blog logo" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search post..." />
        <BsSearch className="i" />
      </div>
      <div className="links">
        <div className="left-links flex-cc">
          <Link to="/" className="link active">
            Home
          </Link>
          <Link to="/categories" className="link">
            Categories
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
        {loggedIn ? (
          <div className="right-links flex-cc">
            <Link to="/profile">
              <img src={userImg} alt="" />
            </Link>
          </div>
        ) : (
          <div className="right-links flex-cc">
            <Link to="/login" className="link">
              Login
            </Link>
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
