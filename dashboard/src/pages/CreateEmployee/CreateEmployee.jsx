import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import FullScreenLoader from "../../components/FullScreenLoader/FullScreenLoader";
import "react-toastify/dist/ReactToastify.css";
import "./CreateEmployee.scss";
import FileUpload from "../../components/FileUpload/FileUpload";

const admin_server_url = import.meta.env.VITE_APP_ADMIN_SERVER_URL;

const CreateEmployee = () => {
  const [files, setFiles] = useState([]);
  const [prevImg, setPrevImg] = useState();
  const [isLoading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    ResidentialAddress: "",
    Aadhaar: "",
    MobileNumber: "",
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

  const submit = async () => {
    if (
      !(
        loginData.FirstName &&
        loginData.LastName &&
        loginData.Aadhaar &&
        loginData.MobileNumber &&
        loginData.ResidentialAddress &&
        loginData.Email
      )
    ) {
      toast.error("Fields cannot be empty.", { position: "top-center" });
    } else {
      setLoading(true);
      const { data: res } = await axios.post(
        `${admin_server_url}/CreateEmployee`,
        {
          isSuperUser: false,
          FirstName: loginData.FirstName,
          LastName: loginData.LastName,
          Aadhaar: loginData.Aadhaar,
          MobileNumber: loginData.MobileNumber,
          ResidentialAddress: loginData.ResidentialAddress,
          Email: loginData.Email,
          ProfilePic: prevImg,
        }
      );
      localStorage.setItem("token", res.data);
      console.log(res);
    }
  };
  return (
    <div className="login-container">
      <ToastContainer></ToastContainer>
      <div className="login">
        <h1>Add New Employee</h1>
        <input
          type="text"
          name="FirstName"
          value={loginData.FirstName}
          placeholder="FirstName"
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="LastName"
          value={loginData.LastName}
          placeholder="LastName"
          onChange={onChange}
        ></input>
        <FileUpload setFiles={setFiles} setPrevImg={setPrevImg} />
        <input
          type="text"
          name="Email"
          value={loginData.Email}
          placeholder="Email"
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="Aadhaar"
          value={loginData.Aadhaar}
          placeholder="Aadhaar"
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="MobileNumber"
          value={loginData.MobileNumber}
          placeholder="MobileNumber"
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="ResidentialAddress"
          value={loginData.ResidentialAddress}
          placeholder="ResidentialAddress"
          onChange={onChange}
        ></input>
        <div className="btn" onClick={submit}>
          Submit
        </div>
      </div>
    </div>
  );
};
export default CreateEmployee;
