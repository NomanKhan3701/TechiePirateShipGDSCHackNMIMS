import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import food1 from "../../assets/food1.jpg";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import FullScreenLoader from "../../components/FullScreenLoader/FullScreenLoader";
import "./Menu.scss";
const client_server_url = import.meta.env.VITE_APP_CLIENT_SERVER_URL;

const Menu = () => {
  const categoryData = ["All", "Veg", "Non-Veg", "Vegan"];
  const availibilityData = ["Available", "Not-Available", "All"];
  const cuisineData = ["Indian", "American", "Chineese", "All"];
  const bestTimeToEatData = ["Breakfast", "Lunch", "Dinner", "Desert", "All"];

  const [isLoading, setLoading] = useState(true);
  const [menuData, setMenuData] = useState();
  const [foodData, setFoodData] = useState({
    ItemName: "",
    Image: "",
    Category: "Veg",
    Cuisine: "American",
    BestTimeToEat: "Breakfast",
    Price: "",
    Availability: "Available",
    Ingrediants: "",
    Description: "",
  });

  const dropdownChange = (event) => {
    const { name, value } = event.target;
    setFoodData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  useEffect(() => {
    axios
      .get(`${client_server_url}/FoodItem`, {
        SortBy: "None",
      })
      .then((response) => {
        setLoading(false);
        setMenuData(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <div className="menu-container">
      <div className="filter-container">
        <h1>Filter</h1>
        <div className="categories">
          <select
            className="select-filter"
            name="Category"
            id="Category"
            onChange={dropdownChange}
          >
            {categoryData.map((data) => {
              return <option>{data}</option>;
            })}
          </select>
        </div>
        <div className="categories">
          <select
            className="select-filter"
            name="Cuisine"
            id="Cuisine"
            onChange={dropdownChange}
          >
            {cuisineData.map((data) => {
              return <option>{data}</option>;
            })}
          </select>
        </div>
        <div className="categories">
          <select
            className="select-filter"
            name="BestTimeToEat"
            id="BestTimeToEat"
            onChange={dropdownChange}
          >
            {bestTimeToEatData.map((data) => {
              return <option>{data}</option>;
            })}
          </select>
        </div>
        <div className="categories">
          <select
            className="select-filter"
            name="Availibility"
            id="Availibility"
            onChange={dropdownChange}
          >
            {availibilityData.map((data) => {
              return <option>{data}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="card-container">
        {menuData.map((item) => {
          return (
            <Card
              id={item.ItemId}
              img={item.Image}
              name={item.ItemName}
              desc={item.Description}
              price={item.Price}
              status={item.Availability === true ? "Available" : "Out Of Stock"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
