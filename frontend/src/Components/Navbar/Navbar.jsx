import React from 'react'
import './Navbar.scss'
const Navbar = () => {
    return (
        /* <!-- navbar --> */
        <nav className="navbar">
        <ul className="navbar__list">
        <li className="navbar__item">
            <a href="#!" className="nav__link">Home</a>
        </li>
        <li className="navbar__item">
            <a href="#!" className="nav__link">About</a>
        </li>
        <li className="navbar__item">
            <a href="#!" className="nav__link">Services & Rates</a>
        </li>
        <li className="navbar__item">
            <a href="#!" className="nav__link">Reviews</a>
        </li>
        <li className="navbar__item">
            <a href="#!" className="nav__link">Contacts us</a>
        </li>
        </ul>
    </nav>
    )
}

export default Navbar