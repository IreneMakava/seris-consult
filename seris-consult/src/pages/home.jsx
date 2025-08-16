import React from 'react'
import { Box, Typography, Container} from '@mui/material';
import background from '../assets/bgImage.jpg';

const Home = () => {
  return (
    <Box 
    sx={{
      height: '90vh',
      backgroundImage: `url(${background})`,
      backgroundSize:'cover',
      backgroundPosition:'center',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      color:'#fff',
      textAlign:'left',
      px: {xs: 2, md: 10},
      
    }}
    >
     <Box>
        <Typography variant='h3' sx={
          {fontWeight:'bold', mb:2}}> 
          Professional Report Writing & Review
        </Typography>
        <Typography variant='h6'>
          Empowering organizations with accurate, clear and impactful documentation.
        </Typography>
      </Box> 
    </Box>
  );
};

export default Home;
