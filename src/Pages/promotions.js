import React from 'react';
import { Box, Typography } from '@mui/material';

const Promotions = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ height: '25%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}>Promotions and Discounts</Typography>
      </Box>
      <Typography sx={{ fontSize: '18px', color: 'white',marginRight:'40%' }}>Check out our current promotions, discounts, and loyalty programs for our valued customers!</Typography>
      <Box sx={{ height: '25%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ height: '90%', width: '90%', backgroundColor: 'rgb(246,214,0)', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', overflow: 'hidden' }}>
          <Typography sx={{ padding: '2%', fontWeight: 'bold', color: 'black', fontSize: '20px' }}>Happy Hour Special</Typography>
          <Typography sx={{ color: 'black', lineHeight: '0.5',marginLeft:"2%" }}>
          Join us for Happy Hour every weekday from 3pm to 6pm and enjoy 50% off on all drinks!
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: '25%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px',marginInline:'15%' }}>
        <Box sx={{ height: '90%', width: '90%', backgroundColor: 'rgb(246,214,0)', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', overflow: 'hidden' }}>
          <Typography sx={{ padding: '2%', fontWeight: 'bold', color: 'black', fontSize: '20px' }}>Weekend Brunch Deal</Typography>
          <Typography sx={{ color: 'black', lineHeight: '0.5',marginRight:'20%',marginLeft:'2%' }}>
          Indulge in our delicious brunch menu every weekend from 10am to 2pm and get a complimentary coffee with any brunch item!    
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: '25%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px',marginInline:'15%' }}>
        <Box sx={{ height: '90%', width: '90%', backgroundColor: 'rgb(246,214,0)', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', overflow: 'hidden' }}>
          <Typography sx={{ padding: '2%', fontWeight: 'bold', color: 'black', fontSize: '20px' }}> Loyalty Program</Typography>
          <Typography sx={{ color: 'black', lineHeight: '0.5',marginRight:'20%',marginLeft:'2%' }}>
          Sign up for our loyalty program and earn points for every purchase. Redeem your points for free drinks and discounts!

  
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Promotions;
