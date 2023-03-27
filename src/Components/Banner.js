import React from "react";
import "../styles/Banner.css";
const Banner = ({ image, text }) => {
  return (
    <div className="banner_container">
      <img className="banner" src={image} alt="banniere" />
      <span className="text_banner">{text}</span>
    </div>
  );
};

export default Banner;
