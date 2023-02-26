import React from "react";

export default function ProductDetails(props) {
    const { details, handleBackClick } = props;
    return (
      <div>
        <button onClick={props.handleBackClick}>Back</button>
        <div>{details.role}</div>
      </div>
    );
}