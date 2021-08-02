import React from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './EmptyCart.scss'

const EmptyCart = () => {
    return (
        <div className="Empty__container">
            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '6rem'}}/>
            <h2>¡Tu carrito de compras esta vacío!</h2>
            <p>
            Aún no has agregado productos a tu carrito de compras. Visita nuestra página principal y descubre todo lo que tenemos para ti.
            </p>
        </div>
    );
}

export default EmptyCart;
