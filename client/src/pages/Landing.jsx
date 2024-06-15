import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Card from "../components/Card";

export default function Landing() {
  return (
    <>
      <Nav />
      <Hero />
      <Card
        imagePath="path-to-recycle-icon.png"
        heading="Sustainability"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel mauris eget arcu fermentum congue sed sed libero."
      />
    </>
  );
}
