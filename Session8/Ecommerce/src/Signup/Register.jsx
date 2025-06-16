import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Email from "./Email";
import PersonalData from "./PersonalData";

const Register = () => {
  const [page, setpage] = useState(0);
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [phonenum, setphonenum] = useState("");
  const [address, setaddress] = useState("");
  const [landmark, setlandmark] = useState("");

  const navigate = useNavigate(); // 👈 add this

  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@gct\.ac\.in$/;
    return regex.test(email.trim());
  }

  function isValidUsername(name) {
    const regex = /^[a-zA-Z ]{3,}$/;
    return regex.test(name.trim());
  }

  function isValidPhone(num) {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(num.trim());
  }

  function isFilled(value) {
    return value.trim().length > 0;
  }

  const updatepage = () => {
    if (isValidEmail(email)) {
      setpage(1);
      alert("Your Email is set..");
    } else {
      alert("Please Enter Your Valid Email...");
    }
  };

  const handlesubmit = () => {
    if (!isValidUsername(username)) {
      alert("Enter a valid username (only letters, min 3 characters).");
      return;
    }
    if (!isValidPhone(phonenum)) {
      alert("Enter a valid 10-digit phone number.");
      return;
    }
    if (!isFilled(address)) {
      alert("Address cannot be empty.");
      return;
    }
    if (!isFilled(landmark)) {
      alert("Landmark cannot be empty.");
      return;
    }

    // All validations passed
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Phone:", phonenum);
    console.log("Address:", address);
    console.log("Landmark:", landmark);
    alert("Registration submitted successfully!");

    navigate("/buyer"); // 👈 redirect to success page
  };

  return (
    <div>
      {page === 0 ? (
        <Email email={email} setemail={setemail} setpage={updatepage} />
      ) : (
        <PersonalData
          setusername={setusername}
          setphonenum={setphonenum}
          setaddress={setaddress}
          setlandmark={setlandmark}
          handlesubmit={handlesubmit}
        />
      )}
    </div>
  );
};

export default Register;
