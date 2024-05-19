/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Box, Typography } from '@mui/material'; 


const Cards = ({Image,Title,Discription,Price}) => {
  return (
    
      
      <Box sx={{ height: '100%', width: '100%', display: 'flex', backgroundColor: "black", gap: '30px' }}>
      
        <Box sx={{ height: '90%', width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(51,51,51)', borderRadius: '5%', marginTop:'3%' }}>
          
          <img src={Image} alt="Logo" style={{ height: '30%', width: '85%', borderRadius: '4%' }} />
          <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: 'yellow' }}>{Title}</Typography>
          <Typography sx={{ height: '20%', width: '85%', marginTop: '3%', color: 'white' }}>{Discription}</Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: 'yellow', marginTop:'33%' }}>{Price}</Typography>
        </Box>
        
        
  
      </Box>
    
  );
};

export default Cards;
