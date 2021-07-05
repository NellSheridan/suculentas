import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    console.log(props);
    return (
        <main className="main-wrapper">
            <h1>{props.greeting.title}</h1>
            <h2>{props.greeting.subtitle}</h2>
            <section>
                {props.greeting.description}
            </section>
        </main>
    )
}

export default ItemListContainer;