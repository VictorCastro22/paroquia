import React from 'react';
import '../styles/menu.css';

function Menu() {
    return (
        <section id="menu">
            <h2 className="section-title">Missões</h2>
            <div id="dishes">
                <div className="dish">
                    <div className="dish-heart">❤</div>
                    {/* <img src="path/to/dish.jpg" alt="Entrega de Marmitas" /> */}
                    <h3>Entrega de Marmitas</h3>
                    <p className="dish-description">Entrega de Marmitas aos moradores de rua da nossa cidade</p>
                    <div className="dish-price">
                        <span>25/10/2024</span>
                    </div>
                </div>
                {}
            </div>
        </section>
    );
}

export default Menu;
