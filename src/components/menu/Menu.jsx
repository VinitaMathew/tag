import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/tag-logo.svg";
import "./Menu.scss";

export default function Menu(props){
  return (
    <div className="tag-menu">
        <nav className="menu-list-desktop">
          <NavLink to="/">
            <img className="tag-logo" src={Logo} alt="tag logo" />
          </NavLink>
          <div className="links-container">
            <NavLink className="tag-link" to="/about">
              About Us
            </NavLink>
            <NavLink className="tag-link" to="/products">
              Our Products & Specilications
            </NavLink>
            <NavLink className="tag-link" to="/blog">
              Blog
            </NavLink>
            <NavLink className="tag-link" to="/careers">
              Careers
            </NavLink>
            <a className="tag-link" onClick={props.contactClick}>
              Contact Us
            </a>
          </div>
        </nav>
    </div>
  );
}
