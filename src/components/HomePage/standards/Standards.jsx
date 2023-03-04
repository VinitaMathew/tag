import React from "react";
import { useInView } from "react-intersection-observer";
import "./Standards.scss";
import StandardsData from "./standardsData.js";

export default function Standards() {
    const [ref, inView] = useInView({
      threshold: 0.3,
      triggerOnce: true,
    });
  return (
    <div
      ref={ref}
      className={
        inView ? "slide-up standardsContainer" : "hidden standardsContainer"
      }
    >
      <h2 className="standards-heading">Best in the world standards</h2>
      <div className="standards-description">
        Something about how important it is to have these standards would come
        here
      </div>
      <table className="standards-table">
        <tr className="standards-table-row row1">
          <td className="standards-table-data">
            <img className="logo logo1" src={StandardsData[0].logo} />
            <div className="description-wrapper desc1">
              <div className="description">{StandardsData[0].description}</div>
            </div>
          </td>
          <td className="standards-table-data">
            <img className="logo logo2" src={StandardsData[1].logo} />
            <div className="description-wrapper desc1">
              <div className="description">{StandardsData[1].description}</div>
            </div>
          </td>
        </tr>
        <tr className="standards-table-row row2">
          <td className="standards-table-data">
            <img className="logo logo3" src={StandardsData[2].logo} />
            <div className="description-wrapper desc2">
              <div className="description">{StandardsData[2].description}</div>
            </div>
          </td>
          <td className="standards-table-data">
            <img className="logo logo4" src={StandardsData[3].logo} />
            <div className="description-wrapper desc2">
              <div className="description">{StandardsData[3].description}</div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
