import React from "react";
import Banner from "../Components/Banner/Banner";
import homeBanner from "../assets/home_banner.png";
import Cards from "../Components/Cards/Cards";

const Home = () => {
  return (
    <div className="Home">
      <div className="banner_home">
        <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
      </div>
      <Cards />
    </div>
  );
};

export default Home;
