import React from 'react';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';
import './NavBar.scss';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="Nav">
            <div className="Nav__container">
                <Link to="/" className="Nav__brand">
                    <img src={ logo } alt="logo" className="Nav__logo" />
                </Link>
                <div className="Nav__right">
                    <ul className="Nav__item-wrapper">
                        <li className="Nav__item">         
                            <Link className="Nav__link" to="/productos">Tienda</Link>
                        </li>
                        <li className="Nav__item">
                            <Link className="Nav__link" to="/conócenos">Quiénes somos</Link>
                        </li>
                        <li className="Nav__item">
                            <Link className="Nav__link" to="/blog">Blog</Link>
                        </li>
                        <li className="Nav__item">
                            <Link className="Nav__link" to="/contacto">Contactanos</Link>
                        </li>
                        <li className="Nav__item">
                            <Link className="Nav__link" to="/bolsa">
                                <img src={ cart } alt="cart" className="Nav__icon" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;