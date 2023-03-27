import React from "react";
import logo_footer from "../assets/logo-footer.svg";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <img src={logo_footer} alt="Logo footer kasa " />
      <div className="text_footer">@ 2020 Kasa. All rights reserved</div>
    </div>
  );
};

export default Footer;
