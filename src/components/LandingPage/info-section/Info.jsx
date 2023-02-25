import React from "react";
import { NavLink } from "react-router-dom";
import "./Info.scss";

export default function Info(props) {
  return (
    <div className="infoContainer">
      <div className="infoLine">
        Your One Stop Solution to all <span>Food & Beverage</span> Needs
      </div>
      <div className="infoContent">
        We source and distribute organic, conventional and sustainable food
        products for our global clientele. Our objective is to provide
        customized food solutions and add value to what you do.
      </div>
      <div className="infoButtonContainer">
        <NavLink to="/products">
          <button className="infoServicesButton">Explore our services</button>
        </NavLink>
        <button className="infoContactButton" onClick={props.contactClick}>
          Contact us
        </button>
      </div>
    </div>
  );
}
