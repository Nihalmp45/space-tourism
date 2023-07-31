import { Box } from '@chakra-ui/react';
import './App.css';
import { Home } from './Components/Home';
import { Destination } from './Components/Destination';

function App() {
  return (
    <Box >
        <Home/>
        <Destination />
    </Box>
  );
}

export default App;

const boxMainStyles = {
  m:'0',
  h:'100vh',
  w:'1920px',
  backgroundImage:"url('Images/Home/background-home-desktop.jpg')",
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  overFlowX:"hidden",
}