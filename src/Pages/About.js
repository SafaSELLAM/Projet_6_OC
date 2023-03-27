import React from "react";
import Banner from "../Components/Banner";
import AboutBanner from "../assets/about_banner.jpg";

const About = () => {
  return (
    <div className="About">
      <div className="banner_about">
        <Banner image={AboutBanner} alt="image bannière" />
      </div>
    </div>
  );
};

export default About;
