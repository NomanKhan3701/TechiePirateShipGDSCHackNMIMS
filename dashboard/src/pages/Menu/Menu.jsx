import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import food1 from "../../assets/food1.jpg";
import axios from "axios";
import { IoMdAdd } from "react-icons/io";
import { Link, useSearchParams } from "react-router-dom";
import "./Menu.scss";
import FullScreenLoader from "../../components/FullScreenLoader/FullScreenLoader";
const admin_server_url = import.meta.env.VITE_APP_ADMIN_SERVER_URL;

const Menu = () => {
  const [menuData, setMenuData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    axios
      .get(`${admin_server_url}/FoodItem`, { params: { SortBy: "None" } })
      .then((response) => {
        setLoading(false);
        console.log(response);
        setMenuData(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
=======
    axios.get(`${admin_server_url}/FoodItem`,{params:{SortBy:"None"}}).then((response) => {
     
      setLoading(false);
      setMenuData(response.data);
      console.log(response.data);
    });
>>>>>>> 44cc91e7fe7020715f13c02524da153be5b130cb
  }, []);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <div className="menu">
      <Link to="/additemtomenu" className="add-item">
        <span>Add Item To Menu</span>
        <IoMdAdd />
      </Link>
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
