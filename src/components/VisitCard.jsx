import React, { Fragment } from "react";
import "../css/visitCard.css";
import classicalVisitImg from "../assets/church-window-gff159cb2f_1920.jpg";
import adultWorkshopImg from "../assets/glass-g14fe2552c_1920.jpg";
import kidWorkshopImg from "../assets/stained-glass-g2cf2f32b6_1920.jpg";
import Welcome from "./welcome";
import NavBar from "./Navbar";

const VisitCard = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Welcome />
      <div className="container">
        <div className="image">
          <img className="image-img" src={classicalVisitImg} alt="" />
          <div className="image-overlay">
            <div className="image-title"> Visites Classiques </div>
            <p className="image-description">[description]</p>
          </div>
        </div>
        <div className="image">
          <img className="image-img" src={adultWorkshopImg} alt="" />
          <div className="image-overlay">
            <div className="image-title"> Ateliers Adultes </div>
            <p className="image-description">[description]</p>
          </div>
        </div>
        <div className="image">
          <img className="image-img" src={kidWorkshopImg} alt="" />
          <div className="image-overlay">
            <div className="image-title"> Atelier Enfants </div>
            <p className="image-description">[description]</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VisitCard;
