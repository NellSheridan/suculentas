import React from 'react';
import './ItemList.css';
import Item from './Item/Item'

const ItemList = ({ displayItems }) => {
    return (
      <section>
         <ul className="Item__container">
         { displayItems.map(item => (
           <li className="Item">
             <Item item={item} key={item.id}/>
           </li>    
            ))};
          </ul>
      </section>
    )
}

export default ItemList;