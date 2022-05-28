import React, { useState, useEffect } from "react";
import "./Ingredients.scss";
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import ingredient1 from "../../assets/ingredient1.jpg";
import { Link } from "react-router-dom";
import FullScreenLoader from "./FullScreenLoader";
const admin_server_url = import.meta.env.VITE_APP_ADMIN_SERVER_URL;
import axios from "axios";

const Ingredients = () => {
  const [inventoryData, setInventoryData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${admin_server_url}/Inventory`).then((response) => {
      setLoading(false);
      setInventoryData(response.data);
      console.log(response.data);
    });
  }, []);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <div className="ingredients">
      <Link to="/addingredient" className="add-item">
        <span>Add Item To Invenotry</span>
        <IoMdAdd />
      </Link>
      <div className="ingredients-container">
        {inventoryData.map((data) => {
          return (
            <div className="ingredient">
              <div className="img">
                <img src={data.ItemImage} alt="" />
                <div className="info-div">
                  <AiOutlineMinus />
                  <div className="name">{data.ItemName}</div>
                  <div className="quantity">{`Quantity - ${data.Quantity} ${data.ItemMeasure}`}</div>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="ingredient">
          <div className="img">
            <img src={ingredient1} alt="" />
            <div className="item-id">#FF7236</div>
            <div className="info-div">
              <AiOutlineMinus />
              <div className="name">Beans</div>
              <div className="quantity">Quantity - 7kg</div>
            </div>
          </div>
        </div>
        <div className="ingredient">
          <div className="img">
            <img src={ingredient1} alt="" />
            <div className="item-id">#FF7236</div>
            <div className="info-div">
              <AiOutlineMinus />
              <div className="name">Beans</div>
              <div className="quantity">Quantity - 7kg</div>
            </div>
          </div>
        </div>
        <div className="ingredient">
          <div className="img">
            <img src={ingredient1} alt="" />
            <div className="item-id">#FF7236</div>
            <div className="info-div">
              <AiOutlineMinus />
              <div className="name">Beans</div>
              <div className="quantity">Quantity - 7kg</div>
            </div>
          </div>
        </div>
        <div className="ingredient">
          <div className="img">
            <img src={ingredient1} alt="" />
            <div className="item-id">#FF7236</div>
            <div className="info-div">
              <AiOutlineMinus />
              <div className="name">Beans</div>
              <div className="quantity">Quantity - 7kg</div>
            </div>
          </div>
        </div>
        <div className="ingredient">
          <div className="img">
            <img src={ingredient1} alt="" />
            <div className="item-id">#FF7236</div>
            <div className="info-div">
              <AiOutlineMinus />
              <div className="name">Beans</div>
              <div className="quantity">Quantity - 7kg</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Ingredients;
