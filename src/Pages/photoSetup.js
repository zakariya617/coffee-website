import React from 'react';
import { Box, Typography } from '@mui/material';
import Photo from '../Components/photo';

const PhotoSetup = () => {
  return (
    <Box sx={{ height: '100%', backgroundColor: 'BLACK', width: '100%',flexDirection:'column', display:'flex',justifyContent:'center', alignItems:"center" }}>
    <Typography sx={{fontWeight:'bold',fontSize:'50px',color:'rgb(255,255,255)'}}>Photo Gallery</Typography>
    <Box sx={{ height: '40%', width: '80%',marginLeft:'2%' , display:'flex', justifyContent:'center', alignItems:'center'}}>
  <Photo Image='https://yonstruc.com/imgs/patio.jpg'/>
  <Photo Image='https://yonstruc.com/imgs/Mocha.jpg'/>

  <Photo Image='https://yonstruc.com/imgs/image1.jpg' />

  <Photo Image='https://yonstruc.com/imgs/interior1.jpg'/>

  </Box>

  <Box sx={{ height: '40%', width: '80%',marginLeft:'2%' ,display:'flex', justifyContent:'center', alignItems:'center'}}>
  <Photo Image='https://yonstruc.com/imgs/image2.jpg' />
  <Photo Image='https://yonstruc.com/imgs/croissant.jpg'/>

  <Photo Image='https://yonstruc.com/imgs/movie_night.jpg'/>

  <Photo Image='https://yonstruc.com/imgs/image3.jpg' />

  </Box>
     
    </Box>
  );
}

export default PhotoSetup;
