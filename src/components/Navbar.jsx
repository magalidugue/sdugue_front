import React from "react";
import "../css/navbar.css";
import logo from "../assets/LOGO_OK.svg";

const NavBar = () => {
  return (
    <div className="container-fluid">
      {/* <div className="row">
        <div className="col-12 logo">
          <img className="logo" src={logo}></img>
        </div>
      </div> */}
      <div className="row">
        <nav class="col-12 navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo}></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navbarContent" class="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li class="nav-item active">
                <a className="nav-link" href="">
                  {" "}
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="base.html">
                  {" "}
                  A propos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="base.html">
                  {" "}
                  Informations pratiques et conditions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="base.html">
                  {" "}
                  Contact{" "}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
