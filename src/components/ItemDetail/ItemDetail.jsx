import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import './ItemDetail.scss'

const ItemDetail = ({ itemToDisplay }) => {

    const [ count, setCount ] = useState(1);

    const [ finished, setFinished ] = useState(false);

    const handleState = () => setFinished(!finished);

    return (
        <div className="Detail__container">
            <div className="Detail__image">
                <img src={itemToDisplay?.image} alt={itemToDisplay?.name}/>
            </div>
            <div className="Detail__description">
                <h2>{ itemToDisplay?.name }</h2>
                <p>{ itemToDisplay?.description }</p>
                { !finished ? (
                    <div className="Detail__footer">
                        <Counter 
                            min={1} 
                            count={count}
                            setCount={setCount}
                            max={itemToDisplay?.stock}
                        />
                        <button onClick={() => {
                            handleState();
                        }}> Comprar </button>
                    </div>
                ) : (
                    <Link to="/bolsa" onClick={handleState}>
                        <button onClick={handleState}>Terminar mi compra</button>
                    </Link>
                )
            }
            </div>
        </div>
    );
}

export default ItemDetail;
