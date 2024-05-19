import React from 'react';
import { Box, Typography } from '@mui/material';

const Customer = () => {
  return (
    <Box sx={{height:'140%',width:'100%', backgroundColor:'pink'}}>
    <Box sx={{height:'100%',width:'100%', backgroundColor:'black', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', gap:'2%'}}>
    
    <Box sx={{height:'10%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
    <Typography sx={{fontWeight:'bold',fontSize:'30px',color:'white'}}>Customer Testimonialsss</Typography>
    
    </Box>
   
    
    
    <Box sx={{ height: '15%', width: '90%',  backgroundColor: 'white',borderRadius:'3%',boxShadow: '0 3px 10px rgb(0 0 0 / 0.2) '}}>
    <Typography sx={{padding:'4%', fontWeight:'bold', color:'black', fontSize:'20px'}}>"Very friendly staff and excellent service. The coffee is always fresh and delicious. Highly recommend!"</Typography>
   
    </Box>
    <Box sx={{ height: '15%', width: '90%',  backgroundColor: 'white',borderRadius:'3%',boxShadow: '0 3px 10px rgb(0 0 0 / 0.2) '}}>
    <Typography sx={{padding:'4%', fontWeight:'bold', color:'black', fontSize:'20px'}}>"Great place for coffee! Very tasty drinks and a pleasant atmosphere. Will definitely come back again!"</Typography>
    
    </Box>
    <Box sx={{ height: '15%', width: '90%',  backgroundColor: 'white',borderRadius:'3%',boxShadow: '0 3px 10px rgb(0 0 0 / 0.2) '}}>
    <Typography sx={{padding:'4%', fontWeight:'bold', color:'black', fontSize:'20px'}}>"I love the cozy vibe of this cafe. The staff are always welcoming and the coffee is consistently excellent. It's my go-to spot!"</Typography>
    
    </Box>
    <Box sx={{ height: '15%', width: '90%',  backgroundColor: 'white',borderRadius:'3%',boxShadow: '0 3px 10px rgb(0 0 0 / 0.2) '}}>
    <Typography sx={{padding:'4%', fontWeight:'bold', color:'black', fontSize:'20px'}}>"I stumbled upon this cafe while exploring the neighborhood and I'm so glad I did! The coffee is top-notch and the staff is always welcoming. A hidden gem!"</Typography>
    
    </Box>
    <Box sx={{ height: '15%', width: '90%',  backgroundColor: 'white',borderRadius:'3%',boxShadow: '0 3px 10px rgb(0 0 0 / 0.2) '}}>
    <Typography sx={{padding:'4%', fontWeight:'bold', color:'black', fontSize:'20px'}}>"I've been coming to this cafe for years and it never disappoints. The quality of the coffee is exceptional and the atmosphere is cozy and inviting. Highly recommended!"</Typography>
    
    </Box>
    <Box sx={{ height: '15%', width: '90%',  backgroundColor: 'white',borderRadius:'3%',boxShadow: '0 3px 10px rgb(0 0 0 / 0.2) '}}>
    <Typography sx={{padding:'4%', fontWeight:'bold', color:'black', fontSize:'20px'}}>"As a coffee enthusiast, I can confidently say that this cafe serves some of the best coffee in town. The attention to detail in every cup is evident. Kudos to the baristas!"</Typography>
    
    </Box>
    
    
    
    
    </Box>
    
    </Box>
  );
};

export default Customer;
