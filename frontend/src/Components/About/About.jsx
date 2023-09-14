import React from 'react'
import './About.scss'
const About = () => {
    return (
    //    /* <!--About --> */
    <section className="about">
        <div className="container">
        <div className="about__inner">
            <section className="about__content">
            <p className="about__label">// About //</p>
            <h2 className="about__heading section__heading">
                Best Agency For Your Pet.
            </h2>
            <p className="about__desc section__desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="about__checklist">
                <span className="about__check-item"> Certified Groomer </span>
                <span className="about__check-item"> 14+ Years Experience </span>
                <span className="about__check-item"> Animal Lover </span>
                <span className="about__check-item"> Pet Parent Of 3 Dogs </span>
            </div>
            </section>
            <div className="about__media">
            {/* <!-- about card --> */}
            <div className="about__card">
                <p className="about__card-title">20+</p>
                <p className="about__card-desc">Years Experience</p>
                <img
                src="/assets/img/about1.2.svg"
                alt=""
                className="about__card-decor"
                />
            </div>
            {/* <!-- about img wrap --> */}
            <figure className="about__img-wrap">
                <img src="/assets/img/abou1.png" alt="" className="about__img" />
                {/* <!-- decor --> */}
                <img
                src="/assets/img/about1.1.svg"
                alt=""
                className="about__img-decor"
                />
            </figure>
            </div>
            <div className="about__media">
            <figure className="about__img-wrap about__img-wrap-bottom">
                <img
                src="/assets/img/about-bottom.png"
                alt=""
                className="about__img about__img-bottom"
                />
                {/* <!-- decorators --> */}
                <div>
                <img
                    src="/assets/img/decor-bot-1.svg"
                    alt=""
                    className="about__decor-img"
                />
                <img
                    src="/assets/img/decor-bot-2.svg"
                    alt=""
                    className="about__decor-img"
                />
                <img
                    src="/assets/img/decor-bot-3.svg"
                    alt=""
                    className="about__decor-img"
                />
                <img
                    src="/assets/img/decor-bot-4.svg"
                    alt=""
                    className="about__decor-img"
                />
                <img
                    src="/assets/img/decor-bot-5.svg"
                    alt=""
                    className="about__decor-img"
                />
                <img
                    src="/assets/img/decor-bot-6.svg"
                    alt=""
                    className="about__decor-img"
                />
                <img
                    src="/assets/img/decor-bot-6.svg"
                    alt=""
                    className="about__decor-img"
                />
                <img
                    src="/assets/img/decor-bot-6.svg"
                    alt=""
                    className="about__decor-img"
                />
                </div>
            </figure>
            </div>
            <section className="about__content">
            <h2 className="section__heading">Taking A Vacation? So Is Your Pet.</h2>
            <p className="about__desc-bottom section__desc">
                We offer long-term and short-term boarding. Every dog has its own
                private, spacious room and daily individual time in our large play
                yard.
            </p>
            <div className="tab">
                <ul className="tab__list">
                <li className="tab__item tab__item-active">
                    <img
                    src="/assets/img/pet-boarding.png"
                    alt=""
                    className="tab__icon"
                    />
                    <span className="tab__title">Pet Boarding</span>
                </li>
                <li className="tab__item">
                    <img
                    src="/assets/img/pet-daycare.png"
                    alt=""
                    className="tab__icon"
                    />
                    <span className="tab__title"> Pet Daycare</span>
                </li>
                <li className="tab__item">
                    <img
                    src="/assets/img/pet-trans.png"
                    alt=""
                    className="tab__icon"
                    />
                    <span className="tab__title"> Pet Transport</span>
                </li>
                </ul>
                <div className="tab__contents">
                <div className="tab__content-item tab__content-item-active">
                    <p className="tab__content-desc">
                    While you're on holiday, here's where your furry friends
                    will spend their time.
                    </p>
                    <a href="#!" className="tab__content-more">View more</a>
                </div>
                {/* <!-- content 2 --> */}
                <div className="tab__content-item">
                    <p className="tab__content-desc">
                    While you're on holiday, here's where your furry friends
                    will spend their time 2.
                    </p>
                    <a href="#!" className="tab__content-more">View more</a>
                </div>
                {/* <!-- content 3 --> */}
                <div className="tab__content-item">
                    <p className="tab__content-desc">
                    While you're on holiday, here's where your furry friends
                    will spend their time 3.
                    </p>
                    <a href="#!" className="tab__content-more">View more</a>
                </div>
                </div>
            </div>
            </section>
        </div>
        </div>
    </section>
    )
}

export default About