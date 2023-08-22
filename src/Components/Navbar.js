import React from 'react'
import logo from '../Assets/logo.png';

export default function Navbar() {
    return (
        <nav>
            <a href="/" target="_blank" rel="noopener">
                <img src={logo} alt="Logo" className='nav--logo' />
            </a>
        </nav>
    )
}
