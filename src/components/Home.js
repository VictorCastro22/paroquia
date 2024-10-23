import React from 'react';
import '../styles/home.css';

function Home() {
    return (
        <section id="home">
            <div id="cta">
                <h1 className="title">
                    Nossa Senhora <span>da Penha</span>
                </h1>
                <p className="description">
                    Conheça um pouco da nossa história!
                </p>
                <div id="cta_buttons">
                    <a href="#menu">Missas</a>
                    <div id="phone_button">
                        <button>Veja agora</button>
                    </div>
                </div>
            </div>
            <div id="banner">
                <img src="path/to/banner.jpg" alt="Delicious Dishes" />
            </div>
            <div className="shape"></div>
        </section>
    );
}

export default Home;
