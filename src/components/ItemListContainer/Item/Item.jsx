import React from 'react';
import './Item.css';
import ItemCount from '../../ItemCount/ItemCount';

const Item = ({ element }) => {
    const message = () => alert('Esta sección esta en construccion!!');
    return (
        <div className="card">
            <div onClick={message} className="card-body">
                <img className="card-image" src={element.img.default} alt={element.title}/>
                <h3>{element.title}</h3>
                <p className="card-price"><em>S/</em> {element.price}</p>
            </div>
            <div className="card-footer">
                <ItemCount min={1} max={element.stock}/>
                <button className="button-add">Agregar</button>
            </div>
        </div>
    )
}

export default Item;