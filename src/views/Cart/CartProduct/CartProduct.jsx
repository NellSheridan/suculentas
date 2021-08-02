import React from 'react';
import './CartProduct.scss'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartProduct = ({ item }) => {
    console.log(item);
    return (
        <div className="card">
            <div className="card-product__container">
                <div className="card-product__image">
                    <img src={item?.image} alt={item?.name}/>
                </div>
                <div className="card-product_description">
                    <p className="name">{ item.name }</p>
                    <p>Codigo: { item.code }</p>
                </div>
                <div>
                    <p>Internet: S/ { item.price }</p>
                    <p>Descuento: S/ { item.price }</p>
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
