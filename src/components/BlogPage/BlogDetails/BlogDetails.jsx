import React from "react";
import BackIcon from "../../../assets/back.png";
import "./BlogDetails.scss";

export default function BlogDetails(props){
    const { details, handleBackClick } = props;
    return (
      <div className="blog-details-wrapper">
        <button onClick={handleBackClick} className="back-button">
          <img src={BackIcon} alt="Back" className="back-icon" />
          <span className="back-text">Back</span>
        </button>
        <h2 className="blog-details-heading">{details.heading}</h2>
        <div className="blog-desc">
          {details.date} | {details.name}
        </div>
        <img src={details.detailsImage} alt="" className="blog-details-image" />
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: details.blogContent }}>
        </div>
      </div>
    );
}