import Card from "../Card/Card.js";
import data from "../../datas/data.js";
import React from "react";
import { NavLink } from "react-router-dom";
import "./cards.css";
const Cards = () => {
  return (
    // crée une card pour chaque logement
    <div className="cards">
      {data.map((item) => (
        <NavLink key={item.id} to={`Logements/${item.id}`}>
          <Card item={item} />
        </NavLink>
      ))}
    </div>
  );
};

export default Cards;
