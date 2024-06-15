// Card.js
import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="icon">
        <img src="path-to-recycle-icon.png" alt="Recycle Icon" />
      </div>
      <h3>Sustainability</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
        mauris eget arcu fermentum congue sed sed libero.
      </p>
    </div>
  );
};

export default Card;
