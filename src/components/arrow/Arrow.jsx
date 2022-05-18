import React from 'react'
import './Arrow.css'
import { Link } from 'react-router-dom'

function Arrow(props) {
  if (props.next === true) {
    return (
      <div className='arrow-right'>
        <Link to={props.link}>
          <button className="btn botton-self">
              <span className="carousel-control-next-icon"></span>
          </button>
        </Link>    
        </div>
    )  
} else {
  return (
    <div className='arrow-left'>
      <Link to={props.link}>
        <button className="btn botton-self">
          <span className="carousel-control-prev-icon"></span>
        </button>
      </Link>    
      </div>
  )
}
}

export default Arrow