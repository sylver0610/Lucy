import React from 'react'
import './Hero.scss'
import { Link, useNavigate } from 'react-router-dom'
const Hero = () => {
    const navigate = useNavigate();
    // const handleLogin = () => {
    //     navigate('/login')
    // }
    
    return (
        
        <section className="hero">
            <div className="container">
                <div className="hero__inner">
                <div className="hero__media">
                    <div className="hero__img-wrap">
                        <img
                            src="/assets/img/red-white-cat-i-white-studio-removebg.png"
                            alt=""
                            className="hero__img"
                        />
                    {/* <!-- Decorators --> */}
                        <img
                            src="/assets/img/decor-1.svg"
                            alt=""
                            className="hero__decor decor__left"
                        />
                        <img
                            src="/assets/img/decor-2.svg"
                            alt=""
                            className="hero__decor decor__right"
                        />
                    </div>
                    <div className="hero__img-wrap hero__img-wrap-small">
                        <img src="/assets/img/pet-02.png" alt="" className="hero__img" />
                    </div>
                    <div className="hero__list">
                    {/* <!-- hero list item 1 --> */}
                    <div className="hero-list-item">
                        <img
                        src="/assets/img/pet-03.png"
                        alt=""
                        className="hero-list-item__thumb"
                        />

                        <div className="hero-list-item__info">
                            <p className="hero-list-item__title">Pet Health</p>
                            <div className="hero-list-item__skeleton"></div>
                            <div
                                className="hero-list-item__skeleton"
                                style={{"--width": "39px"}}
                            ></div>
                        </div>
                    </div>

                    <div className="hero-list-item__separate"></div>
                    {/* <!-- hero list item 2 --> */}
                    <div className="hero-list-item">
                        <img
                        src="/assets/img/pet-04.png"
                        alt=""
                        className="hero-list-item__thumb"
                        style={{"--bg": "#c6e2fa"}}
                        />

                        <div className="hero-list-item__info">
                        <p className="hero-list-item__title">Pet care</p>
                        <div className="hero-list-item__skeleton"></div>
                        <div
                            className="hero-list-item__skeleton"
                            style={{"--width": "39px"}}
                        ></div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <!-- Content --> */}
                <section className="hero__content">
                    <h1 className="hero__heading">
                    Established & Trusted Pet Care Service
                    </h1>
                    <p className="hero__desc">
                    Discover a wide variety of Pawsitive services to choose from,
                    including daycare, private walks, office duty and spa.
                    </p>
                    <div className="hero-action">
                    <Link to='login' className="btn-a btn--primary hero-action__btn" state={{isLogIn:true}}>
                        Book a Meet
                        <span className="btn__icon">
                        <svg
                            width="5"
                            height="6"
                            viewBox="0 0 5 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M1.48584 0.5L3.98584 3L1.48584 5.5"
                            stroke="#FD5056"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </span>
                    </Link>
                    <a href="#!" className="hero__cta-link">Schedule a Call</a>
                    </div>
                </section>
                </div>
            </div>
        </section>
    )
    }

export default Hero