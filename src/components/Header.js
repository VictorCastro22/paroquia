import React, { useState } from 'react';
import '../styles/header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div id="navbar">
                <div id="nav_logo">Logo</div>
                <ul id="nav_list">
                    <li className="nav-item active"><a href="#home">Home</a></li>
                    <li className="nav-item"><a href="#menu">Menu</a></li>
                    <li className="nav-item"><a href="#testimonials">Testimonials</a></li>
                </ul>
                <button id="mobile_btn" onClick={toggleMenu}>☰</button>
                <div id="mobile_menu" className={isMenuOpen ? 'active' : ''}>
                    <ul id="mobile_nav_list">
                        <li className="nav-item"><a href="#home">Home</a></li>
                        <li className="nav-item"><a href="#menu">Menu</a></li>
                        <li className="nav-item"><a href="#testimonials">Testimonials</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;