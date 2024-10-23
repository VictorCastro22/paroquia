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
                <li className="nav-item"><a href="#home">Inicio</a></li>
                <li className="nav-item"><a href="#menu">Missas</a></li>
                <li className="nav-item"><a href="#testimonials">Confissões</a></li>
                <li className="nav-item"><a href="#testimonials">Eventos</a></li>
            </ul>
            <button className="navbar-toggle" onClick={toggleMenu}>
                ☰
            </button>
        </nav>
    );
}

export default Navbar;
