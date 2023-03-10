import React from "react";
import BackIcon from "../../../assets/back.png";
import "./ProductDetails.scss";

export default function ProductDetails(props) {
    const { details, handleBackClick } = props;
    return (
      <div className="product-details-wrapper">
        <img src={details.detailImg1} className="dashboard-image" />
        <div className="detail-wrapper">
          <div className="detail-section">
            <button onClick={handleBackClick} className="back-button">
              <img src={BackIcon} alt="Back" className="back-icon" />
              <span className="back-text">Back</span>
            </button>
            <div className="title">{details.title}</div>
            <div className="info1">{details.info1}</div>
            <img className="detail-image2" src={details.detailImg2} alt="" />
            <div className="section2">
              <div className="info2">{details.info2}</div>
              <img className="detail-image3" src={details.detailImg3} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
}