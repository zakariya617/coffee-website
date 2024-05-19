import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Snakes = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', backgroundColor: 'black', marginTop: '22%' }}>
      <Box sx={{ height: '40%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}>Delivery of Drinks or Food</Typography>
      </Box>
     
      <Box sx={{ listStyleType: 'none', padding: 0, color: 'white', marginLeft: '8%', gap: '40%', height: '10%' }}>
        <Typography variant="body1">We offer a convenient delivery service for our drinks and snacks right to your home or office. Enjoy our delicious offerings without leaving your doorstep!</Typography>
        <Typography variant="body1">To place a delivery order, please contact us by phone or place your order through our website.</Typography>
        <Typography variant="body1">Delivery cost and payment terms can be clarified with our manager.</Typography>
        <Typography variant="body1">Payment can be made in cash or by credit card upon delivery.</Typography>
      </Box>

      <Button variant="contained" Contact us sx={{ display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'43%',marginTop:'5%',backgroundColor:'rgb(51,51,51)' }}>
        Contact us
      </Button>
    </Box>
  );
}

export default Snakes;
