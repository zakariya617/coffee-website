import { Box, Typography } from '@mui/material'
import React from 'react'

const TextBox = () => {
  return (
    <Box sx={{ height: '90%', width: '100%',  backgroundColor: 'rgb(26,26,26)',flexDirection:'column', display:'flex', justifyContent:'center' }}>
   
    
    <Box sx={{ height: '100%', width: '100%', display:'flex', justifyContent:'center', alignItems:'center' }}>
    <Box sx={{ height: '65%', width: '80%',  backgroundColor: 'rgb(51,51,51)', marginBottom:'10%',borderRadius:'3%',boxShadow: '0 3px 10px rgb(0 0 0 / 0.2) '}}>
    <Typography sx={{padding:'4%', fontWeight:'bold', color:'white', fontSize:'20px'}}>Tips for Choosing the Perfect Coffee Beans</Typography>
    <Typography sx={{  color:'white', marginLeft:'4%'}}>
    
    Choosing the perfect coffee beans can seem like a daunting task with so many options available. Whether you prefer light, medium, or dark roast, single-origin or blend, there are a few key factors to consider when making your selection.

    First, consider the roast level. Lighter roasts tend to have brighter, more acidic flavors, while darker roasts are richer and more robust. Experiment with different roast levels to find the flavor profile that suits your taste preferences.
    
    Next, think about the origin of the beans. Single-origin coffees are sourced from a specific region or even a single farm, allowing you to taste the unique terroir of that area. Blends, on the other hand, combine beans from multiple regions to create a balanced and complex flavor profile.
    
    Finally, consider the processing method. Natural processed coffees tend to have fruity and floral notes, while washed coffees are cleaner and more balanced. Explore different processing methods to discover new and exciting flavor profiles.
    
    By taking these factors into account, you can choose the perfect coffee beans to suit your taste preferences and brewing method.</Typography>
    </Box>
    </Box>

    
    </Box>
  )
}

export default TextBox