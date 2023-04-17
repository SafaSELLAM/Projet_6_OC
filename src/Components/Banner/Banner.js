import React from "react";
import "./Banner.css";
const Banner = ({ image, text }) => {
  return (
    <div className="banner_container">
      <img className="banner" src={image} alt="banniere" />
      <span className="text_banner colorWhite">{text}</span>
    </div>
  );
};

export default Banner;
