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
    <div>
      <ToastContainer></ToastContainer>
      <input
        type="text"
        name="id"
        value={loginData.id}
        placeholder="id"
        onChange={onChange}
      ></input>
      <input
        type="password"
        name="password"
        value={loginData.password}
        placeholder="password"
        onChange={onChange}
      ></input>
      <button onClick={submit}>Submit</button>
    </div>
  );
};
export default Login;
