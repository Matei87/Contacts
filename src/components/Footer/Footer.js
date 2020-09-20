import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer>
            <p>Made by <span>Matei Mircea</span> @ {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;
