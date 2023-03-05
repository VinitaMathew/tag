import React from "react";
import ReachImage from "../../../assets/reach-image.svg";
import MapSection from "./MapSection/MapSection";
import { useInView } from "react-intersection-observer";
import "./Reach.scss";

export default function Reach(){
    const [ref, inView] = useInView({
      threshold: 0.3,
      triggerOnce: true,
    });
    const [ref2, inView2] = useInView({
      threshold: 0.3,
      triggerOnce: true,
    });
    return (
      <div className="reachContainer">
        <div
          ref={ref}
          className={inView ? "slide-up reach-section" : "hidden reach-section"}
        >
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
        <MapSection />
        <div
          ref={ref2}
          className={
            inView2
              ? "slide-up social-media-section"
              : "hidden social-media-section"
          }
        >
          <h3>Follow us on</h3>
          <div className="social-media-links">
            <a className="linked-in" href="" target="_blank">
              LinkedIn
            </a>
            <a className="facebook" href="" target="_blank">
              Facebook
            </a>
            <a className="instagram" href="" target="_blank">
              Instagram
            </a>
            <a className="twitter" href="" target="_blank">
              Twitter
            </a>
          </div>
        </div>
      </div>
    );
}