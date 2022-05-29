import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import SpecialToday from "../../components/SpecialToday/SpecialToday";
import food1 from "../../assets/food1.jpg";
import "./Home.scss";
import FullScreenLoader from "../../components/FullScreenLoader/FullScreenLoader";
import axios from "axios";
const client_server_url = import.meta.env.VITE_APP_CLIENT_SERVER_URL;

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${client_server_url}/FoodItem`, {
        params: { SortBy: "Popularity" },
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setTrending(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <div className="home">
      <SpecialToday />
      <div className="trending-container">
        <h1>Trending</h1>
        <div className="trending">
          {trending.map((trend, index) => {
            return (
              <Card
                key={index}
                img={trend.Image}
                name={trend.ItemId}
                desc={trend.Description}
                price={200}
                status={trend.Availability ? `Available` : `Out Of Stock`}
                like={trend.Likes.length}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
