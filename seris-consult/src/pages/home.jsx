import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import bgImg from "../assets/bgImage.jpg";

export default function Home() {
  return (
    <Box
  sx={{
    position: "relative",
    py: { xs: 6, md: 10 },
    px: { xs: 2, md: 8 },
    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0) 70%), url(${bgImg})`,
    backgroundSize: { xs: "contain", md: "cover" }, // responsive background scaling
    backgroundPosition: { xs: "top center", md: "right center" },
    backgroundRepeat: "no-repeat",
    minHeight: { xs: "60vh", md: "80vh" }, // smaller height on phones
  }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Column - Text */}
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          {/* Red circle */}
          <Box
            sx={{
              position: "absolute",
              top: -40,
              left: -40,
              width: 150,
              height: 150,
              borderRadius: "50%",
              backgroundColor: "#d93f1a",
              zIndex: 0,
            }}
          />

          {/* Heading */}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              position: "relative",
              zIndex: 1,
              fontSize: { xs: "2rem", md: "3rem" },
              lineHeight: 1.2,
              color: "#000",
            }}
          >
            Strategy
            <br />
            and growth
            <br />
            solutions for business
          </Typography>

          {/* Small text */}
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              color: "black",
              maxWidth: 400,
            }}
          >
            Empowering organizations with accurate, clear and impactful documentation.
          </Typography>
        </Grid>
      </Grid>

      <Box
  sx={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
    lineHeight: 0,
  }}
>
  <svg
    viewBox="0 0 1440 200"
    preserveAspectRatio="none"
    style={{ display: "block", width: "100%", height: 200 }}
  >
    {/* Orange wave background that fills the gap */}
    <path
      d="M0,60 C360,150 1080,20 1440,80 L1440,200 L0,200 Z"
      style={{ stroke: "none", fill: "#d93f1a" }}
    />
  </svg>
</Box>

    </Box>
  );
}
