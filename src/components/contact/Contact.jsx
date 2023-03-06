import React from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import PhoneIcon from "../../assets/phone-icon.png";
import AddressIcon from "../../assets/address-icon.png";
import EmailIcon from "../../assets/email-icon.png";
import "./Contact.scss";

const Contact = React.forwardRef((props, contactRef) => {
    const [ref, inView] = useInView({
      threshold: 0.3,
      triggerOnce: true,
    });
  return (
    <div ref={contactRef} className="contactContanier">
      <div
        ref={ref}
        className={
          inView ? "slide-up" : "hidden"
        }
      >
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
        <div className="contact-info-wrapper">
          <div className="mobile-info">
            <div className="mobile-title">
              <img src={PhoneIcon} alt="" />
              <span>Call us at</span>
            </div>
            <div className="mobile-no">+ 971 (04) 589 7115</div>
          </div>
          <div className="address-info">
            <div className="address-title">
              <img src={AddressIcon} alt="" />
              <span>Visit us at</span>
            </div>
            <div className="address">
              110B , Prime Business Center, Jumeriah Village Circle, Dubai,
              United Arab Emirates
            </div>
          </div>
          <div className="email-info">
            <div className="email-title">
              <img src={EmailIcon} alt="" />
              <span>Email us at</span>
            </div>
            <div className="email-address">Info@tagfoodsolutions.com</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
