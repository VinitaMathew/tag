import React, { useState } from "react";
import routePage1Data from "./RoutePage1Stub";
import "./RoutePage1.scss";

export default function RoutePage1(){
  const [isExpandedItem, setIsExpandedItem] = useState(null);

  const toggleExpanded = (index) => {
    setIsExpandedItem(index+1);
  };

  return (
    <div className="routePage1" onMouseLeave={() => setIsExpandedItem(null)}>
      <div className="expandable-column">
        {routePage1Data.map((item, index) => (
          <div
            onMouseEnter={() => toggleExpanded(index)}
            key={index}
            className={`column ${
              isExpandedItem === index + 1
                ? "expanded"
                : isExpandedItem
                ? "hiddenColumn"
                : ""
            }`}
            // style={{ width: `${100 / routePage1Data.length}%` }}
          >
            {item.info}
            {isExpandedItem === index + 1? <div className="name">{item.name}</div>:null}
          </div>
        ))}
      </div>
    </div>
  );
};
