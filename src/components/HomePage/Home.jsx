import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import Services from "./services/Services";
import Standards from "./standards/Standards";
import Products from "./products/Products";
import Partners from "./partners/Partners";
import Strengths from "./strengths/Strengths";
import "./Home.scss";

export default function Home(props){

    return (
      <div className="tag-home-page">
        <LandingPage contactClick={props.contactClick} />
        <Services />
        <Standards />
        <Products />
        <Partners />
        <Strengths />
      </div>
    );
}
