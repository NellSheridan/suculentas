import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom'
import Counter from '../../Counter/Counter';

const Item = ({ item }) => {
    return (
        <div className="card">
            <div className="card-body">
                <Link to={`/productos/${item.id}`}>
                    <img className="card-image" src={item.image} alt={item.name}/>
                </Link>
                <h3>{item.name}</h3>
                <p className="card-price"><em>S/</em> {item.price}</p>
            </div>
            <div className="card-footer">
                <Counter min={1} max={item.stock}/>
                <button className="button-add">Agregar</button>
            </div>
        </div>
    )
}

export default Item;