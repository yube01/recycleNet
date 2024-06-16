// Hero.js
import React from "react";
import "./Hero.css";
import recycle from "../assets/landing.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/register"); // Adjust the path to your signup route
  };
  return (
    <section className="hero">
      <div className="hero-text">
        <h1 style={{ textAlign: "left " }}>
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
          <button className="getStart" onClick={handleGetStartedClick}>
            Get Started
          </button>{" "}
        </div>
      </div>
      <div className="hero-image">
        <img src={recycle} alt="Recycle Animation" className="animate-image" />
      </div>
    </section>
  );
};

export default Hero;
