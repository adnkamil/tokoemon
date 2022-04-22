import React from 'react'

export default function CardDetail() {
  return (
    <div>
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <h1>{namePokemon}</h1>
      <img src={img} style={{ }} alt={namePokemon}/>
      {moves && moves.map((move,index) => (
        <h4 key={index}>{move.name}</h4>
      ))}
      {types && types.map((type, index) => (
        <h4 key={index}>{type}</h4>
      ))}
    </div>
  )
}
