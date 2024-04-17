import React from 'react';
import "./myorders.css";
import  boxImage  from '../images/box.jpg';
import { UserContext } from '../App';
import { useContext ,useState} from 'react';
import { orderPrice } from '../images/imageAssets';
export function Admin() {
  let { cartItems,totalPrice,deliveryStatus,setDeliveryStatus } = useContext( UserContext );
   
  const changeDeliveryStatus = (status) => {
     switch (status.target.value){
        case 'out_for_delivery':
           setDeliveryStatus("Out for delivery");
           break;
        case 'delivered':
           setDeliveryStatus("Deliverd");
           break;
        case 'ordered':
           setDeliveryStatus("Ordered");
           break;
        default:
            break;
     }
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
                        <p className='showStatus' >{ deliveryStatus === "Waiting..." ? "No orders yet... " : deliveryStatus}</p>
                  <select className='deliveryStatus'  onChange={(e) =>changeDeliveryStatus(e)}>
              {deliveryStatus !== "Waiting..." && deliveryStatus !== "No Request yet..." ? 
                    <>
                        <option value="" selected></option>
                        <option value="out_for_delivery">Out for delivery</option>
                        <option value="delivered" >Delivered</option>
                        <option value="ordered">Ordered</option>
                    </>
                    : <option value="">No orders yet ...</option>
                }
                  </select>

          </div>
    </div>
  )
}
