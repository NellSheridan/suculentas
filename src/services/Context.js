import React, { createContext, useState } from 'react';

export const Context = createContext();

export const DataProvider = ({ children }) => {
    const [ cart, setCart ] = useState([])

    const addCart = (item) => {
        setCart([...cart, item]);
    }

    return <Context.Provider value= {{ addCart }}>
        { children }
    </Context.Provider>
}
