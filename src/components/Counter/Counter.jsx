import React from 'react';
import './Counter.scss';

const Counter = ({ min, count, setCount, max }) => {

    const buttonIncreaseQuantity = () => {
        count < max && setCount(count + 1);
    }

    const buttonDecreaseQuantity = () => {
        count > min && setCount(count - 1);
    }

    return (
        <div className="item-count-wrapper">
            <button disabled={count == min} onClick={buttonDecreaseQuantity}>-</button>
            <span>{ count }</span>
            <button disabled={count == max} onClick={buttonIncreaseQuantity}>+</button>
        </div>
    )
}

export default Counter;