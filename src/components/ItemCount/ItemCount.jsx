import React, {useState} from 'react';
import './ItemCount.css';

const ItemCount = (props) => {
    const [count, setCount] = useState(1);

    const buttonIncreaseQuantity = () => {
        setCount(count + 1);
    }

    const buttonDecreaseQuantity = () => {
        setCount(count - 1);
    }

    return (
        <div className="item-count-wrapper">
            <button disabled={count == props.min} onClick={buttonDecreaseQuantity}>-</button>
            <span>{ count }</span>
            <button disabled={count == props.max} onClick={buttonIncreaseQuantity}>+</button>
        </div>
    )
}

export default ItemCount;