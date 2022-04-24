import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light shadow">
            <div className="container">
                <ul className="nav">
                    <img src="" alt="" />
                    
                    <li>
                        <Link to="/" className="nav-link">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/About" className="nav-link">
                        About
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar