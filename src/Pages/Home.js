import React from "react";
import Banner from "../Components/Banner";
import homeBanner from "../assets/home_banner.png";
const Home = () => {
  return (
    <div className="Home">
      <div className="banner_home">
        <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
      </div>
    </div>
  );
};

export default Home;
