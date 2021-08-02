import React from 'react';
import './Item.scss';
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    return (
        <div className="card">
            <Link to={`/producto/${item.id}`}>
                <img className="card-img-top" src={item.image} alt={item.name}/>
            </Link>
            <div className="card-body w-h">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p><em>S/ </em>{item.price}</p>
            </div>
        </div>
    )
}

export default Item;