import React from "react";
import ProductImage1 from "../../../assets/product-detail-image1.svg";
import "./ProductDetails.scss";

export default function ProductDetails(props) {
    const { details, handleBackClick } = props;
    return (
      <div className="product-details-wrapper">
        <img src={ProductImage1} className="dashboard-image" />
        <div className="detail-wrapper">
          <div className="detail-section">
            <button onClick={props.handleBackClick}>Back</button>
            <div>{details.role}</div>
          </div>
        </div>
      </div>
    );
}