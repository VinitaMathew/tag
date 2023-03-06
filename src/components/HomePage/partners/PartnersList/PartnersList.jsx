import React from "react";
import "./PartnersList.scss";
import { useInView } from "react-intersection-observer";
import {partnersData1,partnersData2} from "./partnersData.js";

export default function PartnersList() {
   const [ref, inView] = useInView({
     threshold: 0.2,
     triggerOnce: true,
   });
    return (
      <div
        ref={ref}
        className={
          inView
            ? "slide-up partnersListContainer"
            : "hidden partnersListContainer"
        }
      >
        <h2>Our Esteemed Partners</h2>
        <div className="partners-row">
          {partnersData1.map((partner) => {
            return <img src={partner.icon}></img>;
          })}
        </div>
        <div className="partners-row">
          {partnersData2.map((partner) => {
            return <img src={partner.icon}></img>;
          })}
        </div>
      </div>
    );
}