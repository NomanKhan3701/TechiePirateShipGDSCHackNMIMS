import React from "react";
import SpecialToday from "../../components/SpecialToday/SpecialToday";
import "./Home.scss";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const Home = () => {
  return (
    <div className="home">
      <SpecialToday />
      <Link to='/additemtospecial' className="add-special">
        Add items to Special <IoMdAdd />
      </Link>
    </div>
  );
};

export default Home;
