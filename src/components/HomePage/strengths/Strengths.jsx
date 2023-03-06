import React from "react";
import StrengthsCarousel from "./StrengthsCarousel/StrengthsCarousel";
import { useInView } from "react-intersection-observer";
import "./Strengths.scss";

export default function Strengths() {
   const [ref, inView] = useInView({
     threshold: 0.1,
     triggerOnce: true,
   });
  return (
    <div
      ref={ref}
      className={
        inView ? "slide-up strengthsContainer" : "hidden strengthsContainer"
      }
    >
      <h2 className="strengths-heading">Our Strengths</h2>
      <div className="strengths-content">
        We provide a wide range of sustainable and innovative food products. We
        utilise state-of-the-art facilities to ensure the highest quality
        products, while also offering a variety of vegan options. With a strong
        customer base and a commitment to excellence, we are proud to be the
        go-to solution for all your food and beverage needs. Whether you're
        looking for cutting-edge products or trusted staples, we have everything
        you need to succeed in the industry.
      </div>
      <StrengthsCarousel />
    </div>
  );
}
