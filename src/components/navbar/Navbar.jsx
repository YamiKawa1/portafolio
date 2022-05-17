import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-self'>
        <ul>
            <li>
                <Link to="/" className="">Home</Link>
            </li>
            <li>
                <Link to="/portafolio" className="">Portafolio</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar