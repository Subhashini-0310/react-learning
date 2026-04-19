import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleLogin = () => {
    if(btnName === "Logout") {
      setBtnName("Login");
    } else  {
      setBtnName("Logout");
    }
  }

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="foodLogo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button onClick={handleLogin} className="login">{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;