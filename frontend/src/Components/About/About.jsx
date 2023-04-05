import React from 'react'
import './About.scss'
const About = () => {
    return (
    //    /* <!--About --> */
    <section class="about">
        <div class="container">
        <div class="about__inner">
            <section class="about__content">
            <p class="about__label">// About //</p>
            <h2 class="about__heading section__heading">
                Best Agency For Your Pet.
            </h2>
            <p class="about__desc section__desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="about__checklist">
                <span class="about__check-item"> Certified Groomer </span>
                <span class="about__check-item"> 14+ Years Experience </span>
                <span class="about__check-item"> Animal Lover </span>
                <span class="about__check-item"> Pet Parent Of 3 Dogs </span>
            </div>
            </section>
            <div class="about__media">
            {/* <!-- about card --> */}
            <div class="about__card">
                <p class="about__card-title">20+</p>
                <p class="about__card-desc">Years Experience</p>
                <img
                src="/assets/img/about1.2.svg"
                alt=""
                class="about__card-decor"
                />
            </div>
            {/* <!-- about img wrap --> */}
            <figure class="about__img-wrap">
                <img src="/assets/img/abou1.png" alt="" class="about__img" />
                {/* <!-- decor --> */}
                <img
                src="/assets/img/about1.1.svg"
                alt=""
                class="about__img-decor"
                />
            </figure>
            </div>
            <div class="about__media">
            <figure class="about__img-wrap about__img-wrap-bottom">
                <img
                src="/assets/img/about-bottom.png"
                alt=""
                class="about__img about__img-bottom"
                />
                {/* <!-- decorators --> */}
                <div>
                <img
                    src="/assets/img/decor-bot-1.svg"
                    alt=""
                    class="about__decor-img"
                />
                <img
                    src="/assets/img/decor-bot-2.svg"
                    alt=""
                    class="about__decor-img"
                />
                <img
                    src="/assets/img/decor-bot-3.svg"
                    alt=""
                    class="about__decor-img"
                />
                <img
                    src="/assets/img/decor-bot-4.svg"
                    alt=""
                    class="about__decor-img"
                />
                <img
                    src="/assets/img/decor-bot-5.svg"
                    alt=""
                    class="about__decor-img"
                />
                <img
                    src="/assets/img/decor-bot-6.svg"
                    alt=""
                    class="about__decor-img"
                />
                <img
                    src="/assets/img/decor-bot-6.svg"
                    alt=""
                    class="about__decor-img"
                />
                <img
                    src="/assets/img/decor-bot-6.svg"
                    alt=""
                    class="about__decor-img"
                />
                </div>
            </figure>
            </div>
            <section class="about__content">
            <h2 class="section__heading">Taking A Vacation? So Is Your Pet.</h2>
            <p class="about__desc-bottom section__desc">
                We offer long-term and short-term boarding. Every dog has its own
                private, spacious room and daily individual time in our large play
                yard.
            </p>
            <div class="tab">
                <ul class="tab__list">
                <li class="tab__item tab__item-active">
                    <img
                    src="/assets/img/pet-boarding.png"
                    alt=""
                    class="tab__icon"
                    />
                    <span class="tab__title">Pet Boarding</span>
                </li>
                <li class="tab__item">
                    <img
                    src="/assets/img/pet-daycare.png"
                    alt=""
                    class="tab__icon"
                    />
                    <span class="tab__title"> Pet Daycare</span>
                </li>
                <li class="tab__item">
                    <img
                    src="/assets/img/pet-trans.png"
                    alt=""
                    class="tab__icon"
                    />
                    <span class="tab__title"> Pet Transport</span>
                </li>
                </ul>
                <div class="tab__contents">
                <div class="tab__content-item tab__content-item-active">
                    <p class="tab__content-desc">
                    While you're on holiday, here's where your furry friends
                    will spend their time.
                    </p>
                    <a href="#!" class="tab__content-more">View more</a>
                </div>
                {/* <!-- content 2 --> */}
                <div class="tab__content-item">
                    <p class="tab__content-desc">
                    While you're on holiday, here's where your furry friends
                    will spend their time 2.
                    </p>
                    <a href="#!" class="tab__content-more">View more</a>
                </div>
                {/* <!-- content 3 --> */}
                <div class="tab__content-item">
                    <p class="tab__content-desc">
                    While you're on holiday, here's where your furry friends
                    will spend their time 3.
                    </p>
                    <a href="#!" class="tab__content-more">View more</a>
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