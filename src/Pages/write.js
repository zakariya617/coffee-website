import { Box, Typography } from '@mui/material'
import React from 'react'

const Write = () => {
  return (
    <Box sx={{ height: '140%', width: '100%',  backgroundColor: 'rgb(26,26,26)',flexDirection:'column', display:'flex', justifyContent:'center', alignItems:'center' }}>
   
    <Box sx={{ height: '20%', width: '100%',  backgroundColor: 'black' }}></Box>
     <Box sx={{ height: '10%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}>ABOUT US</Typography>
      </Box>
    <Box sx={{ height: '80%', width: '100%', display:'flex', justifyContent:'center', alignItems:'center' }}>
    <Box sx={{ height: '70%', width: '80%',  backgroundColor: 'rgb(51,51,51)', marginBottom:'10%',borderRadius:'3%',boxShadow: '0 3px 10px rgb(0 0 0 / 0.2) '}}>
    <Typography sx={{padding:'4%', fontWeight:'bold', color:'white', fontSize:'20px'}}>The History of Coffee</Typography>
    <Typography sx={{  color:'white', marginLeft:'4%'}}>
    
    Explore the fascinating history of coffee, from its ancient origins to its global popularity today. Coffee has a rich and complex history that spans centuries and continents. Legend has it that coffee was first discovered by an Ethiopian goat herder named Kaldi, who noticed that his goats became more energetic after eating the berries from a certain tree. Intrigued, Kaldi tried the berries himself and experienced a similar burst of energy.

From its humble beginnings in Ethiopia, coffee spread to the Arabian Peninsula, where it was cultivated and traded by Arab merchants. By the 15th century, coffee had become a popular beverage in the Islamic world, with coffee houses known as qahveh khaneh springing up in cities like Constantinople (modern-day Istanbul).

In the 17th century, coffee made its way to Europe, where it quickly gained popularity among the intellectual and social elite. Coffee houses became centers of intellectual exchange and social discourse, often referred to as "penny universities" because for the price of a cup of coffee, one could engage in stimulating conversation and debate.

Today, coffee is one of the most widely consumed beverages in the world, with a thriving global industry that encompasses everything from small-scale coffee farmers to multinational coffee chains. Its journey from an obscure berry in the forests of Ethiopia to a beloved beverage enjoyed by millions is a testament to the enduring power of coffee.

For more in-depth information about the history of coffee, be sure to check out our comprehensive guide on the subject.</Typography>
    </Box>
    </Box>

    
    </Box>
  )
}

export default Write