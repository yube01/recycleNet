// Hero.js
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          <span>Recycle</span> Net
        </h1>
      </div>
      <div className="hero-image">
        <img
          src="path-to-your-image.png"
          alt="Recycle Animation"
          className="animate-image"
        />
      </div>
    </section>
  );
};

export default Hero;
