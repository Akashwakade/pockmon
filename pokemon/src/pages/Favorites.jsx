import React, { useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
// import PokemonCard from './PokemonCard';
// import { getFavoritesFromLocalStorage } from './localStorage'; 

function FavoritesPage() {
//   const [favoritePokemons, setFavoritePokemons] = useState(getFavoritesFromLocalStorage());

  return (
    <Box>
      {/* <SimpleGrid columns={5} spacing={4}>
        {favoritePokemons.map(pokemonName => (
          <PokemonCard key={pokemonName} name={pokemonName} />
        ))}
      </SimpleGrid> */}
    </Box>
  );
}

export default FavoritesPage;
