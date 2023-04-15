import React, { useState } from "react";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import "./carousel.css";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  };
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  };
  return (
    <div className="carousel_wrapper">
      <div className="carousel_container">
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="img_carousel"
        />
        {pictures.length > 1 && (
          <div className="indexation_img between">
            <img
              src={arrowLeft}
              alt="image précédente"
              className="slide"
              onClick={prev}
            />
            <span className="index_img">{`${currentIndex + 1}/${
              pictures.length
            }`}</span>
            <img
              src={arrowRight}
              alt="image suivante"
              className="slide"
              onClick={next}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
