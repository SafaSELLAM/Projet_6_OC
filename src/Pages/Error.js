import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Error.css";
const Error = () => {
  return (
    <div className="error_container">
      <div className="text_error_container">
        <p className="error_text">404</p>
        <p className="msg_error">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <div className="link_error">
        <NavLink to="/"> Retourner sur la page d'Accueil</NavLink>
      </div>
    </div>
  );
};

export default Error;
