import React from 'react';
import { Box, Typography } from '@mui/material'; 

const About = () => {
  return (
    <Box sx={{height:'80%', width:'100%'}}>
    <Box sx={{height:'40%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
    <Typography sx={{fontWeight:'bold',fontSize:'30px',color:'white'}}>EVENTS AND ACTIVITIES</Typography>
    
    </Box>
    <Box sx={{ height: '120%', width: '100%', display: 'flex', justifyContent: 'center', backgroundColor:"black",gap:'30px' }}>
      
      <Box sx={{ height: '90%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',backgroundColor:'rgb(249,249,249)',borderRadius:'5%' }}>
        <Typography sx={{ fontFamily: 'bold', fontSize: '40px', }}>TUESDAY</Typography>
        <img src='https://yonstruc.com/imgs/movie_night.jpg' alt="Logo" style={{ height: '60%', width: '85%', borderRadius:'4%' }} />
        <Typography sx={{height:'20%', width:'85%', marginTop:'3%'}}>Join us for our movie night every Tuesday evening. Immerse yourself in the world of cinema and enjoy an evening in a cozy atmosphere.</Typography>
      </Box>
      
      <Box sx={{ height: '90%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',backgroundColor:'rgb(249,249,249)',borderRadius:'5%' }}>
        <Typography sx={{ fontFamily: 'bold', fontSize: '40px', }}>WEDNESDAY</Typography>
        <img src='https://yonstruc.com/imgs/live_music.jpg' alt="Logo" style={{ height: '60%', width: '85%', borderRadius:'4%' }} />
        <Typography sx={{height:'20%', width:'85%', marginTop:'3%'}}>Experience the joy of live music on Wednesday nights. Relax with great music and good company.</Typography>
      </Box>
      <Box sx={{ height: '90%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',backgroundColor:'rgb(249,249,249)',borderRadius:'5%' }}>
      <Typography sx={{ fontFamily: 'bold', fontSize: '40px', }}>SATURDAY</Typography>
      <img src='https://yonstruc.com/imgs/coffee_tasting.jpg' alt="Logo" style={{ height: '60%', width: '85%', borderRadius:'4%' }} />
      <Typography sx={{height:'20%', width:'85%', marginTop:'3%'}}>Discover new flavors and aromas at our coffee tasting event every Saturday. Sample a variety of specialty coffees and learn about their unique characteristics.</Typography>
    </Box>
    </Box>
    </Box>
  );
};

export default About;
