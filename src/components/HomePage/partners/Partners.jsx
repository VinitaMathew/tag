import React from "react";
import PartnersImage from "../../../assets/partners-image.jpg";
import PartnersList from "./PartnersList/PartnersList";
import { useInView } from "react-intersection-observer";
import BorderImage3 from "../../../assets/border-img3.svg";
import BorderImage4 from "../../../assets/border-img4.svg";
import "./Partners.scss";

export default function Partners(){
   const [ref, inView] = useInView({
     threshold: 0.1,
     triggerOnce: true,
   });
    return (
      <div
        ref={ref}
        className={
          inView ? "slide-up partnersContainer" : "hidden partnersContainer"
        }
      >
        <div className="partners-wrapper">
          <div className="partners-desc">
            Tag firmly believes in the influence of positive strategic
            partnership with customers, suppliers and our team.
          </div>
          <div className="partners-image-container">
            <img src={PartnersImage} className="partners-image" />
            <img className="tag-border-image3-1" src={BorderImage3} alt="" />
            <img className="tag-border-image4" src={BorderImage4} alt="" />
          </div>
          <PartnersList />
        </div>
      </div>
    );
}