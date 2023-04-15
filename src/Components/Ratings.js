import React from "react";
import star from "../assets/star_full.png";
import starNull from "../assets/star_empty.png";
import "../styles/rating.css";
const Ratings = ({ scaleValue }) => {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="ratings around">
      {range.map((rangeStar) =>
        scaleValue >= rangeStar ? (
          <span key={rangeStar.toString()}>
            <img className="rating_star" src={star} alt="rating" />
          </span>
        ) : (
          <span key={rangeStar.toString()}>
            <img className="rating_star" src={starNull} alt="rating" />
          </span>
        )
      )}
    </div>
  );
};

export default Ratings;
