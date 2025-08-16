import React from 'react'
import { Box, Typography, Button } from '@mui/material'

export default function aboutUs() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 10 }, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, maxWidth: '800px' }}>
          Seris Consult is a trusted Tanzanian consulting firm offering tailored and innovative solutions in Research and Data Analysis,Strategic and Business Plans, Budgeting and Financial Modelling, Monitoring and Evaluation(M&E), Quality Management Systems(QMS), Human Resource Management, Events and Conference Management and Capacity Building and Training Programs. We work with organizations across sectors to build systems that are data-driven, results-oriented, and sustainable.
        </Typography>
        <Button variant="outlined">Book a free consultation</Button>
      </Box>
  );   
}
