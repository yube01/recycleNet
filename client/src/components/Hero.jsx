// Hero.js
import React from "react";
import "./Hero.css";
import recycle from "../assets/landing.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Recycle<span style={{ color: "black" }}>Net</span>
        </h1>
        <p>
          <b>
            <i>RecycleNet </i>
          </b>
          helps you connect with eco-conscious individuals who can repurpose and
          recycle your organic waste, contributing to a greener, more
          sustainable future.
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
