import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Carousel from "../Components/Carousel";
import Collapse from "../Components/Collapse";
import Ratings from "../Components/Ratings";
import data from "../datas/data";
import "../styles/logement.css";
const Logements = () => {
  const id = useParams();
  const item = data.find((logement) => logement.id === id.id);
  if (!item || !item.id) {
    return <Navigate to="/error" replace={true} />;
  }
  return (
    <div className="center">
      <div className="logement_page">
        <Carousel pictures={item.pictures} />
        <div className="block_info_logement">
          <div className="infos_logements">
            <h2>{item.title}</h2>
            <h3>{item.location}</h3>
            <ul className="tags row">
              {item.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="info_host">
            <div className="host row between">
              <h4>{item.host.name}</h4>
              <img
                src={item.host.picture}
                alt={item.host.picture}
                className="photo_host"
              />
            </div>
            {/* convertir la valeur de la propriété rating de l'objet en un nombre entier. */}
            <Ratings scaleValue={parseInt(item.rating)} />
          </div>
        </div>
        <div className="collapse_block row ">
          <Collapse
            collapse_logement="collapse_logement"
            about={{
              title: "Description",
              text: item.description,
              list: false,
            }}
          />
          <Collapse
            collapse_logement="collapse_logement"
            about={{ title: "Equipements", text: item.equipments, list: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default Logements;
