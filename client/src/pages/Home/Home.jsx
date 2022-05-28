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
    getTrending();
  }, []);

  const getTrending = async () => {
    try {
      const Data = await axios.get(`${client_server_url}/FoodItem/Popularity`);
      console.log(Data)
      setLoading(false)
    } catch (e) {
      console.log(e);
    }
  };

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <div className="home">
      <SpecialToday />
      <div className="trending-container">
        <h1>Trending</h1>
        <div className="trending">
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
    </div>
  );
};

export default Home;
