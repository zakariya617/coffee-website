import { Box } from '@mui/material';
import NavBar from './Pages/navbar';
import Image from './Pages/image'; // Correcting the import statement for Image
import About from './Pages/about';
import Blog from './Pages/blog';



function App() {
  return (
    <Box sx={{ height: '100vh', width: '100vw', overflowX: 'hidden' }}>
      <NavBar />
      <Image /> 
      <About/>
      <Blog/>
    
    </Box>
  );
}

export default App;

