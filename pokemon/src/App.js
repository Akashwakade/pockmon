
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Pokemon } from './pages/Pokemon';

import FavoritesPage, { Favorites } from './pages/Favorites';
import { Box } from '@chakra-ui/react';
import PokemonDetailsPage from './pages/pokemonDetails';
import { Types } from './pages/Types';
import TypeDetailsPage from './pages/TypesDetails';

function App() {
  return (
    <div className="App">
      
     <Box style={{width:"100%",color:"white", backgroundColor:"teal",margin:"auto",border:"2px solid black",display:"flex", justifyContent:"space-around"}}>
      <Link to={"/"}>Pokemon Page</Link>
      <Link to={"/types"}>Types Page</Link>
      <Link to={"/favorites"}>Favorites Page</Link>
      
      </Box>

      <Routes>
        <Route path='/' element={<Pokemon />}/>
        <Route path='/types' element={<Types />}/>
        <Route path='/favorites' element={<FavoritesPage />}/>
        <Route path="/pokemon/:name" element={<PokemonDetailsPage />}/>
        <Route path="/types/:id" element={<TypeDetailsPage/>}/>
         
       
      </Routes>
    </div>
  );
}

export default App;
