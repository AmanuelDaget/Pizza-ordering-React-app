import React from 'react';
import "./myorders.css";
import  boxImage  from '../images/box.jpg';
import { UserContext } from '../App';
import { useContext } from 'react';
import { orderPrice } from '../images/imageAssets';
export function MyOrders() {
  let { cartItems,totalPrice , deliveryStatus,setDeliveryStatus} = useContext( UserContext );
  
  const trackOrder= () =>{
    setDeliveryStatus("Ordered");
  }

  return (
    <div className='allContainer'>
       <h1> My orders </h1>
       
            <div className='order-container'>
                <img src={boxImage} alt='order'/>
                
                        <p className='orderList'>
                           {orderPrice.map((asset,key) => {
                             return(
                                cartItems[key+1] >0  && (
                                    asset.name +"x"+  cartItems[asset.id]+" , "
                                 )
                           )
                         })
                        }
                        </p>
                        
                        
                        <p className='price' >{totalPrice}</p> 

                  <p className='status'> {deliveryStatus}</p>
                  <button className='trackOrder' onClick={trackOrder}> Track order</button>

          </div>
    </div>
  )
}
