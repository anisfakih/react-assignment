import React from "react";
import Button from "../Button/Button";
import logo from "../../assets/logo.jpg";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="btns">
        <Button text="Registration" onClick={() => navigate("/")} />
        <Button text="Dashboard" onClick={() => navigate("/dashboard")} />
      </div>
    </nav>
  );
};

export default NavBar;
