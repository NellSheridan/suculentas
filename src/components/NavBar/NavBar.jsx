import React from 'react';
import logo from '../../assets/logo.png';
import './NavBar.css';
import Cart from './Cart/Cart';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className="navigation-wrapper">
            <div className="container-wide">
                <nav className="nav-menu">
                    <ul>
                        <li>
                            <Link to="/que-hacemos">QUIENES SOMOS</Link>
                        </li>
                        <li>
                            <Link to="/promociones">PROMOCIONES</Link>
                        </li>
                    </ul> 
                </nav>
                <a className="nav-logo-wrap" href="/">
                    <img src={logo} alt="logo" className="img"/>
                </a>
                <nav className="nav-menu">
                    <ul>
                  
                        <li>         
                            <Link to="/blog">BLOG</Link>
                        </li>
                        <li>         
                            CONTACTANOS
                        </li>
                        <li className="cart-wrapper">
                            <Link to="/bolsa">
                                <Cart></Cart>
                            </Link>
                        </li>
                       
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;