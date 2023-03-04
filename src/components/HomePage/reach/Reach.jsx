import React from "react";
import ReachImage from "../../../assets/reach-image.svg";
import MapSection from "./MapSection/MapSection";
import "./Reach.scss";

export default function Reach(){
    return (
      <div className="reachContainer">
        <div className="reach-section">
          <div className="reach-image-wrapper">
            <img src={ReachImage} alt="" className="reach-image" />
          </div>
          <div className="react-content-section">
            <div className="react-content">
              Tag Sources from more than <span>30 + countries</span> to meet the
              requirements of our clientele.
            </div>
          </div>
        </div>
        <MapSection/>
      </div>
    );
}