import { useEffect, useState } from "react";
import FileUpload from "../../components/FileUpload/FileUpload";
import "./AddItem.scss";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const admin_server_url = import.meta.env.VITE_APP_ADMIN_SERVER_URL;

const AddItem = () => {
  const [files, setFiles] = useState([]);
  const [prevImg, setPrevImg] = useState();
  const categoryData = ["Veg", "Non-Veg", "Vegan"];
  const availibilityData = ["Available", "Not-Available"];
  const cuisineData = ["American", "Indian", "Chineese"];
  const bestTimeToEatData = ["Breakfast", "Lunch", "Dinner", "Desert"];

  const [foodData, setFoodData] = useState({
    ItemName: "",
    Image: "",
    Category: "Veg",
    Cuisine: "American",
    BestTimeToEat: "Breakfast",
    Price: null,
    Availability: true,
    Ingredients: "",
    Description: "",
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setFoodData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const addImage = (event) => {
    console.log(event.target);
  };
  const dropdownChange = (event) => {
    const { name, value } = event.target;
    setFoodData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  // const toggleAvailibility = (event) => {
  //   const { name, value } = event.target;
  //   console.log(name);
  //   console.log(value);
  //   // setFoodData((prevValue) => {
  //   //   return { ...prevValue, [name]: value };
  //   // });
  // };

  const submit = () => {
    setFoodData((data) => {
      return {
        ...data,
        Image: prevImg,
        Price: Number(data.Price),
        Cuisine: [data.Cuisine],
        BestTimeToEat: [data.BestTimeToEat],
        Ingredients: data.Ingredients.split(","),
      };
    });
    console.log(foodData);
    console.log("before");
    if (
      !(
        foodData.ItemName &&
        foodData.Price &&
        foodData.Ingredients &&
        foodData.Description
      )
    ) {
      toast.error("Fields cannot be empty.", {
        position: "top-center",
      });
    } else {
      console.log({ ...foodData });
      axios
        .post(`${admin_server_url}/FoodItem`, {
          ItemId: "2",
          Image: prevImg,
          Price: Number(foodData.Price),
          Cuisine: [foodData.Cuisine],
          BestTimeToEat: [foodData.BestTimeToEat],
          Ingredients: Array.isArray(foodData.Ingredients)
            ? foodData.Ingredients
            : foodData.Ingredients.split(","),
          ItemName: foodData.ItemName,
          Category: foodData.Category,
          Availability: foodData.Availability,
          Description: foodData.Description,
        })
        .then((res) => {
          console.log(res);
        });
    }
    console.log(foodData);
  };

  return (
    <div className="base-container">
      <ToastContainer></ToastContainer>
      <div className="form-container">
        <div className="item-form">
          <h1 className="title">ADD NEW ITEM</h1>
          <input
            type="text"
            name="ItemName"
            id="ItemName"
            placeholder="Enter Name Of The Item"
            className="item-input"
            value={foodData.ItemName}
            onChange={onChange}
          />

          <FileUpload setFiles={setFiles} setPrevImg={setPrevImg} />

          <div className="categories">
            <select
              className="select-filter"
              name="Category"
              id="Category"
              onChange={dropdownChange}
            >
              {categoryData.map((data) => {
                return <option>{data}</option>;
              })}
            </select>
          </div>
          <div className="categories">
            <select
              className="select-filter"
              name="Cuisine"
              id="Cuisine"
              onChange={dropdownChange}
            >
              {cuisineData.map((data) => {
                return <option>{data}</option>;
              })}
            </select>
          </div>
          <div className="categories">
            <select
              className="select-filter"
              name="BestTimeToEat"
              id="BestTimeToEat"
              onChange={dropdownChange}
            >
              {bestTimeToEatData.map((data) => {
                return <option>{data}</option>;
              })}
            </select>
          </div>
          {/* <div className="categories">
            <select
              className="select-filter"
              name="Availability"
              id="Availability"
              onChange={dropdownChange}
            >
              {availibilityData.map((data) => {
                return <option>{data}</option>;
              })}
            </select>
          </div> */}
          <input
            type="number"
            name="Price"
            id="Price"
            placeholder="Enter Price"
            className="item-input"
            value={foodData.Price}
            onChange={onChange}
          />

          <input
            type="text"
            name="Ingredients"
            id="Ingredients"
            placeholder="Enter Ingredients (seperated by comma ',')"
            className="item-input"
            value={foodData.Ingredients}
            onChange={onChange}
          />
          <textarea
            placeholder="Enter description"
            name="Description"
            id="Description"
            className="item-input"
            value={foodData.Description}
            onChange={onChange}
          />
          <div className="btn" onClick={submit}>
            Add Item
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
