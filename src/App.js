import { Box } from '@chakra-ui/react';
import './App.css';
import { Home } from './Components/Home';
import { Destination } from './Components/Destination';
import Crew from './Components/Crew';

function App() {
  return (
    <Box >
        <Home/>
        <Destination />
        <Crew />
    </Box>
  );
}

export default App;

