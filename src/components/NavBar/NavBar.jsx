import React from 'react';
import logo from '../../assets/logo.png';
import './NavBar.css';
import Cart from './Cart/Cart';

const NavBar = (props) => {
    return (
        <header className="navigation-wrapper">
            <div className="container-wide">
                <nav className="nav-menu-left">
                    <ul>
                        <li onClick={props.eventClick}>{props.item1}</li>
                        <li onClick={props.eventClick}>{props.item2}</li>
                    </ul> 
                </nav>
                <div className="nav-logo-wrap">
                    <img src={logo} alt="logo" className="img"/>
                </div>
                <nav className="nav-menu-right">
                    <ul>
                        <li onClick={props.eventClick}>{props.item3}</li>
                        <li onClick={props.eventClick}>{props.item4}</li>
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