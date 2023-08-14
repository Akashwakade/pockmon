import { Box, Image, LightMode, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function PokemonCard({ name }) {
    return (
      <Link to={`/pokemon/${name}`}>
        <Box border="1px solid #ddd" borderRadius="md" p={4} textAlign="center">
          {/* <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${name}.png`} alt={name} /> */}
          <Text>{name}</Text>
        </Box>
      </Link>
    );
  }

  export default PokemonCard;
