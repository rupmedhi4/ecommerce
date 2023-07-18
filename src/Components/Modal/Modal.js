import React from 'react'
import { TiDeleteOutline } from 'react-icons/ti';
import './Modal.css'

export default function Modal() {
  return (
    <div className='main__container'>
        <div className='icon'>
             <TiDeleteOutline />
        </div>
     
      <h2 className='modal__cart'>CART</h2>
      <ul className='ul__list'>
        <li>ITEM</li>
        <li>PRICE</li>
        <li>QUANTITY</li>
      </ul>
      <div className='total'>
         <span>Total $ 9</span>
      </div>
     
     <div className='purchaseBtn'>
        <button className='btn'>PURCHASE</button>
     </div>
      
    </div>
  )
}
