import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import '../styles/Navbar.css'

/**
 * This is the navigation bar navigating stuff around the website.
 * @returns the navigation bar. 
 */
function Navbar() {
    const [isDropdownVisible, setDropdownVisible] = useState(false); 

    const handleMouseEnter = () => {
        setDropdownVisible(true);
        console.log("Hover");
    };
    
    const handleMouseLeave = () => {
        setDropdownVisible(false);
        console.log("unhover");
    };


    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/" end>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/information" end>
                                Information
                            </NavLink>
                        </li>
                        <li
                            className="nav-item dropdown-container"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            Advocacy
                            {isDropdownVisible && <Dropdown />}
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/resources" end>
                                Resources
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/social" end>
                                Connect With Us (WIP)
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/groups" end>
                                Groups (WIP)
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

// Navbar: 
// Info tab, avodacsity, resources, connect with (living doc where they can jot down info and share resources), petitoin