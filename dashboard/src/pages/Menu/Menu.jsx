import React from "react";
import Card from "../../components/Card/Card";
import food1 from "../../assets/food1.jpg";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/additemtomenu" className="add-item">
        <span>Add Item To Menu</span>
        <IoMdAdd />
      </Link>
      <div className="card-container">
        <Card
          img={food1}
          name="Avacado egg"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste."
          price={200}
          status="Available"
          like={1}
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
