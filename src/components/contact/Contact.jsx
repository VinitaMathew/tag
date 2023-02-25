import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Contact.scss";

const Contact = React.forwardRef((props,contactRef)=>{
  const location = useLocation();
  console.log(location.pathname);
    return (
      <div ref={contactRef} className="contactContanier">
        Contact US
        <nav>
          <NavLink
            className="tag-link"
            to="/"
            onClick={location.pathname == "/" ? props.homeClick : null}
          >
            Back to Home
          </NavLink>
        </nav>
        <a
          href="mailto:vinitamathew2010@gmail.com?subject=look at this website&body=Hi,I found this website and thought you might like it "
        >
          tell a friend
        </a>
      </div>
    );
});

export default Contact;