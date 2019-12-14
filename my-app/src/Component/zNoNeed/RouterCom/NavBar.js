import React from 'react';
import { Link, NavLink } from "react-router-dom"
const NavBar = () => {
    return (
        <nav className="nav-warpper red darken-3">
            <div className="container">
                <Link className="brand-logo" to="/">Poke'Times</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
