import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-self'>
        <ul>
            <li>
              <button className='btn'>
                <Link to="/" className="">Home</Link>
              </button>
            </li>
            <li>
              <button className='btn'>
                <Link to="/portafolio" className="">Portafolio</Link>
              </button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar