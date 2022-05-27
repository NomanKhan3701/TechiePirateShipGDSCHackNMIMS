import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import FullScreenLoader from "./FullScreenLoader";
import "react-toastify/dist/ReactToastify.css";
// import "./Login.scss";

const SignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    firstname: "",
    lastname: "",
    MobileNumber: null,
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
    const passwordRegex = new RegExp(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    );
    const phoneRegex = new RegExp(/^[6-9]\d{9}$/gi);
    if (
      !(
        loginData.firstname &&
        loginData.lastname &&
        loginData.password &&
        loginData.cnfrmPassword &&
        loginData.MobileNumber
      )
    ) {
      toast.error("Fields cannot be empty.", { position: "top-center" });
    } else if (!phoneRegex.test(loginData.MobileNumber)) {
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
        .post(`http://localhost:8000/api/SignUp/`, {
          firstName: loginData.firstname,
          lastName: loginData.lastname,
          MobileNumber: loginData.MobileNumber,
          password: loginData.password,
        })
        .then((response) => {
          setLoading(false);
          console.log(response);
        });
    }
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <input
        type="text"
        name="firstname"
        value={loginData.firstname}
        placeholder="firstname"
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="lastname"
        value={loginData.lastname}
        placeholder="lastname"
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="MobileNumber"
        value={loginData.MobileNumber}
        placeholder="mobile number"
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
