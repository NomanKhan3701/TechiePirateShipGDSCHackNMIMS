import React, { useState, useEffect } from "react";
import SpecialToday from "../../components/SpecialToday/SpecialToday";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
const admin_server_url = import.meta.env.VITE_APP_ADMIN_SERVER_URL;

const Home = () => {
  const [itemName, setItemName] = useState("");

  const handleSubmit = () => {
    axios
      .post(`${admin_server_url}/Specials`, {
        SpecialItem: itemName,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="home">
      <SpecialToday />
      <div id="#special" className="add-special-container">
        <input
          type="text"
          name="ItemName"
          id="ItemName"
          placeholder="Enter Name Of The Item"
          className="item-input"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <div className="add-special" onClick={handleSubmit}>
          Add items to Special <IoMdAdd />
        </div>
      </div>
    </div>
  );
};

export default Home;
