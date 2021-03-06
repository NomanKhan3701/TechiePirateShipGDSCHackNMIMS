import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import logo from "../../assets/logo.png";
import { BiX } from "react-icons/bi";
import { AiOutlineAlignLeft, AiFillHome, AiTwotoneHeart } from "react-icons/ai";
import { useNavigate } from "react-router";
import { IoMdCart } from "react-icons/io";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdMenuBook } from "react-icons/md";

const Navbar = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) setloggedIn(true);
    else setloggedIn(false);

    function checkLoggedInData() {
      const item = JSON.parse(localStorage.getItem("token"));
      if (item) {
        setloggedIn(true);
      }
    }
    window.addEventListener("token", checkLoggedInData);
    return () => {
      window.removeEventListener("token", checkLoggedInData);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setloggedIn(false);
    navigate("/");
  };

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "rgb(26, 26, 26)" : "rgb(115, 115, 115)",
    };
  };

  return (
    <div className="navbar flex-cc">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="blog logo" />
        </Link>
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
          <NavLink style={navLinkStyle} to="/mydish" className="link dish">
            My dish
            <div className="count">1</div>
          </NavLink>
          <NavLink style={navLinkStyle} to="/order" className="link order">
            Order
          </NavLink>
          <NavLink style={navLinkStyle} to="/favourite" className="link">
            Favourite
          </NavLink>
        </div>
        {loggedIn ? (
          <div className="right-links flex-cc">
            <div onClick={logout} className="link btn">
              Logout
            </div>
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

      <div className="sidebar">
        <AiOutlineAlignLeft
          className={`toggle-icon toggle-line ${!toggle ? "active" : ""}`}
          onClick={() => setToggle(true)}
        />
        <div className={`sidebar-toggle ${toggle ? "active" : ""}`}>
          <div className="sidebar-top">
            <BiX className="toggle-i" onClick={() => setToggle(false)} />
            <img src={logo} alt="" />
          </div>
          <div className="sidebar-links">
            <NavLink
              to="/"
              className="sidebar-link "
              onClick={() => setToggle(false)}
            >
              <AiFillHome />
              <div className="link-content">
                <span>Home</span>
              </div>
            </NavLink>
            <NavLink
              to="/menu"
              className="sidebar-link"
              onClick={() => setToggle(false)}
            >
              <MdMenuBook />
              <div className="link-content">
                <span>Menu</span>
              </div>
            </NavLink>
            <NavLink
              to="/mydish"
              className="sidebar-link"
              onClick={() => setToggle(false)}
            >
              <IoMdCart />
              <div className="link-content">
                <span>My Dish</span>
              </div>
            </NavLink>
            <NavLink
              to="/order"
              className="sidebar-link"
              onClick={() => setToggle(false)}
            >
              <BsFillCartCheckFill />
              <div className="link-content">
                <span>Order</span>
              </div>
            </NavLink>
            <NavLink
              to="/favourite"
              className="sidebar-link"
              onClick={() => setToggle(false)}
            >
              <AiTwotoneHeart />
              <div className="link-content">
                <span>Favourite</span>
              </div>
            </NavLink>
            <NavLink
              to="/login"
              className="link"
              onClick={() => setToggle(false)}
            >
              Login
            </NavLink>
            <Link
              to="/signup"
              className="link btn"
              onClick={() => setToggle(false)}
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
