import React, { useState } from "react";
import ArrowUp from "../../assets/arrow_up.png";
import ArrowDown from "../../assets/arrow_down.png";
import "./collapse.css";

const Collapse = ({ about, collapse_about, collapse_logement }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className={`${collapse_about} ${collapse_logement}`}>
      <div
        className="collapse_title between center backPrimaire"
        onClick={toggle}
      >
        <h2 className="titre_infos colorWhite">{about.title}</h2>
        <img src={open ? ArrowUp : ArrowDown} alt="flèche" className="arrows" />
      </div>
      {open && (
        <div className="text_collapse colorPrimaire">
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
