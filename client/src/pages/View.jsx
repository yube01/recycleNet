import React from "react";
import Navbar from "../components/NavBar";
import {
  Typography,
  CardMedia,
  Grid,
  Box,
  Paper,
} from "@mui/material";
import OrganizationImage from "../assets/waste.jpeg"; // Example image path

export default function View() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh", // Set height to 100vh (viewport height)
          bgcolor: "background.paper",
        }}
      >
        <Paper elevation={3} sx={{ p: 3, maxWidth: 800 }}>
          <Grid container spacing={3}>
            {/* Organization Image */}
            <Grid item xs={12} md={4}>
              <CardMedia
                component="img"
                image={OrganizationImage} // Replace with your image variable
                alt="Organization"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>
            {/* Organization Details */}
            <Grid item xs={12} md={8}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  Organization Name
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Waste Type: Plastic
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Quantity: 1000 kg
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Pickup Location: Example Street, City
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}
