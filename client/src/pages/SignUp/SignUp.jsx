import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import FullScreenLoader from "./FullScreenLoader";
import "react-toastify/dist/ReactToastify.css";
// import "./Login.scss";

const SignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    phone: NaN,
    password: "",
    cnfrmPassword: "",
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
    if (!(loginData.username && loginData.password)) {
      toast.error("Fields cannot be empty.", { position: "top-center" });
    } else {
      setLoading(true);
      axios
        .post(``, {
          username: loginData.username,
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
        name="username"
        value={loginData.username}
        placeholder="username"
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="phone"
        value={loginData.phone}
        placeholder="phone number"
        onChange={onChange}
      ></input>
      <input
        type="password"
        name="password"
        value={loginData.password}
        placeholder="password"
        onChange={onChange}
      ></input>
      <input
        type="password"
        name="cnfrmPassword"
        value={loginData.cnfrmPassword}
        placeholder="confirm password"
        onChange={onChange}
      ></input>

      <button onClick={submit}>Submit</button>
    </div>
  );
};
export default SignUp;
