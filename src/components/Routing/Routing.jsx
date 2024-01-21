import React, { useRef, useState } from "react";
import { BrowserRouter as Route, Routes, HashRouter } from "react-router-dom";
import Home from "../HomePage/Home";
import Menu from "../menu/Menu";
import AboutPage from "../AboutPage/AboutPage";
import ProductsPage from "../ProductsPage/ProductsPage";
import BlogPage from "../BlogPage/BlogPage";
import CareersPage from "../CareersPage/CareersPage";
import Contact from "../contact/Contact";
import "./Routing.scss";

export default function Routing() {
  const ref = useRef(null);
  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToContact = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const [isNotDesktop] = useState(
    window.matchMedia("only screen and (max-width:1150px)").matches
  );

  return (
    <div className="routingContainer">
      {isNotDesktop ? (
        <div className="not-desktop-msg">
          This website is designed for desktop users only!
        </div>
      ) : (
        <HashRouter>
          <div className="tag-menu-container">
            <Menu contactClick={scrollToContact} />
          </div>
          <Routes>
            <Route path="/" element={<Home contactClick={scrollToContact} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
          <Contact ref={ref} homeClick={scrollToHome} />
        </HashRouter>
      )}
    </div>
  );
}
