// import React, { useState, useRef } from "react";
// import "./Services.scss";
// import servicesData from "./servicesStub.js";

// const Services = () => {
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const [selectedService, setSelectedService] = useState(4);
//   const itemsRef = useRef(null);

//   return (
//     <div className="servicesContainer">
//       <div className="servicesWrapper">
//         <div
//           className="item-set__arrow item-set__arrow--left"
//           onClick={() => {
//             if (selectedService > 4) {
//               setScrollLeft(scrollLeft - 1234);
//               setSelectedService(selectedService - 4);
//             }
//           }}
//           disabled={selectedService > 4 ? false : true}
//         >
//           &lt;
//         </div>
//         <div className="item-set__wrapper">
//           <div
//             className="item-set__items"
//             ref={itemsRef}
//             style={{ transform: `translateX(-${scrollLeft}px)` }}
//             //style={{ transform: `translateX(-${selectedService * 25}%)` }}
//             id="list"
//           >
//             {servicesData.map((item, index) => (
//               <div
//                 style={{ flex: "0 0 auto", marginRight: "16px" }}
//                 className="item-set__item"
//                 key={item.id}
//               >
//                 {item.info}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div
//           className="item-set__arrow item-set__arrow--right"
//           onClick={() => {
//             if (selectedService < servicesData.length) {
//               setScrollLeft(scrollLeft + 1234);
//               setSelectedService(selectedService + 4);
//             }
//           }}
//           disabled={selectedService >= servicesData.length ? true : false}
//         >
//           &gt;
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from "react";
import Carousel from "react-grid-carousel";
import "./Services.scss";
import { useInView } from "react-intersection-observer";
import servicesData from "./servicesStub.js";

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger when the component is 50% visible
    triggerOnce: true, // Only trigger once
  });
  return (
    <div className="servicesContainer">
      <div ref={ref} className={inView ? "slide-up" : "hidden"}>
        <Carousel
          cols={4}
          rows={1}
          gap={1}
          loop={false}
          scrollSnap={true}
          className="servicesWrapper"
        >
          {servicesData.map((item, index) => (
            <Carousel.Item className="servicesItems">
              <div
                style={{ flex: "0 0 auto", marginRight: "16px" }}
                className="item-set__item"
                key={item.id}
              >
                <div className="service-title">{item.title}</div>
                <div className="service-desc">{item.info}</div>
              </div>
            </Carousel.Item>
          ))}
          {/* ... */}
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
