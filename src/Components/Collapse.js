import React, { useState } from "react";
import ArrowUp from "../assets/arrow_up.png";
import ArrowDown from "../assets/arrow_down.png";

const Collapse = ({ about }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const url = window.location.href;
  const className = url.includes("about")
    ? "collapse_about"
    : url.includes("Logements")
    ? "collapse_logement"
    : "";

  return (
    <div className={className}>
      <div className="collapse_title" onClick={toggle}>
        <h2>{about.title}</h2>
        <img src={open ? ArrowUp : ArrowDown} alt="flèche" />
      </div>
      {open && (
        <div className="text_collapse">
          {about.list === true ? (
            <ul>
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
