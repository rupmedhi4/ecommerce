import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {

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
            id: 4,
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ];

    const [cartArr, setCartArr] = useState([])
    const [portal, setPortal] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
      let totalPriceSum = 0;
      cartArr.map((data) => {
        totalPriceSum += data.price;
      });
      setTotalPrice(totalPriceSum);
    }, [cartArr]);
    

    const addHandler = (id) => {
        if (cartArr.length === 0) {
            const arr = productsArr.find((product) => {
                return product.id === id
            })
            setCartArr([...cartArr, arr])
            return;
        } else {
            const duplicate = cartArr.find((item) => item.id === id);
            if (duplicate) {
                alert('Already added to cart');
            } else {
                const arr = productsArr.find((product) => {
                    return product.id === id
                })
                setCartArr([...cartArr, arr])
            }
        }

    }

    const removeHandler = (id)=>{
        const filteredArr = cartArr.filter((item)=> item.id != id)
        setCartArr([...filteredArr])
        alert("Item Remove succesfully")
    }
    
    const clearCart = ()=>{
        setCartArr([])
        alert("thanks for purshase")
    }

    const value = {
        productsArr,
        addHandler,
        cartArr,
        portal,
        setPortal,
        removeHandler,
        totalPrice,
        clearCart
        

    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}