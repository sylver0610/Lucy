import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.scss'
import { Link, Navigate } from 'react-router-dom'
const Header = () => {
    return (
        <header className="header">
        <div className="container">
            <div className="header__inner">
            {/* <!-- logo --> */}

            <img src="/assets/img/Logo.svg" alt="Lucy" className="logo" />

            {/* <!-- navbar --> */}
            <Navbar/>
            
            {/* <!-- header action --> */}
            <div className="header-action">
                <Link to="login" className="header-action__link" state={{isLogIn:true}}>Sign in</Link>
                {/* <a href="#!" className="btn header-action__btn">Sign up</a> */}
                <Link to="register" className='btn-a header-action__btn'>Sign up</Link>
            </div>
            </div>
        </div>
        </header>
    )
}

export default Header