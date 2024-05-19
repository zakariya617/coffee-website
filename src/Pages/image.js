import { Box } from '@mui/material';
import React from 'react';


const Image = () => {
  return (
    <Box sx={{ height: '70%', width: '100%' }}>
      <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <img 
          src='https://static.vecteezy.com/system/resources/previews/023/010/450/non_2x/the-cup-of-latte-coffee-with-heart-shaped-latte-art-and-ai-generated-free-photo.jpg' 
          alt="Logo" 
          style={{ height: '100%', width: '100%' }}   
        />
      </Box>
    </Box>
  );
};

export default Image;

