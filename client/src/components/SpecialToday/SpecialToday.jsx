import React from "react";
import "./SpecialToday.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiFillDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { GiBuyCard } from "react-icons/gi";
import { CgArrowsExchange } from "react-icons/cg";
import { Autoplay, Pagination, Navigation } from "swiper";
import food1 from "../../assets/food1.jpg";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";

const SpecialToday = () => {
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
        <SwiperSlide>
          <img src={food1}></img>
          <div className="info">
            <div className="title">Burger</div>
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
        <SwiperSlide>
          <img src={food2}></img>
          <div className="info">
            <div className="title">Chicken Burger</div>
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
        <SwiperSlide>
          <img src={food3}></img>
          <div className="info">
            <div className="title">Pastery</div>
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
      </Swiper>
    </div>
  );
};

export default SpecialToday;
