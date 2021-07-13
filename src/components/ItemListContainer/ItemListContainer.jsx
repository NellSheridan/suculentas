import React from 'react';
import './ItemListContainer.css';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';

const ItemListContainer = (props) => {
    return (
        <main className="main-wrapper">
            <h1>{props.greeting.title}</h1>
            {/* <h2>{props.greeting.subtitle}</h2> */}
            {/* <section>
                {props.greeting.description}
            </section> */}
            {/* <ItemCount min={1} max={10}/> */}
            <ItemList></ItemList>
        </main>
    )
}

export default ItemListContainer;