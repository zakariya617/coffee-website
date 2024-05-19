import { Box, Typography } from '@mui/material'
import React from 'react'

const Cofee = () => {
  return (
    <Box sx={{ height: '80%', width: '100%',  backgroundColor: 'rgb(26,26,26)',flexDirection:'column', display:'flex', justifyContent:'center' }}>
   
    
    <Box sx={{ height: '100%', width: '100%', display:'flex', justifyContent:'center', alignItems:'center' }}>
    <Box sx={{ height: '70%', width: '80%',  backgroundColor: 'rgb(51,51,51)', marginBottom:'10%',borderRadius:'3%',boxShadow: '0 3px 10px rgb(0 0 0 / 0.2) '}}>
    <Typography sx={{padding:'4%', fontWeight:'bold', color:'white', fontSize:'20px'}}>Mastering the Art of Coffee Brewing</Typography>
    <Typography sx={{  color:'white', marginLeft:'4%'}}>
    
    Brewing the perfect cup of coffee is both an art and a science. From selecting the right beans to mastering the brewing process, there are many factors to consider when brewing coffee at home.

One of the most important factors in brewing great coffee is using high-quality, freshly roasted beans. Look for beans that are roasted within the past few weeks and store them properly to preserve their freshness and flavor.

Next, consider your brewing method. Whether you prefer pour-over, French press, or espresso, each method requires its own unique approach. Experiment with different brewing methods to find the one that suits your taste preferences.

Finally, pay attention to your brewing technique. Factors like water temperature, grind size, and brew time can all impact the flavor of your coffee. Experiment with different variables until you find the perfect balance for your taste.

With a little practice and experimentation, you can master the art of coffee brewing and enjoy delicious, cafe-quality coffee in the comfort of your own home.</Typography>
    </Box>
    </Box>

    
    </Box>
  )
}

export default Cofee 