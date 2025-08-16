import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";

export default function OurTeamSection() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "90vh",
        backgroundImage: `url('your-image.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "white",
      }}
    >
      {/* Dark gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 100%)",
          zIndex: 1,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        {/* Small top text */}
        <Typography
          variant="subtitle2"
          sx={{ textTransform: "uppercase", mb: 1 }}
        >
          OUR TEAM
        </Typography>

        {/* Heading */}
        <Box sx={{ position: "relative", display: "inline-block", mb: 4 }}>
          {/* Red bracket (top-left) */}
          <Box
            sx={{
              position: "absolute",
              left: -20,
              top: 5,
              width: "15px",
              height: "4px",
              backgroundColor: "red",
            }}
          />
          <Typography variant="h3" fontWeight="bold" sx={{ maxWidth: 500 }}>
            A global mindset <br /> with local expertise
          </Typography>
        </Box>

        {/* White overlay text box */}
        <Paper
          elevation={3}
          sx={{
            maxWidth: 600,
            p: 3,
            mt: 3,
            position: "relative",
          }}
        >
          {/* Red bracket (bottom-right) */}
          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              right: -20,
              width: "15px",
              height: "4px",
              backgroundColor: "red",
            }}
          />
          <Typography variant="body1" color="text.primary">
            Thanks to many years of experience in bridging the markets of Asia,
            the US and Europe, we have developed a unique set of expertise to
            serve our clients. Together we compile deep knowledge in investment
            banking, asset management, management consultancy and advisory as
            well as industry experience to create a truly disruptive team.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
