import React from "react";
import Banner from "../Components/Banner";
import AboutBanner from "../assets/about_banner.jpg";
import datas from "../datas/data.js";
import Collapse from "../Components/Collapse";
const About = () => {
  return (
    <div className="About">
      <div className="banner_about">
        <Banner image={AboutBanner} alt="image bannière" />
        {/* {datas.map((abouts) => (
          // <Collapse
          //   key={abouts.id}
          //   about={{ title: abouts.title, text: abouts.text, list: false }}
          // />
        ))} */}
      </div>
    </div>
  );
};

export default About;
