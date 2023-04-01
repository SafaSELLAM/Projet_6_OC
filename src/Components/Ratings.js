import React from "react";
import star from "../assets/star_full.png";
import starNull from "../assets/star_empty.png";

const Ratings = ({ scaleValue }) => {
  const range = [1, 2, 3, 4, 5];

  return (
    <div>
      {range.map((rangeStar) =>
        scaleValue >= rangeStar ? (
          <span key={rangeStar.toString()}>
            <img src={star} alt="rating" />
          </span>
        ) : (
          <span key={rangeStar.toString()}>
            <img src={starNull} alt="rating" />
          </span>
        )
      )}
    </div>
  );
};

export default Ratings;
