import { Box } from '@chakra-ui/react';
import './App.css';
import { Home } from './Components/Home';
import { Destination } from './Components/Destination';
import Crew from './Components/Crew';
import Technology from './Components/Technology';

function App() {
  return (
    <Box >
        <Home/>
        <Destination />
        <Crew />
        <Technology />
    </Box>
  );
}

export default App;

