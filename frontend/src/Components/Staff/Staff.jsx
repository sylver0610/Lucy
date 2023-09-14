import React from 'react'
import './Staff.scss'

const Staff = () => {
    return (
        // <!-- staff -->
        <section className="staff">
            <div className="container">
                <section className="staff__header">
                    <p className="staff__header-label service__header-label">
                        Pet Care Staff
                    </p>
                    <h2 className="staff__header-title section__heading">
                        Meet Our Groomers
                    </h2>
                </section>
                <div className="staff__body">
                    <section className="staff__info">
                        <div className="staff__avatar">
                            <img src="./assets/img/st1.png" alt="" className="staff__img" />
                        </div>
                        <p className="staff__position">Pet Trainer</p>
                        <p className="staff__name">Meghan Samit</p>
                    </section>
                    <section className="staff__info">
                        <div
                        className="staff__avatar"
                        style={{"--bg": "linear-gradient(180deg, #ff997e 0%, #f3752e 100%)"}}
                        >
                            <img src="./assets/img/st2.png" alt="" className="staff__img" />
                        </div>
                        <p className="staff__position">Veterinarian</p>
                        <p className="staff__name">Alissa Silva</p>
                    </section>
                    <section className="staff__info">
                        <div
                        className="staff__avatar"
                        style={{"--bg": "linear-gradient(180deg, #fabf3e 0%, #ffa14a 100%)"}}
                        >
                            <img src="./assets/img/st3.png" alt="" className="staff__img" />
                        </div>
                        <p className="staff__position">Veterinarian</p>
                        <p className="staff__name">Cindy Harris</p>
                    </section>
                    <section className="staff__info">
                        <div
                        className="staff__avatar"
                        style={{"--bg": "linear-gradient(180deg, #5bd6e2 0%, #00a7cc 100%)"}}
                        >
                            <img src="./assets/img/st4.png" alt="" className="staff__img" />
                        </div>
                        <p className="staff__position">Animal Caretaker</p>
                        <p className="staff__name">Lucas Tony</p>
                    </section>
                </div>
                <a href="#!" className="btn-a staff__btn service__btn-action"
                >View All Team</a
                >
            </div>
        </section>
        
    )
}

export default Staff;