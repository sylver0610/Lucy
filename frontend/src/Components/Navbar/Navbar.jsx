import React from 'react'
import './Navbar.scss'
const Navbar = () => {
    return (
        /* <!-- navbar --> */
        <nav class="navbar">
        <ul class="navbar__list">
        <li class="navbar__item">
            <a href="#!" class="nav__link">Home</a>
        </li>
        <li class="navbar__item">
            <a href="#!" class="nav__link">About</a>
        </li>
        <li class="navbar__item">
            <a href="#!" class="nav__link">Services & Rates</a>
        </li>
        <li class="navbar__item">
            <a href="#!" class="nav__link">Reviews</a>
        </li>
        <li class="navbar__item">
            <a href="#!" class="nav__link">Contacts us</a>
        </li>
        </ul>
    </nav>
    )
}

export default Navbar