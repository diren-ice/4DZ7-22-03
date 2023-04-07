<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

const PokemonCard = ({ pokemon }) => {
  const [ image, setImage ] = useState('');
  useEffect(() => {
    axios.get(pokemon.url).then((data) => {
      console.log(data, 'respoonse ');
      setImage(data.data.sprites.other.dream_world.front_default)
    })
  }, [ pokemon.url ]);
  return (
       <React.Fragment>
      <Link to={`/pokemon/${pokemon.name}`}>
      <div className='pokemonCard'>
      {pokemon.name}
       <img  src={image} alt='pokemon imgages' />
    </div>
      </Link>
       </React.Fragment>

  )
}

export default PokemonCard


=======
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PokemonCard = ({ pokemon })=> {

  const[image, setImage ] = useState('');

  useEffect (() => {
    axios.get(pokemon?.url).then((data) => {
      setImage(data.data.sprites.other.dream_world.front_default)
    })
  }, [pokemon]);

  return (
    <div className='pokemonCard'>
      {pokemon?.name}
      <img src={image} alt='pokemon images' />
    </div>
  )
}

export default PokemonCard
>>>>>>> 4608ad95c75e93278bd3f919d176dc552756c208
