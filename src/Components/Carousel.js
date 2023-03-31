import React, { useState } from "react";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  };
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  };
  return (
    <div className="carousel_container">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="img_carousel"
      />
      {pictures.length > 1 && (
        <div>
          <img
            src={arrowLeft}
            alt="image précédente"
            className="prev"
            onClick={prev}
          />
          <span className="index">{`${currentIndex + 1}/${
            pictures.length
          }`}</span>
          <img
            src={arrowRight}
            alt="image suivante"
            className="next"
            onClick={next}
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
