import { useState } from "react";
import { Link } from "react-router-dom";

const PokeCard = (props) => {

    const title = props.pokemonName;
    const imageUrl = props.pokemonImgUrl;
  return (
    
    <div className=" transition ease-in-out delay-50  hover:scale-110  bg-white shadow-md rounded-lg p-4 ">
      <Link to={`/pokemon/${title}`}>
       <h2 className="text-xl font-semibold mb-2">{title}</h2>
       <div className="flex justify-center ">
       <img src= {imageUrl} alt="image" className="w-1/2 h-1/2"/>
       </div>
       </Link>
      
    </div>
   
  )
}

export default PokeCard