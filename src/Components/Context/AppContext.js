import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const productsArr = [
        {
        id: 1,
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        id: 2,
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
        id: 3,
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
        id:4,
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
        ];
    
    const [cartArr, setCartArr] = useState([{}])
    const [portal, setPortal] = useState(false)

    const addHandler = (id)=>{
     const arr = productsArr.filter((product)=>{
         return product.id === id
        })
    setCartArr([...cartArr,arr])
    console.log(cartArr)
    }

 

    const value = {
        productsArr,
        addHandler,
        cartArr,
        portal,
        setPortal
     
    }

    return (
        <AppContext.Provider value={value}>
               {children}
        </AppContext.Provider>
    ) 
}