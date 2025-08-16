import React from 'react';
import { Box, Typography } from '@mui/material';

export default function AboutUs() {
  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 2, md: 10 },
        backgroundColor: '#ffffff',
        position: 'relative',
        textAlign: 'center',
        overflow: 'visible',
      }}
    >
      {/* Decorative Orange Curves */}
      <Box
        sx={{
          position: 'absolute',
          top: -40,
          left: -50,
          width: '200px',
          height: '200px',
          zIndex: 0,
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,100 C50,0 150,200 200,100"
            stroke="#d93f1a"
            strokeWidth="4"
            fill="transparent"
          />
        </svg>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: -50,
          right: -50,
          width: '200px',
          height: '200px',
          zIndex: 0,
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,100 C50,200 150,0 200,100"
            stroke="#d93f1a"
            strokeWidth="4"
            fill="transparent"
          />
        </svg>
      </Box>

      {/* Text Content */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          position: 'relative',
          zIndex: 1,
          color: '#1F6E3F', // fern green
        }}
      >
        About Us
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 3,
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Seris Consult is a trusted Tanzanian consulting firm offering tailored and innovative solutions in Research and Data Analysis, Strategic and Business Plans, Budgeting and Financial Modelling, Monitoring and Evaluation (M&E), Quality Management Systems (QMS), Human Resource Management, Events and Conference Management, and Capacity Building and Training Programs. We work with organizations across sectors to build systems that are data-driven, results-oriented, and sustainable.
      </Typography>
    </Box>
  );
}
