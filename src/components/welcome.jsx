import React from "react";
import "../css/visitCard.css";

const Welcome = () => {
  return (
    <div className="introduction">
      <p className="welcome">
        Bienvenue sur le site de réservation des visites de l’atelier S. Dugué
      </p>
      <p className="chooseVisit">
        Choisissez le type de visite Choisissez le type de visite que vous
        souhaitez réserver
      </p>
    </div>
  );
};

export default Welcome;
