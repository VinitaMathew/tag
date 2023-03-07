import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import BorderImage3 from "../../../../assets/border-img3.svg";
import "./StrengthsCarousel.scss";
import StrengthsCarouselData from "./strendthsCorouselData.js";

export default function StrengthsCarousel() {
  const ref = React.useRef();
  return (
    <div
      className="strengths-carousel-wrapper "
    >
      <img className="tag-border-image3-2" src={BorderImage3} alt="" />
      <img className="tag-border-image3-3" src={BorderImage3} alt="" />
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
          // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
          // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
          // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
          let currentVisibleSlide = 5;
          if (parentWidth <= 1100) currentVisibleSlide = 3;
          if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 140 : 650}
              carouselWidth={parentWidth}
              data={StrengthsCarouselData}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={5}
              useGrabCursor
              fadeDistance={0.7}
              swipeThreshold={3}
            />
          );
        }}
      />
      <div className="carousel-button-wrapper">
        <div
          onClick={() => {
            ref.current?.goBack();
          }}
          className="carousel-left-button"
        >
          {"<"}
        </div>
        <div
          onClick={() => {
            ref.current?.goNext(6);
          }}
          className="carousel-right-button"
        >
          {">"}
        </div>
      </div>
    </div>
  );
}

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below
export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover ,title} = data[dataIndex];
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        userSelect: "none",
      }}
      className="my-slide-component"
    >
      <img
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: 20,
        }}
        draggable={false}
        src={cover}
      />
      <div className="slide-title">{title}</div>
    </div>
  );
});
