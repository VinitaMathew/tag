import React,{useRef,useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../HomePage/Home";
import Menu from "../menu/Menu";
import RoutePage1 from "../RoutePage1/RoutePage1";
import ProductsPage from "../ProductsPage/ProductsPage";
import Contact from "../contact/Contact";
import "./Routing.scss";

const Careers = () => (
  <div>
    <h1>Careers Page</h1>
    <p>Welcome to the careers page</p>
  </div>
);

const AboutPage = () => (
  <div>
    <h1>About Page</h1>
    <p>Learn more about us</p>
  </div>
);

export default function Routing() {
 const ref = useRef(null);
 const scrollToHome = () => {
   window.scrollTo({
     top: 0,
     behavior: "smooth",
   });
 };
  const scrollToContact=() =>{
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
  
    return (
      <div className="routingContainer">
        <Router>
          <div className="tag-menu-container">
            <Menu contactClick={scrollToContact} />
          </div>
          <Routes>
            <Route path="/" element={<Home contactClick={scrollToContact} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/blog" element={<RoutePage1 />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
          <Contact ref={ref} homeClick={scrollToHome} />
        </Router>
      </div>
    );
  }
