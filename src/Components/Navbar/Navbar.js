import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='container'>
            <ul className='ul'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Store</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
            <button className='cartBtn'>Cart</button>
        </nav>
    )
}
