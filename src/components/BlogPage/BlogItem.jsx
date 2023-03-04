import React from "react";
import { useInView } from "react-intersection-observer";

export default function BlogItem({blog,index}) {
   const [ref, inView] = useInView({
     threshold: 0.01,
     triggerOnce: true,
   });
    return (
      <li
        ref={ref}
        className={
          inView ? "slide-up blogs-list-item" : "hidden blogs-list-item"
        }
        key={index}
      >
        <div className="blog-image-wrapper">
          <img src={blog.image} className="blog-image"></img>
        </div>
        <div className="blog-section">
          <div className="blog-content">{blog.content}</div>
          <div className="blog-date">{blog.date}</div>
          <div className="blog-name">{blog.name}</div>
        </div>
      </li>
    );
}