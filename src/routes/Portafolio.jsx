import React from 'react'
import Arrow from '../components/arrow/Arrow'
import Abilities from '../components/abilities/Abilities'
import ShowCases from '../components/showCase/ShowCases'

function Portafolio() {
  return (
    <div>
      <Arrow link='../' next={false}/>
      <Abilities/>
      <ShowCases/>
    </div>
  )
}

export default Portafolio