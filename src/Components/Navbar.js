import React from 'react'
import logo from '../Assets/logo.png';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="Logo" className='nav--logo' />
        </nav>
    )
}
