import React from "react";
import Collapse from "../Components/Collapse";

const Logements = (props) => {
  const { item } = props;

  return (
    <div className="logement_page">
      <div className="carrousel"></div>
      <div className="infos_logements">
        <h2>{item.title}</h2>
        <h3>{item.location}</h3>
        <ul className="tags">
          {item.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="info_host">
        <div className="host">
          <h4>{item.host.name}</h4>
          <img
            src={item.host.picture}
            alt={item.host.picture}
            className="photo_hoste"
          />
          <div className="rating_stars"></div>
        </div>
      </div>
      <div className="collapse_block">
        <Collapse
          about={{ title: "Description", text: item.description, list: false }}
        />
        <Collapse
          about={{ title: "Equipements", text: item.equipments, list: true }}
        />
      </div>
    </div>
  );
};

export default Logements;
