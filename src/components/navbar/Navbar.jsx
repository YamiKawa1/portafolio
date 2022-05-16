import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-self'>
        <nav className="">
                <ul className="">
                    <li className="nav-item" >
                    <Link to="/" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item" >
                    <Link to="/portafolio" className="nav-link active">Profile</Link>
                    </li>
                </ul>
        </nav>
    </div>
  )
}

export default Navbar