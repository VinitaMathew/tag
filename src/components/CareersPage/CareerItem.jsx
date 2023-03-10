import React from "react";
import ApplyIcon from "../../assets/apply-icon.png";
import { useInView } from "react-intersection-observer";

export default function CareersItem({ careerItem, index }) {
  const [ref, inView] = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  return (
    <li
      ref={ref}
      className={
        inView ? "slide-up careers-list-item" : "hidden careers-list-item"
      }
      key={index}
    >
      <div className="careers-title">{careerItem.title}</div>
      <div className="careers-content-wrapper">
        <div className="careers-content">{careerItem.content}</div>
        <a className="apply-link" href="/" target="_blank">
          <span>Apply </span>
          <img alt="apply" src={ApplyIcon} />
        </a>
      </div>
      <div className="careers-specifications">
        {careerItem.specifications.map((item, index) => {
          return <div className="specification">{item}</div>;
        })}
      </div>
    </li>
  );
}
