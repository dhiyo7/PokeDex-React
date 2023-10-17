import React from 'react'
import { StatsBar } from '../UI/Stats';
import NumAnim from '../UI/numAnim.jsx';
const PokeDetailCard = (props) => {
    const findStat = (statName) => props.stats.find((stat) => stat.stat.name === statName)?.base_stat;
  return (
    <div className='container
     md:flex flex-row bg-white shadow-md 
     rounded-lg md:w-1/2 
     justify-between
     md:m-20
     md:border-solid
     border-2
     p-10'>
    <div className='md:w-1/2 w-full '>
    <h1 className='text-4xl font-bold pb-2'>{props.name} </h1> 
    <div>{props.types.map((type) => (
          <span className='border-2 border-black rounded-lg px-4 mr-2 ' key={type.type.name}>{type.type.name}</span>
        ))}</div>
        
    <img src= {`https://img.pokemondb.net/artwork/large/${props.name}.jpg`} alt="image" className=" w-1/2 py-10"/>



    <div className='flex md:flex-row     pb-4'>
        <div className='pr-4'>
            <p className='text-sm'>Height</p>
            <NumAnim value={props.height} met={'m'}/> 
        </div>
        <div>
            <p className='text-sm'>Weight</p>
            <NumAnim value={props.weight} met={'kg'}/> 
        </div>
        
    </div>
    </div>
    <div className='md:w-1/2'>
    <hr
  class="md:my-0 my-8 h-0.5 border-t-0 bg-slate-700 md:invisible opacity-100 dark:opacity-50" />
    <h1 className='text-3xl md:font-bold invisible md:visible md:pb-8'>Stats</h1>
    <ul className='pb-10 '>
        <li>HP: {findStat('hp')}</li>
        <StatsBar value={findStat('hp')}/>
        <li>Attack: {findStat('attack')}</li>
        <StatsBar value={findStat('attack')}/>
        <li>Defense: {findStat('defense')}</li>
        <StatsBar value={findStat('defense')}/>
        <li>Special Attack: {findStat('special-attack')}</li>
        <StatsBar value={findStat('special-attack')}/>
        <li>Special Defense: {findStat('special-defense')}</li>
        <StatsBar value={findStat('special-defense')}/>
        <li>Speed: {findStat('speed')}</li>
        <StatsBar value={findStat('speed')}/>
      </ul>
      </div>




    </div>
  )
}

export default PokeDetailCard