import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../Item/Item'

const ItemList = () => {
  const itemsArray = [
    {
      id: 0,
      title: 'Lavanda morada en maceta 28cm',
      img: require('../../../assets/products/126591.jpg'),
      category: 1,
      price: 6.50,
      stock: 10
    },
    {
      id: 1,
      title: 'Suculenta cola de burro en maceta 12cm',
      img: require('../../../assets/products/126616.jpg'),
      category: 1,
      price: 5.70,
      stock: 5
    },
    {
      id: 2,
      title: 'Suculenta árbol de Jade en maceta 9cm',
      img: require('../../../assets/products/126636.jpg'),
      category: 1,
      price: 4.60,
      stock: 9
    },
    {
      id: 3,
      title: 'Suculenta Calanchoe en maceta 9.5cm',
      img: require('../../../assets/products/126624.jpg'),
      category: 2,
      price: 3.80,
      stock: 6
    },
  ];

  const [list, setList] = useState([]);

  const getItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(itemsArray), 2000);
    });
  };

  useEffect(() => {
    getItems().then(result => setList(result));
  }, []);

    return (
      <ul className="list-container">
         { list.map(el => (
           <li key={el.id} className="list-item">
             <Item item={el}/>
           </li>    
            ))};
      </ul>
       
    )
}

export default ItemList;