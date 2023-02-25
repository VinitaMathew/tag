import React from "react";
import Menu from "../menu/Menu";
import LandingPage from "../LandingPage/LandingPage";
import Services from "./services/Services";
import Strengths from "./strengths/Strengths";
import "./Home.scss";

export default function Home(props){

    return (
      <div className="tag-home-page">
        <LandingPage contactClick={props.contactClick} />
        <Services />
        <Strengths />
      </div>
    );
}
