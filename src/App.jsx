import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetails from './components/PokemonDetail';
import { ChakraProvider } from '@chakra-ui/react';
import Favorites from './components/Favourites';


function App() {
  return (
    <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} /> 
          <Route path="/favorites" element={<Favorites />} /> 

        </Routes>
    </ChakraProvider>
  );
}

export default App;
