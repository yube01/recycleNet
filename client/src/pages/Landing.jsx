import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Card from "../components/Card";
import "./Landing.css";
import alert from "../assets/alerts.png";
import connect from "../assets/connects.png";
import recycle from "../assets/recylces.png";

export default function Landing() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="card-container">
        <Card
          imagePath={alert}
          heading="Alert Expiration"
          paragraph="Alert before your stocks gets stale."
        />
        <Card
          imagePath={connect}
          heading="Connect"
          paragraph="Network with people who find value in your waste.  "
        />
        <Card
          imagePath={recycle}
          heading="Recycle"
          paragraph="Reduce the waste and sustain environment."
        />
      </div>
    </>
  );
}
