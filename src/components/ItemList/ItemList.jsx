import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from './Item/Item'

const ItemList = ({ displayItems }) => {
    return (
      <ul className="list-container">
         { displayItems.map(el => (
           <li key={el.id} className="list-item">
             <Item item={el}/>
           </li>    
            ))};
      </ul>
       
    )
}

export default ItemList;