import React, { useRef, useEffect, useState } from "react";
import "./AddItem.scss";

const AddItem = () => {
  const fileRef = useRef();
  const dragRef = useRef(null);
  const [files, setFiles] = useState([]);

  const handleFileBtnClick = () => {
    fileRef.current.click();
  };

  const handleFile = (e) => {
    e.preventDefault();
    for (let i = 0; i < e.target.files.length; i++) {
      setFiles((prevFiles) => {
        return [...prevFiles, e.target.files[i]];
      });
    }
  };

  const handleDrag = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    if (type === "dragOver") dragRef.current.classList.add("active");
    else if (type === "dragLeave") dragRef.current.classList.remove("active");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragRef.current.classList.remove("active");
    const uploadedFiles = e.dataTransfer.files;
    dragRef.current.classList.add("uploading");
    for (let i = 0; i < uploadedFiles.length; i++) {
      setFiles((prevFiles) => {
        return [...prevFiles, uploadedFiles[i]];
      });
    }
    dragRef.current.classList.remove("uploading");
    console.log(files);
  };

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
          {files.length === 0 ? (
            <div className="upload-img">
              <div
                ref={dragRef}
                className="drop-area grid-cc"
                onDragOver={(e) => handleDrag(e, "dragOver")}
                onDragLeave={(e) => handleDrag(e, "dragLeave")}
                onDrop={handleDrop}
              >
                <h3>Drag & Drop Images here</h3>
                <span>OR</span>
                <div className="browse-btn" onClick={handleFileBtnClick}>
                  Browse Files
                </div>
                <input
                  ref={fileRef}
                  type="file"
                  onChange={handleFile}
                  multiple
                  hidden
                  id="myFile"
                  name="filename"
                />
              </div>
            </div>
          ) : (
            <div className="image-preview">
              <img src={files[0]} alt="image preview" />
            </div>
          )}
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
