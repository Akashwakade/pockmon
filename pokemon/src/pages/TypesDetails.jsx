import React, { useState, useEffect } from 'react';
import { Box, Text, Image, Flex, IconButton, Button, Fade } from '@chakra-ui/react';
// import { FaHeart } from 'react-icons/fa';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TypeDetailsPage({ match }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const params=useParams()
  useEffect(() => {
    
    const pokemonName = params.name;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        setPokemonDetails(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching Pokemon details:', error);
      });
  }, [params.name]);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    
  };

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Box p={4}>
      <Flex align="center">
        <Image src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
        <Text ml={4} fontSize="xl">{pokemonDetails.name}</Text>
        <IconButton
          ml="auto"
          aria-label="Favorite"
          icon={<Fade color={isFavorite ? 'red' : 'gray'} />}
          onClick={handleToggleFavorite}
        />
      </Flex>

      <Box mt={4}>
        <Text>ID: {pokemonDetails.id}</Text>
        <Text>Base Experience: {pokemonDetails.base_experience}</Text>
        <Text>HP: {pokemonDetails.stats[0].base_stat}</Text>
        <Text>Attack: {pokemonDetails.stats[1].base_stat}</Text>
        <Text>Defense: {pokemonDetails.stats[2].base_stat}</Text>
        <Text>Special Attack: {pokemonDetails.stats[3].base_stat}</Text>
        <Text>Special Defense: {pokemonDetails.stats[4].base_stat}</Text>
        <Text>Speed: {pokemonDetails.stats[5].base_stat}</Text>

        <Text>Abilities:</Text>
        <ul>
          {pokemonDetails.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>

        <Text>Moves:</Text>
        <ul>
          {pokemonDetails.moves.map((move, index) => (
            <li key={index}>{move.move.name}</li>
          ))}
        </ul>

        <Text>Weight: {pokemonDetails.weight}</Text>
        <Text>Height: {pokemonDetails.height}</Text>
      </Box>
    </Box>
   
 
    );
}

export default TypeDetailsPage;
