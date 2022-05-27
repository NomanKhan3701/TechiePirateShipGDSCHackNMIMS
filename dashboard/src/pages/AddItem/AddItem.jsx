import { useEffect, useState } from "react";
import FileUpload from "../../components/FileUpload/FileUpload";
import "./AddItem.scss";

const AddItem = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className="base-container">
      <div className="form-container">
        <div className="item-form">
          <h1 className="title">ADD NEW ITEM</h1>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Name Of The Item"
            className="item-input"
          />
          <FileUpload setFiles={setFiles} />
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Price"
            className="item-input"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Ingredients (seperated by comma ',')"
            className="item-input"
          />
          <textarea placeholder="Enter description" />
          <div className="btn">Add Item</div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
