import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";
const Error = () => {
  return (
    <div className="error_container between column">
      <div className="text_error_container center column">
        <p className="error_text colorPrimaire">404</p>
        <p className="msg_error colorPrimaire">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <div className="link_error colorPrimaire">
        <NavLink to="/"> Retourner sur la page d'Accueil</NavLink>
      </div>
    </div>
  );
};

export default Error;
