import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/UI/Loading';
import PokeDetailCard from '../components/Pokemon/PokeDetailCard';
import { useNavigate } from 'react-router-dom';


function PokemonDetails() {
  const { pokemonid } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.error('Error fetching Pokémon data:', error));
  }, [pokemonid]);

  const findStat = (statName) => stats.find((stat) => stat.stat.name === statName)?.base_stat;


  if (!pokemonData) {
    return <Loading />;
  }

  // Extract relevant details from 'pokemonData'
  const { name, height, weight, abilities, types ,stats} = pokemonData;
  

  return (
    <div>
    <div className='md:flex md:justify-center md:content-center pt-20 '>
    <PokeDetailCard name={name} height={height} weight={weight} abilities={abilities} types={types} stats={stats}/>
    
    
        
    
    
    </div>
    <div className="fixed bottom-0 px-2 flex flex-row gap-2 md:bottom-[-10] right-4 mb-4 mr-4">
        <button className="h-11 px-8 rounded-md bg-black text-white" onClick={() => navigate(-1)}>
          Back
        </button>
       
      </div>
    
    </div>
  );
}

export default PokemonDetails;
