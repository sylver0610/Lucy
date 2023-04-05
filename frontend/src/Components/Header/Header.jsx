import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.scss'
import { Link, Navigate } from 'react-router-dom'
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
                <Link to="login" className="header-action__link" state={{isLogIn:true}}>Sign in</Link>
                {/* <a href="#!" class="btn header-action__btn">Sign up</a> */}
                <Link to="register" className='btn header-action__btn'>Sign up</Link>
            </div>
            </div>
        </div>
        </header>
    )
}

export default Header