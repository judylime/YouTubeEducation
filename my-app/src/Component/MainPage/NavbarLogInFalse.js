import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom"
import "../../style/MainPage.css"
class NavbarLogInFalse extends Component {
    render() {
        return (
            <nav className="Navbar">
                <div className="ProjectName">
                <Link  to="/SignIn">Youtube Education</Link>
                </div>
                <div className="Menue">
                    <Link className="MenueItem" to="/SignIn">Home</Link>
                    <NavLink className="MenueItem" to="/SignIn">VideoManager</NavLink>
                    <NavLink className="MenueItem" to="/SignIn">Account</NavLink>
                </div>
            </nav>
        );
    }
}

export default NavbarLogInFalse;