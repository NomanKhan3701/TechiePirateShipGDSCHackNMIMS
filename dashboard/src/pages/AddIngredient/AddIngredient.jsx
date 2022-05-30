import React, { useState } from "react";
import "./AddIngredient.scss";
import FileUpload from "../../components/FileUpload/FileUpload";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const admin_server_url = import.meta.env.VITE_APP_ADMIN_SERVER_URL;

const AddIngredient = () => {
  const [files, setFiles] = useState([]);
  const [prevImg, setPrevImg] = useState();
  const [inventoryData, setInventoryData] = useState({
    ItemId: "",
    ItemName: "",
    Quantity: "",
    ItemMeasure: "",
    ItemImage: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setInventoryData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const submit = async () => {
    if (
      !(
        inventoryData.ItemName &&
        inventoryData.ItemMeasure &&
        inventoryData.Quantity
      )
    ) {
      toast.error("Item name/measure/quantity cannot be empty.", {
        position: "top-center",
      });
    } else {
      const { data: res } = await axios.post(`${admin_server_url}/Inventory`, {
        ItemName: inventoryData.ItemName,
        ItemImage: prevImg,
        ItemId: inventoryData.ItemName,
        ItemMeasure: inventoryData.ItemMeasure,
        Quantity: inventoryData.Quantity,
      });
      console.log(res);
    }
  };

  return (
    <div className="add-ingredient">
      <ToastContainer></ToastContainer>
      <div className="form-container">
        <div className="item-form">
          <h1 className="title">ADD NEW INVENTORY</h1>
          <input
            type="text"
            name="ItemName"
            id="ItemName"
            placeholder="Enter Name Of The INVENTORY"
            className="item-input"
            value={inventoryData.ItemName}
            onChange={onChange}
          />
          <FileUpload setFiles={setFiles} setPrevImg={setPrevImg} />
          <input
            type="number"
            name="Quantity"
            id="Quantity"
            placeholder="Enter Quantity"
            className="item-input"
            value={inventoryData.Quantity}
            onChange={onChange}
          />
          <input
            type="text"
            name="ItemMeasure"
            id="ItemMeasure"
            placeholder="Enter Measure (e.g. Kg, L)"
            value={inventoryData.ItemMeasure}
            onChange={onChange}
          />
          <div className="btn" onClick={submit}>
            Add Ingredient
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIngredient;
