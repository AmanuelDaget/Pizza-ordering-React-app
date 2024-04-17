import React, { useEffect , useState,useContext} from 'react'
import { Order } from '../pages/Order';
import {  StoreDataContext } from './StoreContext';
import { OrderContext } from '../pages/Home';

export const FoodItem = () => {
    let {id,foodName,price,image} = useContext(OrderContext);
    let { cartItems,addToCart,removeFromCart } = useContext(StoreDataContext);
  return (
        <div className="order">
            <img src={image} alt='food'/>
            <div className="nameAndButton" >
                <p>{foodName}</p>
                {cartItems[id] > 0 && <> <button className="removeFromCart" onClick={() => removeFromCart(id)}>-</button>
                <div className="quantity">{cartItems[id] > 0 && cartItems[id]}</div> </>}
                <button className="addToCart" onClick={() => addToCart(id)}>+</button>
            </div>
            <p>${ price }</p>
        </div>
        
  )
}
