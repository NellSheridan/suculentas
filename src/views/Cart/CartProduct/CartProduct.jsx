import React from 'react';
import './CartProduct.scss'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartProduct = ({ item }) => {
    return (
        <div className="card">
            <div className="card-product__container">
                <div className="card-product__image">
                    <img src={item?.image} alt={item?.name}/>
                </div>
                <div className="card-product_description">
                    <div className="name">{ item.name }</div>
                    <div>Codigo: { item.code }</div>
                </div>
                <div>
                    <div>Internet: S/ { item.price }</div>
                    <div>Descuento: S/ { item.price }</div>
                </div>
                <div>
                    Cantidad: { item.quantity}
                </div>
                <div className="icon-trash__container">
                    <button><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
