import React from "react";
import Navbar from "../components/NavBar";
import { Typography, CardMedia, Grid, Box, Paper } from "@mui/material";
import OrganizationImage from "../assets/waste.jpeg"; // Example image path

export default function View() {
  return (
    <>
      <Navbar />
      <div>
        <div>
          <img src={OrganizationImage} alt="" height={100} width={100} />
        </div>
        <div>
          <h1>Title</h1>
        </div>
        <div>
          <h4>Waste Type:</h4>
        </div>
        <div><h1>organization name</h1></div>
      </div>
    </>
  );
}
