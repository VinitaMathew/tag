import React from "react";
import { NavLink } from "react-router-dom";
import "./Contact.scss";

const Contact = React.forwardRef((props,contactRef)=>{
    return (
      <div ref={contactRef} className="contactContanier">
        <div className="contact-heading">TAG US</div>
        <div className="contact-desc">
          <div className="contact-text">
            Be a part of Sustainable and Eco–Friendly Journey. Be The Change
          </div>
          <nav>
            <NavLink className="back-link" to="/" onClick={props.homeClick}>
              Back to Home
            </NavLink>
          </nav>
        </div>
        <a href="mailto:vinitamathew2010@gmail.com?subject=look at this website&body=Hi,I found this website and thought you might like it ">
          tell a friend
        </a>
      </div>
    );
});

export default Contact;