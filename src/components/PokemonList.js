import React from 'react';
import { useState } from 'react';
import pokemonData from '../data.json';
import PokemonCard from './PokemonCard';

function PokemonList() {
  const [pokemon, setPokemon] = useState(pokemonData.pokemon);

  return (
    <div>
      <h1>Select Your Pokemon</h1>
      <ul className='grid:responsive'>
        {pokemon.map((pokemon, index) => {
          return <PokemonCard key={index} pokemon={pokemon} />;
        })}
      </ul>
    </div>
  );
}

export default PokemonList;
