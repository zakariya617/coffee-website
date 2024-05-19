import { Box, Typography } from '@mui/material'
import React from 'react'
import Cards from '../Components/cards';

const CardsSetup = () => {
  return (
    <Box sx={{ height: '100%', backgroundColor: 'rgb(51,51,51)', width: '100%' }}>
      <Box sx={{ height: '10%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(51,51,51)' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}>MENU</Typography>
      </Box>
      <Box sx={{ height: '10%', backgroundColor: 'rgb(51,51,51)', width: '100%' }}>
        <Box sx={{ height: '100%', width: '100%', display: 'flex', gap: '2%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}>Coffee</Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}>Tea</Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}>Beverages</Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}>Snacks</Typography>
        </Box>
      </Box>
      <Box sx={{ height: '80%', width: '100%', backgroundColor:'rgb(51,51,51)', display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center' }}>
     <Cards Image='https://yonstruc.com/imgs/espresso.jpg' Title='Espresso' Discription='A concentrated coffee beverage brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans.' Price=' price $2.50'/>
      <Cards Image='https://yonstruc.com/imgs/black_tea.jpg' Title='Black Tea' Discription='A type of tea that is more oxidized than oolong, green, and white teas, featuring a stronger flavor and darker color' Price='Price: $2.00' />
      <Cards Image='https://yonstruc.com/imgs/hot_chocolate.jpg' Title='Hot Chocolate' Discription='A sweet beverage that is typically made with cocoa powder, sugar, and milk or water, often topped with whipped cream or marshmallows.' Price='Price: $3.00'/>
      <Cards Image='https://yonstruc.com/imgs/croissant.jpg' Title='Croissant' Discription='A buttery, flaky, pastry named for its distinctive crescent shape.' Price='Price: $2.00'/>
      </Box>
      <Box sx={{ height: '80%', width: '100%', backgroundColor:'rgb(51,51,51)', display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center' }}>
      
      <Cards Image='https://yonstruc.com/imgs/latte.jpg' Title='Latte' Discription='A coffee drink made with espresso and steamed milk, often topped with a small amount of frothed milk' Price=' Price: $3.50'/>
      <Cards Image='https://yonstruc.com/imgs/green_tea.jpg' Title='Green Tea' Discription='A type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas.' Price=' price $4.50'/>
      <Cards Image='https://yonstruc.com/imgs/Smoothie.jpg' Title='Smoothie' Discription='A thick, creamy beverage made from blended fruits, vegetables, and other ingredients such as yogurt, milk, or ice cream.' Price=' price $7.50'/>
      <Cards Image='https://yonstruc.com/imgs/muffin.jpg' Title='Muffin' Discription='A small, baked, individual-sized quick bread product, typically sweet or savory.' Price=' price $8.50'/>
      </Box>
      <Box sx={{ height: '80%', width: '100%', backgroundColor:'rgb(51,51,51)', display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center' }}>
      
      <Cards Image='https://yonstruc.com/imgs/cappuccino.jpg' Title='Cappuccino' Discription='A coffee drink that is composed of espresso and steamed milk, with the surface topped with foamed milk.' Price=' Price: $3'/>
      <Cards Image='https://yonstruc.com/imgs/Lemonade.jpg' Title='Lemonade' Discription='A sweetened beverage made from lemon juice, water, and sugar, often served cold with ice.' Price=' Price: $6'/>
      <Cards Image='https://yonstruc.com/imgs/Bagel.jpg'Title='Bagel with Cream Cheese' Discription='A toasted bagel served with a generous spread of cream cheese, perfect for a quick and satisfying snack.' Price=' Price: $9'/>
      <Cards Image='https://yonstruc.com/imgs/Affogato.jpg'Title='Affogato' Discription='A classic Italian coffee-based dessert made by pouring a shot of hot espresso over a scoop of vanilla gelato or ice cream.' Price=' Price: $10'/>
      </Box>
    </Box>
  )
}

export default CardsSetup;