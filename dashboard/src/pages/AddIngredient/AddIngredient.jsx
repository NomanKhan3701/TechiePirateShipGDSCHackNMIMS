import React, { useState } from "react";
import "./AddIngredient.scss";
import FileUpload from "../../components/FileUpload/FileUpload";

const AddIngredient = () => {
  const [files, setFiles] = useState([]);
  const [prevImg, setPrevImg] = useState();

  return (
    <div className="add-ingredient">
      <div className="form-container">
        <div className="item-form">
          <h1 className="title">ADD NEW INGREDIENT</h1>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Name Of The INGREDIENT"
            className="item-input"
          />
          <FileUpload setFiles={setFiles} setPrevImg={setPrevImg} />
          <input
            type="number"
            name=""
            id=""
            placeholder="Enter Quantity"
            className="item-input"
          />
          <input type="text" name="" placeholder="Enter Measure (e.g. Kg, L)" />
          <div className="btn">Add Ingredient</div>
        </div>
      </div>
    </div>
  );
};

export default AddIngredient;
