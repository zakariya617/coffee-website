import { Box, Typography } from '@mui/material';
import React, { useRef } from 'react';

const NavBar = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ height: '10%', width: '98.7%', backgroundColor: 'rgb(0,0,0)', display: 'flex', flexDirection: 'row', position: 'fixed' }}>
    <img 
    src='https://gloriajeanscoffees.com.pk/wp-content/uploads/2021/08/imageedit_24_3379532504-e1629792133377.png' 
    alt="Logo" 
    style={{ height: '100%', width: '30%' ,marginLeft:'6%'}}   
  />
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: "50px", alignItems: 'center' }}>
  
      <Typography sx={{ fontSize: '100%', fontWeight: 'bold', color: 'white', cursor: 'pointer' }} onClick={() => scrollToRef(homeRef)}>HOME</Typography>
        <Typography sx={{ fontSize: '100%', fontWeight: 'bold', color: 'white', cursor: 'pointer' }} onClick={() => scrollToRef(aboutRef)}>ABOUT US</Typography>
        <Typography sx={{ fontSize: '100%', fontWeight: 'bold', color: 'white', cursor: 'pointer' }} onClick={() => scrollToRef(menuRef)}>MENU</Typography>
        <Typography sx={{ fontSize: '100%', fontWeight: 'bold', color: 'white', cursor: 'pointer' }} onClick={() => scrollToRef(contactRef)}>CONTACT US</Typography>
      </Box>
    </Box>
  )
}

export default NavBar;

