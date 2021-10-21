import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css'

function Header() {
    return (
        <div className = "headcontainer">
            <div className = "logo">
            <Link to="/" className = "logotxt">MOVIEAPP</Link>
            </div>
            <ul className= 'links'>
                <li><Link to = "/" className = "linkbtns">Watchlist</Link></li>
                <li><Link to = "/watched" className = "linkbtns">Watched</Link></li>
                <li><Link to = "/add" className = "addbutton">+Add</Link></li>
            </ul>
        </div>
    )
}

export default Header
