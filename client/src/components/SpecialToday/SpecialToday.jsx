import React, { useEffect, useState } from "react";
import "./SpecialToday.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { GiBuyCard } from "react-icons/gi";
import { Autoplay, Pagination, Navigation } from "swiper";
import food1 from "../../assets/food1.jpg";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";
import axios from "axios";
const client_server_url = import.meta.env.VITE_APP_CLIENT_SERVER_URL;

const SpecialToday = () => {
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    axios
      .get(`${client_server_url}/Specials`)
      .then((res) => {
        console.log(res.data);
        setSpecials(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="special-today">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {specials.map((special, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={special.Image}></img>
              <div className="info">
                <div className="title">{special.ItemId}</div>
                <div className="utilities">
                  <div className="btn">
                    Order
                    <GiBuyCard />
                  </div>
                  <div className="btn">
                    Add To Your Dish
                    <AiOutlineShoppingCart />
                  </div>
                  <div className="btn">
                    Favourite
                    <MdOutlineFavorite />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SpecialToday;
