import React from "react";
import SpecialToday from "../../components/SpecialToday/SpecialToday";
import "./Home.scss";
import { IoMdAdd } from "react-icons/io";

const Home = () => {
  return (
    <div className="home">
      <SpecialToday />
      <div className="add-special">
        Add items to Special <IoMdAdd />
      </div>
    </div>
  );
};

export default Home;
