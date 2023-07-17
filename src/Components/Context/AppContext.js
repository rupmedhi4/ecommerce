import React from "react";
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
        ]
        

    const value = {
        productsArr
    }

    return (
        <AppContext.Provider value={value}>
               {children}
        </AppContext.Provider>
    ) 
}