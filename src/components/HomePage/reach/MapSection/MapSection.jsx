import React,{useState} from "react";
import Map from "../../../../assets/Map.svg";
import "./MapSection.scss";

export default function MapSection() {
    const [africaHovered,setAfricaHovered] = useState(false);

 return (
   <div className="map-section-container">
     <div className="map-content-wrapper">
       <h2 className="reach-heading">Our Reach</h2>
       <div className="reach-map-text">
         Our company has a global presence, serving customers across the{" "}
         <b>
           Middle East,{" "}
           <span
            style={{cursor:"pointer"}}
             onMouseEnter={() => setAfricaHovered(true)}
             onMouseLeave={() => setAfricaHovered(false)}
           >
             Africa,
           </span>
           Asia, Europe, and North America
         </b>
         . This widespread reach allows us to provide local support and
         understanding of each unique market, while also leveraging our
         international expertise to bring the best solutions to our customers no
         matter where they are located.
       </div>
     </div>
     <div className="map-image-wrapper">
       <img src={Map} alt="" className="map-image" />
       <div className={`location-pin pin1`}></div>
       <div className={`location-pin pin2 ${africaHovered ? 'pin-active' : ''}`}></div>
       <div className="location-pin pin3"></div>
       <div className="location-pin pin4"></div>
     </div>
   </div>
 );   
}