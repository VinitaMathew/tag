import React from "react";
import AboutImage1 from "../../assets/about1.png";
import AboutImage2 from "../../assets/about2.png";
import { useInView } from "react-intersection-observer";
import BorderImage3 from "../../assets/border-img3.svg";
import Quote from "../../assets/quotes.png";
import { NavLink } from "react-router-dom";
import "./AboutPage.scss";

export default function AboutPage() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const serviceButtonClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="aboutPageContainer">
      <h1 className="about-heading">About Us</h1>
      <div className="about-section1-wrapper">
        <img src={AboutImage1} alt="" className="about-image1" />
        <p className="section1-content">
          We source and distribute organic, sustainable and quality food
          products for a global clientele. Our objective is to provide natural,
          fresh and, most importantly, sustainable food products, and add value
          to what you do.
        </p>
      </div>
      <div
        ref={ref2}
        className={
          inView2
            ? "slide-up about-section2-wrapper"
            : "hidden about-section2-wrapper"
        }
      >
        <div className="section2-content">
          <p className="section2-text1">
            Lorem ipsum dolor sit amet consectetur. Tincidunt ullamcorper lectus
            purus nisi. Pretium sit mattis molestie pretium maecenas neque
            varius amet. Tincidunt dui nisl amet lacus urna. Eu massa lorem
            lectus arcu morbi tincidunt in.
          </p>
          <p className="section2-text2">
            Senectus nunc donec quis ut nulla fermentum gravida. Amet pretium ut
            eget lacus faucibus quis. Ut scelerisque dui magna lorem vulputate
            ultrices faucibus sed. Odio nec consequat congue egestas habitant.
            Mauris tempus dignissim id dictumst. Etiam vitae orci in porttitor.
            Feugiat morbi dictum et nascetur turpis consequat convallis.
            Fermentum accumsan at eget.
          </p>
        </div>
        <img src={AboutImage2} alt="" className="about-image2" />
        <img className="tag-border-image3-4" src={BorderImage3} alt="" />
      </div>
      <div
        ref={ref3}
        className={
          inView3
            ? "slide-up about-section3-wrapper"
            : "hidden about-section3-wrapper"
        }
      >
        <h2>Our Story</h2>
        <div className="section3-content">
          <p className="section3-text1">
            Lorem ipsum dolor sit amet consectetur. Tincidunt ullamcorper lectus
            purus nisi. Pretium sit mattis molestie pretium maecenas neque
            varius amet. Tincidunt dui nisl amet lacus urna. Eu massa lorem
            lectus arcu morbi tincidunt in.
          </p>
          <p className="section3-text2">
            Senectus nunc donec quis ut nulla fermentum gravida. Amet pretium ut
            eget lacus faucibus quis. Ut scelerisque dui magna lorem vulputate
            ultrices faucibus sed. Odio nec consequat congue egestas habitant.
            Mauris tempus dignissim id dictumst. Etiam vitae orci in porttitor.
            Feugiat morbi dictum et nascetur turpis consequat convallis.
            Fermentum accumsan at eget.
          </p>
        </div>
      </div>
      <div ref={ref} className={inView ? "slide-up" : "hidden"}>
        <div className="about-footer-wrapper">
          <img className="about-quote-image" src={Quote} alt=""></img>
          <div className="about-footer-text">Nature is our Future</div>
        </div>
        <NavLink to="/products">
          <button
            className="about-services-button"
            onClick={() => serviceButtonClick()}
          >
            Explore our services
          </button>
        </NavLink>
      </div>
    </div>
  );
}
