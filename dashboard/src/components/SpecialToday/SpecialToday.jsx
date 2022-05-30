import React, { useState, useEffect } from "react";
import "./SpecialToday.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiFillDelete } from "react-icons/ai";
import { CgArrowsExchange } from "react-icons/cg";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import axios from "axios";
import food1 from "../../assets/food1.jpg";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";
const admin_server_url = import.meta.env.VITE_APP_ADMIN_SERVER_URL;

const SpecialToday = () => {
  const [special, setSpecial] = useState([]);

  useEffect(() => {
    axios.get(`${admin_server_url}/Specials`).then((res) => {
      setSpecial(res.data);
      console.log(res.data);
    });
  }, []);

  const deleteSpecial = (name) => {
    axios
      .delete(`${admin_server_url}/Specials`, {
        SpecialItem: name,
      })
      .then((res) => console.log(res));
  };

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
        {special.map((spc, index) => {
          const name = spc.ItemId;
          return (
            <SwiperSlide key={index}>
              <img src={food1}></img>
              <div className="info">
                <div className="title">{name}</div>
                <div className="utilities">
                  <div className="btn" onClick={(name) => deleteSpecial(name)}>
                    Delete
                    <AiFillDelete />
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
