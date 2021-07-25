import React, {useState} from 'react';
import './ItemCount.css';

const ItemCount = (props) => {
    // Pendiente Refactorizar usando destructuracion
    console.log(props);
    // const [count, setCount] = useState(1);

    const buttonIncreaseQuantity = () => {
        props.count < props.max && props.setCount(props.count + 1);
        // setCount(count + 1);
    }

    const buttonDecreaseQuantity = () => {
        props.count > props.min && props.setCount(props.count - 1);
        // setCount(count - 1);
    }

    return (
        <div className="item-count-wrapper">
            <button disabled={props.count == props.min} onClick={buttonDecreaseQuantity}>-</button>
            <span>{ props.count }</span>
            <button disabled={props.count == props.max} onClick={buttonIncreaseQuantity}>+</button>
        </div>
    )
}

export default ItemCount;