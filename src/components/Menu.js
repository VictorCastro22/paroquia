import React from 'react';
import '../styles/menu.css';

function Menu() {
    return (
        <section id="menu">
            <h2 className="section-title">Our Menu</h2>
            <div id="dishes">
                <div className="dish">
                    <div className="dish-heart">❤</div>
                    <img src="path/to/dish.jpg" alt="Dish Name" />
                    <h3>Dish Name</h3>
                    <p className="dish-description">Description of the dish</p>
                    <div className="dish-price">
                        <span>$19.99</span>
                    </div>
                </div>
                {}
            </div>
        </section>
    );
}

export default Menu;
