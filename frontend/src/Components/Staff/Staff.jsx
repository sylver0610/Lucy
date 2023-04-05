import React from 'react'
import './Staff.scss'

const Staff = () => {
    return (
        // <!-- staff -->
        <section class="staff">
            <div class="container">
                <section class="staff__header">
                    <p class="staff__header-label service__header-label">
                        Pet Care Staff
                    </p>
                    <h2 class="staff__header-title section__heading">
                        Meet Our Groomers
                    </h2>
                </section>
                <div class="staff__body">
                    <section class="staff__info">
                        <div class="staff__avatar">
                            <img src="./assets/img/st1.png" alt="" class="staff__img" />
                        </div>
                        <p class="staff__position">Pet Trainer</p>
                        <p class="staff__name">Meghan Samit</p>
                    </section>
                    <section class="staff__info">
                        <div
                        class="staff__avatar"
                        style={{"--bg": "linear-gradient(180deg, #ff997e 0%, #f3752e 100%)"}}
                        >
                            <img src="./assets/img/st2.png" alt="" class="staff__img" />
                        </div>
                        <p class="staff__position">Veterinarian</p>
                        <p class="staff__name">Alissa Silva</p>
                    </section>
                    <section class="staff__info">
                        <div
                        class="staff__avatar"
                        style={{"--bg": "linear-gradient(180deg, #fabf3e 0%, #ffa14a 100%)"}}
                        >
                            <img src="./assets/img/st3.png" alt="" class="staff__img" />
                        </div>
                        <p class="staff__position">Veterinarian</p>
                        <p class="staff__name">Cindy Harris</p>
                    </section>
                    <section class="staff__info">
                        <div
                        class="staff__avatar"
                        style={{"--bg": "linear-gradient(180deg, #5bd6e2 0%, #00a7cc 100%)"}}
                        >
                            <img src="./assets/img/st4.png" alt="" class="staff__img" />
                        </div>
                        <p class="staff__position">Animal Caretaker</p>
                        <p class="staff__name">Lucas Tony</p>
                    </section>
                </div>
                <a href="#!" class="btn staff__btn service__btn-action"
                >View All Team</a
                >
            </div>
        </section>
        
    )
}

export default Staff;