import React from "react";
import Carousel from "react-grid-carousel";
import "./Services.scss";
import { useInView } from "react-intersection-observer";
import servicesData from "./servicesData.js";
import BorderImage2 from "../../../assets/border-img2.svg";

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.3, // Trigger when the component is 50% visible
    triggerOnce: true, // Only trigger once
  });
  return (
    <div className="servicesContainer">
      <img className="tag-border-image2" src={BorderImage2} alt="" />
      <div ref={ref} className={inView ? "slide-up" : "hidden"}>
        <h2 className="services-heading">What can TAG do for you?</h2>
        <Carousel
          cols={4}
          rows={1}
          gap={1}
          loop={false}
          scrollSnap={true}
          className="servicesWrapper"
        >
          {servicesData.map((item, index) => (
            <Carousel.Item className="servicesItems" key={index}>
              <div
                style={{ flex: "0 0 auto", marginRight: "16px" }}
                className="item-set__item"
              >
                <img src={item.icon} className="service-icon"></img>
                <div className="service-title">{item.title}</div>
                <div className="service-desc">{item.info}</div>
              </div>
            </Carousel.Item>
          ))}
          {/* ... */}
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
