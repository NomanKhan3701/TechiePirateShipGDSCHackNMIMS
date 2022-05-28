import React from "react";
import FavouriteCard from "../../components/FavouriteCard/FavouriteCard";
import food1 from "../../assets/food1.jpg";
import "./Favourite.scss";

const Favourite = () => {
  return (
    <div className="menu">
      <div className="card-container">
        <FavouriteCard
          img={food1}
          name="Avacado egg"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste."
          price={200}
          status="Out Of Stock"
        />
        <FavouriteCard
          img={food1}
          name="Avacado egg"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste."
          price={200}
          status="Available"
        />
        <FavouriteCard
          img={food1}
          name="Avacado egg"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste."
          price={200}
          status="Out Of Stock"
        />
        <FavouriteCard
          img={food1}
          name="Avacado egg"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste."
          price={200}
          status="Available"
        />
        <FavouriteCard
          img={food1}
          name="Avacado egg"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste."
          price={200}
          status="Out Of Stock"
        />
        <FavouriteCard
          img={food1}
          name="Avacado egg"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos quasi obcaecati facilis. Esse mollitia impedit accusamus maiores molestiae ab exercitationem. Natus quas illum eum eaque cupiditate asperiores beatae iste."
          price={200}
          status="Available"
        />
      </div>
    </div>
  );
};

export default Favourite;
