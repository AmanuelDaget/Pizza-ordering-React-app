import React, { useContext, useEffect } from 'react'
import { createContext,useState } from 'react'
import { orderPrice } from '../images/imageAssets';
import { FoodItem } from './FoodItem';
import { UserContext } from '../App';

export const StoreDataContext = createContext({
    addToCart: () => {},
    removeFromCart: () => {},
});

export const StoreContext = (props) => {
   let { cartItems ,setCartItems,totalPrice,setTotalPrice} = useContext( UserContext);

   const addToCart=(itemId) => {
    // alert(cartItems.map((item) => ite))
      if (!cartItems[itemId]) {
          setCartItems((prev) => ({...prev,[itemId]:1}));
          setTotalPrice(  totalPrice ? totalPrice + 1 * orderPrice[itemId - 1].price : 1 * orderPrice[itemId - 1].price );

    //   console.log(totalPrice )

      }else{
         setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}));
         setTotalPrice( totalPrice + orderPrice[itemId - 1].price );
    //   console.log(totalPrice)
       
      }
   }
   const removeFromCart=(itemId) => {
       if (!cartItems[itemId] || cartItems[itemId]===1 ) {
           setCartItems((prev)=>({...prev,[itemId]:0}));
           setTotalPrice( totalPrice -  orderPrice[itemId - 1].price );
       }else{
         setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}));
         setTotalPrice( totalPrice -  orderPrice[itemId - 1].price );
       }
   }
   
   useEffect(()=>{
    console.log(cartItems)

   },[cartItems])
 
    return (
        <StoreDataContext.Provider value={{cartItems,addToCart,removeFromCart}} >
            <FoodItem />
        </StoreDataContext.Provider>
  )
}
