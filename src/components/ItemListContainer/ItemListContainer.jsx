import React from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';

const ItemListContainer = (props) => {
    return (
        <main className="main-wrapper">
                <h1>{props.greeting.title}</h1>
                <ItemList />
        </main>
    )
}

export default ItemListContainer;

