import React from 'react';
import './CartProduct.scss'

const CartProduct = ({ item, key }) => {
    return (
        <div className="card">
            <div className="card__image">

            </div>
            <div className="card_description">
                <p>{ item.name }</p>
                <p> Código: { key }</p>

            </div>
        </div>
    );
}

export default CartProduct;
