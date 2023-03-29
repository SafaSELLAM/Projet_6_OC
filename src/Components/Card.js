import React from "react";
import "../styles/card.css";

const Card = (props) => {
  // destructuration de props pour item
  const { item } = props;
  return (
    <div className="card">
      <img src={item.cover} alt={item.title} />
      <h2>{item.title}</h2>
    </div>
  );
};

export default Card;
