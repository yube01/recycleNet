// Hero.js
import React from "react";
import "./Hero.css";
import recycle from "../assets/landing.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          <span>Recycle</span>Net
        </h1>
        <p>
          <b>RecycleNet</b> helps you track and manage your biodegradable
          materials, preventing waste and expiration. Connect with eco-conscious
          individuals who can repurpose and recycle your organic waste,
          contributing to a greener, more sustainable future.
        </p>
        <div>
          <button className="getStart">Get Started</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={recycle} alt="Recycle Animation" className="animate-image" />
      </div>
    </section>
  );
};

export default Hero;
