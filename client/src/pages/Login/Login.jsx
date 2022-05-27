import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import FullScreenLoader from "./FullScreenLoader";
import "react-toastify/dist/ReactToastify.css";
import "./Login.scss";

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
    <div className="login-container">
      <ToastContainer></ToastContainer>
<<<<<<< HEAD
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
=======
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          value={loginData.username}
          placeholder="username"
          onChange={onChange}
        ></input>
        <input
          type="password"
          name="password"
          value={loginData.password}
          placeholder="password"
          onChange={onChange}
        ></input>
        <div className="btn" onClick={submit}>Submit</div>
      </div>
>>>>>>> 7cfbc8c9b4f564c1fa061c6101f520ac91c57ed8
    </div>
  );
};
export default Login;
