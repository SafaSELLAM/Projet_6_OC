import React, { useState } from "react";
import ArrowUp from "../assets/arrow_up.png";
import ArrowDown from "../assets/arrow_down.png";
import "../styles/collapse.css";

const Collapse = ({ about }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  //réutilisation du composant pour home et about
  const url = window.location.href;
  const className = url.includes("about")
    ? "collapse_about column"
    : url.includes("Logements")
    ? "collapse_logement"
    : "";

  return (
    <div className={className}>
      <div className="collapse_title between center" onClick={toggle}>
        <h2 className="titre_infos">{about.title}</h2>
        <img src={open ? ArrowUp : ArrowDown} alt="flèche" className="arrows" />
      </div>
      {open && (
        <div className="text_collapse">
          {/* séparation entre description et equipements en forme de liste */}
          {about.list === true ? (
            <ul className="list_infos column">
              {about.text.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{about.text}</p>
          )}
        </div>
      )}
    </div>
  );
};
export default Collapse;
