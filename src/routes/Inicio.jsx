import SocialMedia from "../components/socialMedia/SocialMedia";
import About from "../components/about/About";
import React from 'react'
import Arrow from "../components/arrow/Arrow";

function Inicio() {
    return <div className="">
      <SocialMedia/>
      <About/>
      <Arrow link='/portafolio' next={true}/>
    </div>
  
}

export default Inicio