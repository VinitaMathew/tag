import React from "react";
import Info from "./info-section/Info";
import BorderImage1 from "../../assets/border-img1.svg";
import InfoImage from "../../assets/tag-landing-page-img.svg";
import "./LandingPage.scss";

export default function LandingPage(props) {
  return (
    <div className="tag-landing-page">
      <img className="tag-border-image1" src={BorderImage1} alt="" />
      <div className="tag-info-container">
        <Info contactClick={props.contactClick} />
        <img className="tag-info-image" src={InfoImage} alt="" />
      </div>
    </div>
  );
}
