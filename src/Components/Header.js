import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/kasa_logo.svg";
import "../styles/header.css";
const Header = () => {
  return (
    <header className="Header between center">
      <img className="logo_kasa" src={logo} alt="Logo Kasa" />
      <Navigation />
    </header>
  );
};

export default Header;
