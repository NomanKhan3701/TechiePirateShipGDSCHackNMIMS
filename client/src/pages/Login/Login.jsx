import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import axios from "axios";
import FullScreenLoader from "./FullScreenLoader";
import "react-toastify/dist/ReactToastify.css";
import "./Login.scss";

const client_server_url = import.meta.env.VITE_APP_CLIENT_SERVER_URL;

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    MobileNumber: "",
    password: "",
  });
  const navigate = useNavigate();

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

      let res;
      try {
        res = await axios.post(`${client_server_url}/Login/`, {
          MobileNumber: loginData.MobileNumber,
          password: loginData.password,
        });
        localStorage.setItem("token", res.data);
        localStorage.setItem("User", loginData.MobileNumber);
        setLoading(false);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
      navigate("/");
      window.location.reload(false);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer></ToastContainer>
      <div className="login">
        <h1>Login</h1>
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
        <div
          className="btn"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </div>
      </div>
    </div>
  );
};
export default Login;
