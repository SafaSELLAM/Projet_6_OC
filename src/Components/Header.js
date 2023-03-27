import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/kasa_logo.svg";
import "../styles/header.css";
const Header = () => {
  return (
    <header className="Header">
      <div className="logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
