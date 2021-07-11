import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
    return (
        <main className="main-wrapper">
            <h1>{props.greeting.title}</h1>
            <h2>{props.greeting.subtitle}</h2>
            <section>
                {props.greeting.description}
            </section>
            <ItemCount min={1} max={10}/>
        </main>
    )
}

export default ItemListContainer;