import React from 'react';
import logo from '../../assets/logo.png';
import './NavBar.css';
import Cart from './Cart/Cart';

const NavBar = (props) => {
    return (
        <header className="navigation-wrapper">
            <div className="container-wide">
                <nav className="nav-menu">
                    <ul>
                        <li onClick={props.eventClick}>NUESTROS PRODUCTOS</li>
                        <li onClick={props.eventClick}>PROMOCIONES</li>
                    </ul> 
                </nav>
                <a className="nav-logo-wrap" href="/">
                    <img src={logo} alt="logo" className="img"/>
                </a>
                <nav className="nav-menu">
                    <ul>
                        <li onClick={props.eventClick}>NUESTRA HISTORIA</li>
                        <li onClick={props.eventClick}>APRENDE</li>
                        <li className="cart-wrapper">
                            <Cart></Cart>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;