import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Box, Button, SimpleGrid } from '@chakra-ui/react'
import PokemonCard from '../Components/PokemonCard'


export const Types = () => {
    const[pokemon,setPokemon]=useState([])
    const [nextPageUrl, setNextPageUrl] = useState('');
    const [prevPageUrl, setPrevPageUrl] = useState('');

   const getData=async(url)=>{
          const data=await axios.get(url)
        //   console.log(data)
          setPokemon(data.data.results)
          setNextPageUrl(data.data.next);
          setPrevPageUrl(data.data.previous);
   }
    useEffect(()=>{
        getData("https://pokeapi.co/api/v2/type")
    },[])
    console.log(pokemon)
    const handlePagination = (url) => {
        getData(url);
      };
  return (
    <Box>
        <SimpleGrid columns={1}  spacing={4}>
         {pokemon.map((el,index)=>{
            return <PokemonCard key={index} index={index} name={el.name}/>
         })}
         </SimpleGrid>

         {/* pagination */}

         <Box mt={4}>
        { <Button onClick={() => handlePagination(prevPageUrl)}>Previous</Button>}
        {nextPageUrl && <Button onClick={() => handlePagination(nextPageUrl)}>Next</Button>}
      </Box>
    </Box>
  )
}
