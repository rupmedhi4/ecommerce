import React, { useContext } from 'react';
import './Navbar.css';
import { AppContext } from '../Context/AppContext';
import App from '../../App';

export default function Navbar({setPortal, portal}) {

    const {cartArr} = useContext(AppContext)
    const modalHandler = ()=>{
        setPortal(!portal)
    }
    return (
        <nav className='container'>
            <ul className='ul'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Store</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
            <button className='cartBtn' onClick={modalHandler}>Cart {cartArr.length}</button>
        </nav>
    );
}
