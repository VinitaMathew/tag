import React from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import ProductsImage from "../../../assets/products-group.png";
import BorderImage3 from "../../../assets/border-img3.svg";
import "./Products.scss";

export default function Products() {
   const [ref, inView] = useInView({
     threshold: 0.3, 
     triggerOnce: true, 
   });
  const handleProductClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      ref={ref}
      className={
        inView ? "slide-up productsContainer" : "hidden productsContainer"
      }
    >
      <div className="products-section">
        <div className="product-content-wrapper">
          <div className="products-title">Our product range</div>
          <NavLink to="/products">
            <button
              className="products-button"
              onClick={() => handleProductClick()}
            >
              Explore our products
            </button>
          </NavLink>
        </div>
        <div className="product-image-container ">
          <img
            src={ProductsImage}
            alt="product image"
            className="products-image"
          />
          <img className="tag-border-image3" src={BorderImage3} alt="" />
        </div>
      </div>
    </div>
  );
}
