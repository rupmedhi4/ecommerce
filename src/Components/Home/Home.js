import React, { useContext } from 'react'
import './Home.css'
import { AppContext } from '../Context/AppContext'

export default function Home() {

    const {productsArr,addHandler} = useContext(AppContext)

    return (
        <div >
            <div className='header'>
                <h1 >The Generics</h1>
            </div>

            <span className='music'>MUSIC</span>
            <div className='cart-container'>
                {productsArr.map((item, index) => (
                    <div key={index} className='cart'>
                        <div>
                            <div className='cart-album'>
                                <span > {item.title}</span>
                            </div>
                            <div>
                                <img src={item.imageUrl} alt='img' />
                            </div>
                            <div className='cart-btn'>
                                <span>${item.price}</span>
                                <button onClick={()=>addHandler(item.id)}>Add to cart</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <button className='see-all-cart-btn'>See the cart</button>



        </div>
    )
}
