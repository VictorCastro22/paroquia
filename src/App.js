import React from 'react';
import './styles/style.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Menu />
            <Testimonials />
            <Footer />
        </>
    );
}

export default App;
