import FabButton from "../UI/Fab";
import PokeCard from "./PokeCard";
import { useEffect, useRef, useState } from "react";

function PokeList() {
    const [pokemonList,setPokemonList] = useState([]);
    const [offset,setOffset] = useState(0);
    const apiurl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`;

    const inc = () =>{
        setOffset(offset+10)
    }

    const dec = () =>{
        offset > 10 ? setOffset(offset - 10) : setOffset(0)

    }


    useEffect(()=>{
        fetch(apiurl)
        .then((res) => res.json())
        .then((data) => setPokemonList(data.results))
    },[apiurl]);
  return (
    <>
    <div className="mx-auto pb-8 relative top-20 px-10 container grid grid-cols-1 md:grid-cols-4 gap-4 ">
      {pokemonList.map((pokemon, index) => (
        <PokeCard
          key={index}
          pokemonName={pokemon.name}
          pokemonImgUrl={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
        />
      ))}
    </div>
    <div className="fixed bottom-0 px-2 flex flex-row gap-2 md:bottom-[-10] right-4 mb-4 mr-4">
        <button className="h-11 px-8 rounded-md bg-black text-white" onClick={dec}>
            {'<'}
        </button>
        <button className="h-11 px-8 rounded-md bg-black text-white" onClick={inc}>
            {'>'}
        </button>
      </div>
      {/*<FabButton />*/}
    </>
  );
}

export default PokeList;
