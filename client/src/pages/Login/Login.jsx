import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import FullScreenLoader from "./FullScreenLoader";
import "react-toastify/dist/ReactToastify.css";
// import "./Login.scss";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    MobileNumber: null,
    password: "",
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

  const onChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = async () => {
    if (!(loginData.MobileNumber && loginData.password)) {
      toast.error("Fields cannot be empty.", { position: "top-center" });
    } else {
      setLoading(true);
      console.log("posting login data.");
      const { data: response } = await axios.post(
        `http://localhost:8000/api/Login/`,
        {
          MobileNumber: loginData.MobileNumber,
          password: loginData.password,
        }
      );
      localStorage.setItem("token", res.data);
    }
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <input
        type="text"
        name="MobileNumber"
        value={loginData.MobileNumber}
        placeholder="MobileNumber"
        onChange={onChange}
      ></input>
      <input
        type="password"
        name="password"
        value={loginData.password}
        placeholder="password"
        onChange={onChange}
      ></input>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};
export default Login;
