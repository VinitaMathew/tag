import React from "react";
import careersData from "./careersData";
import CareersItem from "./CareerItem";
import "./CareersPage.scss";

export default function CareersPage() {
  return (
    <div className="careersPageContainer">
      <h1 className="careers-heading">Careers</h1>
      <div className="description">
        We’re looking for passionate people to join us on our mission.
      </div>
      <ul className="careers-list">
        {careersData.map((careerItem, index) => {
          return <CareersItem careerItem={careerItem} index={index} />;
        })}
      </ul>
    </div>
  );
}
