import React from 'react'
import './Service.scss'
const Service = () => {
    return (
        // <!-- service -->
    <section className="service">
        <div className="container">
            <section className="service__header">
                <p className="service__header-label">What we do for you?</p>
                <h2 className="service__header-title section__heading">Our Services</h2>
            </section>
            <div className="service__body">
                <div className="service__column">
                    <article className="service__item">
                <h3 className="service__item-heading">Puppy Sitting</h3>
                <p className="service__item-desc">
                    Helping your new pup to be a good boy or girl isn’t always easy,
                    but we’re here to help.
                </p>
                <a href="#!" className="service__item-more">Read More</a>
                    </article>
                    <article className="service__item">
                <h3 className="service__item-heading">Dog Walking</h3>
                <p className="service__item-desc">
                    Choose from a 30, 45, or 60-minute visit to give your pet their
                    daily dose of fun-filled.
                </p>
                <a href="#!" className="service__item-more">Read More</a>
                    </article>
                    <article className="service__item">
                <h3 className="service__item-heading">Pet Sitting</h3>
                <p className="service__item-desc">
                    While you’re away we can make sure your pet has all the food,
                    water, exercise, and, of course.
                </p>
                <a href="#!" className="service__item-more">Read More</a>
                    </article>
                </div>
                <div className="service__column">
                    <figure className="service__media">
                <img
                    src="./assets/img/service.png"
                    alt=""
                    className="service__media-img"
                />
                    </figure>
                    <a href="#!" className="btn-a service__btn-action">View All Services</a>
                </div>
                <div className="service__column">
                    <article className="service__item">
                <h3 className="service__item-heading">Overnight Care</h3>
                <p className="service__item-desc">
                    If you’re away for the night, we can stay the night or stop by
                    in the evening and morning.
                </p>
                <a href="#!" className="service__item-more">Read More</a>
                    </article>
                    <article className="service__item">
                <h3 className="service__item-heading">Pet Taxi</h3>
                <p className="service__item-desc">
                    Does your pet need a lift to the groomers, vet, or dog park?
                    We’ve got their tail covered.
                </p>
                <a href="#!" className="service__item-more">Read More</a>
                    </article>
                    <article className="service__item">
                <h3 className="service__item-heading">Pet Medical Admin</h3>
                <p className="service__item-desc">
                    Our team of experienced professionals can help with everything
                    from pills to injections.
                </p>
                <a href="#!" className="service__item-more">Read More</a>
                    </article>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Service