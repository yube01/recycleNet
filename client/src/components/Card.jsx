// Card.js
import React from "react";
import "./Card.css";

const Card = (props) => {
  const { imagePath, heading, paragraph } = props;

  return (
    <div className="card">
      <div className="icon">
        <img src={imagePath} alt="Recycle Icon" />
      </div>
      <h3>{heading}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default Card;
