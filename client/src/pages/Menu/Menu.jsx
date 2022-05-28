import React, { useState } from "react";
import Card from "../../components/Card/Card";
import food1 from "../../assets/food1.jpg";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  const categoryData = ["All", "Veg", "Non-Veg", "Vegan"];
  const availibilityData = ["Available", "Not-Available", "All"];
  const cuisineData = ["Indian", "American", "Chineese", "All"];
  const bestTimeToEatData = ["Breakfast", "Lunch", "Dinner", "Desert", "All"];

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
        <Card
          img={food1}
          name="Avacado egg"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste."
          price={200}
          status="Available"
        />
        <Card
          img={food1}
          name="Avacado egg"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste."
          price={200}
          status="Out Of Stock"
        />
        <Card
          img={food1}
          name="Avacado egg"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste."
          price={200}
          status="Available"
        />
        <Card
          img={food1}
          name="Avacado egg"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste."
          price={200}
          status="Out Of Stock"
        />
        <Card
          img={food1}
          name="Avacado egg"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste."
          price={200}
          status="Out Of Stock"
        />
        <Card
          img={food1}
          name="Avacado egg"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste."
          price={200}
          status="Out Of Stock"
        />
      </div>
    </div>
  );
};

export default Menu;
