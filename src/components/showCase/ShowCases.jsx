import React from 'react'
import {data} from './ShowCaseData'
import './ShowCases.css'

const makeShowCases = data.map(showCase => {
  return (
      <div className="card main-card">
        <img src={showCase.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{showCase.title}</h5>
          <p className="card-text">{showCase.description}</p>
          <a href={showCase.link} className="btn btn-danger">Go to site</a>
        </div>
      </div>
  )
});


function ShowCases() {
  return (
    <div className='main-showCases'>
      <h4>Trabajos, practicas y proyectos</h4>
      <div className='main-showCase'>
          {makeShowCases}
      </div>
    </div>
    
  )
}

export default ShowCases