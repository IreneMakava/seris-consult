import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import bgImg from "../assets/bgImage.jpg";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        overflowX: "hidden",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0) 70%), url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: { xs: "center", md: "right center" },
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
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
              color: "text.secondary",
              maxWidth: 400,
            }}
          >
            Empowering organizations with accurate, clear and impactful documentation.
          </Typography>
        </Grid>
      </Grid>

      {/* Bottom Wave as Part of Background */}
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
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 150 }}
        >
          <path
            d="M0,30 C360,150 1080,0 1440,60 L1440,150 L0,150 Z"
            style={{ stroke: "none", fill: "#f7f7f7" }}
          />
        </svg>
      </Box>
    </Box>
  );
}
