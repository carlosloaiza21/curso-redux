import React from 'react';

const PokemonList = (props) => {
  console.log(props.pokemones);
  return(
    <ul>
    {
      props.pokemones.map((item,index)=>{
        return <li key={index}><img src={item.sprites.front_default}/></li>
      })
    }
    </ul>
  )
  
}

export default PokemonList;