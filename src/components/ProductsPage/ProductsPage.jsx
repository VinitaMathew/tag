import React,{useState} from "react";
import ProductDetails from "./ProductDetails/ProductDetails.jsx";
import ProductsData from "./ProductsData.js";
import "./ProductsPage.scss";

export default function ProductsPage() {
    const [selectedProduct,setSelectedProduct] = useState(null);
    const [detailsPageOpen,setDetailsPageOpen] = useState(false);
    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setDetailsPageOpen(true);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
    };
    const handleBackClick = () => {
        setDetailsPageOpen(false);
    };
    return (
      <div className="productsPageContainer">
        {detailsPageOpen ? (
          <ProductDetails
            details={selectedProduct}
            handleBackClick={() => handleBackClick()}
          />
        ) : (
          <div className="products-section-wrapper">
            <h1 className="products-page-heading">Our Product Range</h1>
            <ul className="products-list">
              {ProductsData.map((product) => {
                return (
                  <li
                    onClick={() => handleProductClick(product)}
                    className="products-list-item"
                  >
                    <img src={product.image} className="product-image"></img>
                    <div className="product-title">{product.title}</div>
                    <div className="know-more-text">Know more</div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
}