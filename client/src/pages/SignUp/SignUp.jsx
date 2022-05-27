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
    phone: null,
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
    const usernameRegex = new RegExp(/^([A-Za-z0-9]|[-._](?![-._])){8,20}$/);
    const passwordRegex = new RegExp(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    );
    const phoneRegex = new RegExp(/^[6-9]\d{9}$/gi);
    if (
      !(
        loginData.username &&
        loginData.password &&
        loginData.cnfrmPassword &&
        loginData.phone
      )
    ) {
      toast.error("Fields cannot be empty.", { position: "top-center" });
    } else if (!usernameRegex.test(loginData.username)) {
      toast.error(
        "Username must have between 8 and 20 characters and can contain alphanumeric characters A-Z,a-z,0-9, the special characters -._ must not be used successively and username cannot include any whitespaces",
        {
          position: "top-center",
        }
      );
    } else if (!phoneRegex.test(loginData.phone)) {
      toast.error("Please enter valid 10 digit mobile number.", {
        position: "top-center",
      });
    } else if (loginData.password !== loginData.cnfrmPassword) {
      toast.error("Password Field Didnt Match.", { position: "top-center" });
    } else if (!passwordRegex.test(loginData.password)) {
      toast.error(
        "Min 8 letter password, with at least a symbol, upper and lower case letters and a number",
        {
          position: "top-center",
        }
      );
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
