import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import Loader from '../Loader/Loader';
import { database } from '../../firebase/firebase';

const ItemListContainer = () => {

    const [list, setList] = useState([]);

    const getProducts = () => {
        const plants = database.collection('plants');
        plants.get()
        .then((query) => setList(query.docs.map( doc => {
            return { ...doc.data(), id: doc.id }
        })))
    };

    useEffect(() => {
        getProducts();
    }, []);

    return !list.length ? <Loader /> : <ItemList displayItems={list}/>
}

export default ItemListContainer;

