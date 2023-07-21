import React, { useContext } from 'react';
import './Navbar.css';
import { AppContext } from '../Context/AppContext';
import App from '../../App';
import { Link } from 'react-router-dom';

export default function Navbar({setPortal, portal}) {

    const {cartArr} = useContext(AppContext)
    const modalHandler = ()=>{
        setPortal(!portal)
    }
    return (
        <nav className='container'>
            <ul className='ul'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="store">Store</Link>
                </li>
                <li>
                <Link to="/about">About us</Link>
                </li>
            </ul>
            <button className='cartBtn' onClick={modalHandler}>Cart {cartArr.length}</button>
        </nav>
    );
}
