import React, { useState } from 'react';
import './ItemList.scss';
import Item from './Item/Item'
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemList = ({ displayItems }) => {

  const [ temporaryList, setTemporaryList ] = useState(displayItems);

  const categories = [
    'succulents',
    'cactus',
    'others',
  ];

  const getProductsByCategory = (category) => {
    const filteredProducts = displayItems.filter(item => item.category === category);
    setTemporaryList(filteredProducts)
  }
  
    return (
      <section className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="Categories__container">
              <h3><span><FontAwesomeIcon icon={faSlidersH} /></span>Filtrar por</h3>
              <p>Categorías</p>
              <ul>
              <li onClick={() => setTemporaryList(displayItems)}>Ver todo</li>
                {
                  categories.map(category => <li onClick={() => getProductsByCategory(category)}>{category}</li>)
                }
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="Items__container">
              { temporaryList.map(item => (<div className="Item"><Item item={item} key={item.id}/></div>))};
            </div>
          </div>
        </div>
      </section>
    )
}

export default ItemList;