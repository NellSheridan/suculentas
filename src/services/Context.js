import React, { createContext, useState } from 'react';

export const Context = createContext();

export const DataProvider = ({ children }) => {
    const [ cart, setCart ] = useState([])

    const addCart = (item) => {
        setCart([...cart, item]);
    }

    const allProductsToBuy = () => cart

    const deleteItem = (itemToRemove) => {
        let newArray = cart.filter( item => item.id !== itemToRemove.id);
        setCart(newArray)
    }

    const clearCart = () => setCart([]);

    return <Context.Provider value= {{ addCart, allProductsToBuy, deleteItem, clearCart }}>
        { children }
    </Context.Provider>
}
