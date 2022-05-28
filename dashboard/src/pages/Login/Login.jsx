import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import FullScreenLoader from "./FullScreenLoader";
import "react-toastify/dist/ReactToastify.css";
import "./Login.scss";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    id: "",
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

  const submit = () => {
    if (!(loginData.id && loginData.password)) {
      toast.error("Fields cannot be empty.", { position: "top-center" });
    } else {
      setLoading(true);
      axios
        .post(``, {
          id: loginData.id,
          password: loginData.password,
        })
        .then((response) => {
          setLoading(false);
        });
    }
  };
  return (
    <div className="login-container">
      <ToastContainer></ToastContainer>
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="id"
          value={loginData.id}
          placeholder="Id"
          onChange={onChange}
        ></input>
        <input
          type="password"
          name="password"
          value={loginData.password}
          placeholder="password"
          onChange={onChange}
        ></input>
        <div className="btn" onClick={submit}>
          Submit
        </div>
      </div>
    </div>
  );
};
export default Login;
