import React, { useState, useEffect } from "react";
import FavouriteCard from "../../components/FavouriteCard/FavouriteCard";
import food1 from "../../assets/food1.jpg";
import "./Favourite.scss";
import axios from "axios";
const client_server_url = import.meta.env.VITE_APP_CLIENT_SERVER_URL;

const Favourite = () => {
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    const MobileNumber = JSON.parse(localStorage.getItem("User"));

    axios
      .get(`${client_server_url}/Favourites`, {
        MobileNumber: MobileNumber,
      })
      .then((res) => {
        console.log(res.data);
        setFavourite(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="menu">
      <div className="card-container">
        {favourite.map((fav, index) => {
          return (
            <FavouriteCard
              key={index}
              img={fav.Image}
              name={fav.ItemId}
              desc={fav.Description}
              price={fav.Price}
              status={item.Availability === true ? "Available" : "Out Of Stock"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favourite;
