import React from 'react';
import '../styles/home.css';

function Home() {
    return (
        <section id="home">
            <div id="cta">
                <h1 className="title">
                    Welcome to <span>Our Restaurant</span>
                </h1>
                <p className="description">
                    Discover the best dishes prepared with the freshest ingredients.
                </p>
                <div id="cta_buttons">
                    <a href="#menu">View Menu</a>
                    <div id="phone_button">
                        <button>Call Now</button>
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
