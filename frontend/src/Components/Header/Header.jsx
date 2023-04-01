import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.scss'
const Header = () => {
    return (
        <header class="header">
        <div class="container">
            <div class="header__inner">
            {/* <!-- logo --> */}

            <img src="/assets/img/Logo.svg" alt="Lucy" class="logo" />

            {/* <!-- navbar --> */}
            <Navbar/>
            
            {/* <!-- header action --> */}
            <div class="header-action">
                <a href="#!" class="header-action__link">Sign in</a>
                <a href="#!" class="btn header-action__btn">Sign up</a>
            </div>
            </div>
        </div>
        </header>
    )
}

export default Header