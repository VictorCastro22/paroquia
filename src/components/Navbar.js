import React, { useState } from 'react';
import '../styles/navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Logo</div>
            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li className="nav-item"><a href="#home">Home</a></li>
                <li className="nav-item"><a href="#menu">Menu</a></li>
                <li className="nav-item"><a href="#testimonials">Testimonials</a></li>
            </ul>
            <button className="navbar-toggle" onClick={toggleMenu}>
                ☰
            </button>
        </nav>
    );
}

export default Navbar;
