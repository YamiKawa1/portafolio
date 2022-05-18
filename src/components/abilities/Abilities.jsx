import React from 'react'
import './Abilities.css'
import {data} from './AbilitiesData'

const makeAbilities = data.map(ability => {
    return (
      <div className='ability' key={ability.name}>
        <img src={ability.img} alt="" />
        <small>{ability.name}</small>
      </div>
    )
  })


function Abilities() {
  return (
    <div className='main-abilities'>
      <h4>Habilidades, herramientas y conocimientos</h4>
      <div className='abilities'>
        {makeAbilities}
      </div>
    </div>
    
  )
}

export default Abilities