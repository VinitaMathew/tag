import React from "react";
import blogData from "./blogsData";
import { useInView } from "react-intersection-observer";
import Quote from "../../assets/quotes.png";
import { NavLink } from "react-router-dom";
import BlogItem from "./BlogItem";
import "./BlogPage.scss";

export default function BlogPage() {
  const [ref, inView] = useInView({
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
    <div className="blogPageContainer">
      <h1>Blog</h1>
      <ul className="blogs-list">
        {blogData.map((blog, index) => {
          return <BlogItem blog={blog} index={index} />;
        })}
      </ul>
      <div ref={ref} className={inView ? "slide-up" : "hidden"}>
        <div className="blog-footer-wrapper">
          <img className="blog-quote-image" src={Quote} alt=""></img>
          <div className="blog-footer-text">Nature is our Future</div>
        </div>
        <NavLink to="/products">
          <button
            className="blog-services-button"
            onClick={() => serviceButtonClick()}
          >
            Explore our services
          </button>
        </NavLink>
      </div>
    </div>
  );
}
