import React, { useState, useEffect, useContext }from 'react';
import { useParams } from 'react-router'; 
import ItemDetail from './ItemDetail'
import Loader from '../Loader/Loader'
import { database } from '../../firebase/firebase';

const ItemDetailContainer = () => {
  
    const [ itemToDisplay, setItemToDisplay] = useState({});

    const { id } = useParams();

    const getSelectItem = () => {
        const plants = database.collection('plants').doc(id);
        plants.get()
        .then((query) => setItemToDisplay(query.data()))
    };
    
    useEffect(() => {
        setItemToDisplay();
        getSelectItem();
    }, [id]);

    return !itemToDisplay ? <Loader /> : <ItemDetail itemToDisplay={itemToDisplay} />
}

export default ItemDetailContainer;