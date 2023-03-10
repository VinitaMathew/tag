import React, { useState } from "react";
import Map from "../../../../assets/Map.svg";
import { useInView } from "react-intersection-observer";
import "./MapSection.scss";

export default function MapSection() {
  const [middleEastHovered, setMiddleEastHovered] = useState(false);
  const [africaHovered, setAfricaHovered] = useState(false);
  const [asiaHovered, setAsiaHovered] = useState(false);
  const [europeHovered, setEuropeHovered] = useState(false);
  const [northAmericaHovered, setNorthAmericaHovered] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="map-section-container">
      <div
        ref={ref}
        className={
          inView ? "slide-up map-content-wrapper" : "hidden map-content-wrapper"
        }
      >
        <h2 className="reach-heading">Our Reach</h2>
        <div className="reach-map-text">
          Our company has a global presence, serving customers across the{" "}
          <b>
            <span
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setMiddleEastHovered(true)}
              onMouseLeave={() => setMiddleEastHovered(false)}
            >
              Middle East,{" "}
            </span>
            <span
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setAfricaHovered(true)}
              onMouseLeave={() => setAfricaHovered(false)}
            >
              Africa,{" "}
            </span>
            <span
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setAsiaHovered(true)}
              onMouseLeave={() => setAsiaHovered(false)}
            >
              Asia,{" "}
            </span>
            <span
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setEuropeHovered(true)}
              onMouseLeave={() => setEuropeHovered(false)}
            >
              Europe,{" "}
            </span>
            <span
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setNorthAmericaHovered(true)}
              onMouseLeave={() => setNorthAmericaHovered(false)}
            >
              and North America
            </span>
          </b>
          . This widespread reach allows us to provide local support and
          understanding of each unique market, while also leveraging our
          international expertise to bring the best solutions to our customers
          no matter where they are located.
        </div>
      </div>
      <div className="map-image-wrapper">
        <img src={Map} alt="" className="map-image" />
        <div
          className={`location-pin pin1 ${
            northAmericaHovered ? "pin-active" : ""
          }`}
        ></div>
        <div
          className={`location-pin pin2 ${africaHovered ? "pin-active" : ""}`}
        ></div>
        <div
          className={`location-pin pin3 ${europeHovered ? "pin-active" : ""}`}
        ></div>
        <div
          className={`location-pin pin4 ${asiaHovered ? "pin-active" : ""}`}
        ></div>
        <div
          className={`location-pin pin5 ${
            middleEastHovered ? "pin-active" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}
