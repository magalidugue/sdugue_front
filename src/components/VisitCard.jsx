import React from "react";
import "../css/visitCard.css";
import classicalVisitImg from "../assets/visite_classique.jpg";
import adultWorkshopImg from "../assets/atelier_adultes.jpg";
import kidWorkshopImg from "../assets/atelier_enfants.jpg";

const VisitCard = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h3 className="Title">Visites Classiques</h3>
          <p className="Description">balbalbla</p>
          <img src={classicalVisitImg} alt="" />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h3 className="Title">Ateliers pour adultes</h3>
          <p className="Description">balbalbla</p>
          <img src={adultWorkshopImg} alt="" />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h3 className="Title">Ateliers pour enfants</h3>
          <p className="Description">balbalbla</p>
          <img src={kidWorkshopImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default VisitCard;
