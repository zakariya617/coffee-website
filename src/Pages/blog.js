import { Box, Typography } from '@mui/material';
import React from 'react';
import Write from './write';
import TextBox from './textBox';
import Cofee from './cofee';
import CardsSetup from './cardsSetup';
import Snakes from './snakes';
import Delivery from './delivery';
import Promotions from './promotions';
import PhotoSetup from './photoSetup.js';
import Customer from './customer.js';
import Bottom from './bottom.js';


const Blog = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', backgroundColor: 'rgb(26,26,26)', marginTop: '22%' }}>
      <Box sx={{ height: '15%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}>ABOUT US</Typography>
      </Box>
      <Box sx={{ height: '70%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'yellow', textDecoration: 'underline' }}>Our Story</Typography>
        <Typography sx={{ height: '60%', width: '80%', color: 'white', marginTop: '2%' }}>Roast & Relax Cafe is more than just a coffee shop – it's a destination where passion for coffee meets community. Our journey began in 2018, when a group of friends decided to turn their love for coffee into something more than just a morning ritual. They envisioned a space where people could come together, unwind, and indulge in the simple pleasure of a perfectly brewed cup of coffee.

          What makes Roast & Relax Cafe unique is our unwavering dedication to quality and authenticity. We work directly with farmers to source the finest beans, ensuring that each sip tells a story of craftsmanship and care. Our skilled baristas meticulously craft each drink, whether it's a classic espresso or a seasonal specialty, with precision and passion.

          But Roast & Relax Cafe is more than just a coffee experience – it's a place where connections are made and memories are created. Whether you're catching up with old friends over brunch, enjoying a quiet moment alone with a book, or simply grabbing your favorite brew on the go, you'll always find a warm welcome and a friendly smile at Roast & Relax Cafe. We strive to create an inclusive and welcoming environment for everyone who walks through our doors, and we're proud to be a part of this vibrant community.

          As we continue to grow and evolve, our commitment to excellence remains unwavering. We invite you to join us on this journey, to savor the moment, and to experience the magic of Roast & Relax Cafe.

          At Roast & Relax Cafe, we believe that coffee is more than just a beverage – it's a catalyst for connection, creativity, and community. Our mission is to provide a space where people can come together, relax, and enjoy the simple pleasures of life. We invite you to join us in creating moments of joy and connection, one cup at a time.</Typography>
      </Box>
      <Box sx={{ height: '40%', width: '100%', backgroundColor: 'rgb(26,26,26)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'yellow', textDecoration: 'underline' }}>Our Cafe</Typography>
        <Typography sx={{ height: '10%', width: '40%', color: 'white' }}>Step into our inviting café and experience the warmth and charm:</Typography>
      </Box>
      <Box sx={{ height: '40%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgb(26,26,26)' }}>
        <img src='https://yonstruc.com/imgs/interior1.jpg' alt="Logo" style={{ height: '60%', borderRadius: '2px' }} />
        <img src='https://yonstruc.com/imgs/coffee_beans.jpg' alt="Logo" style={{ height: '60%', borderRadius: '2px' }} />
        <img src='https://yonstruc.com/imgs/barista.jpg' alt="Logo" style={{ height: '60%', borderRadius: '2px' }} />
        <img src='https://yonstruc.com/imgs/patio.jpg' alt="Logo" style={{ height: '60%', borderRadius: '2px' }} />
      </Box>
      <Box sx={{ height: '40%', width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(26,26,26)' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: 'yellow', textDecoration: 'underline', marginLeft: '8%' }}>Our team</Typography>

        <Box sx={{ listStyleType: 'none', padding: 0, color: 'white', marginLeft: '8%', marginTop: '2%' }}>
          <Typography variant="body1">Meet the talented individuals who bring Roast & Relax Cafe to life</Typography>
          <Typography variant="body1">John Smith - Head Barista</Typography>
          <Typography variant="body1">John Smith - Head Barista</Typography>
          <Typography variant="body1">Emily Johnson - Pastry Chef</Typography>
          <Typography variant="body1">Alexander Lee - Operations Manager</Typography>
          <Typography variant="body1">Sarah Roberts - Customer Service Specialist</Typography>
        </Box>
      </Box>
      <Write />
      <TextBox />
      <Cofee />
      <CardsSetup />
      <Delivery />
      <Snakes />
      <Promotions />
      <PhotoSetup />
      <Customer />
     <Bottom/>
    </Box>
  );
};

export default Blog;
