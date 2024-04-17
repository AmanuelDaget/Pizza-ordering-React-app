import "./Cart.css";
import { UserContext } from "../App";
import { useContext, useEffect } from "react";
import { orderPrice } from "../images/imageAssets";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export function Cart() {
   const [user] = useAuthState(auth);
  let {username,password,setUserData, cartItems,setCartItems,totalPrice,setTotalPrice } = useContext( UserContext );
   const  navigate = useNavigate();

   const removeOrder= (itemId,price) => {
      setCartItems((prev) => ({...prev,[itemId]:0}));
      setTotalPrice((prevPrice) => (totalPrice - price))
   }
   const continouToPay = () => {
      if (totalPrice > 0) {
         {user || username ? navigate("../order") : alert("Sign in to continuo !") }
      }else{
         alert(" Please choose at least one food item to proceed to pay !");
      }
   }
    return (
      <div className="cart">
         <div className="items-list">
            <div className="items-list-header">
               <p > Item </p>
               <p> Title </p>
               <p> Quantity </p>
               <p> Price </p>
               <p className="a"> Remove </p>
            </div>
            <div>
              {orderPrice.map((asset,key) => {
               
                  return (
                      cartItems[asset.id] > 0  && (
                        <div className="eachOrderedFood">
                           <img src={ asset.img } />
                           <p> { asset.name } </p>
                           <p> { cartItems[asset.id] } </p>
                           <p> { cartItems[asset.id] * asset.price } </p>
                           <button className="removeItemFromCart" onClick={() => removeOrder(asset.id,cartItems[asset.id] * asset.price)} > &times; </button>
                        </div>
                      )
                  )
              })}
            </div>
         </div>
         <div className="total">
            <h2> Total </h2>
            <div className="priceOfGoods">
               <p>Price of goods</p>
               <p className="price">${totalPrice}</p>
            </div>
            <hr />
            <div className="deliveryFee">
               <p>Delivery Fee</p>
               <p className="deliveryPrice">${totalPrice !== 0 ? 100 : 0}</p>
            </div>
            <hr />
            <div className="totalPrice">
               <p>Total Price</p>
               <p className="totalMoney">${totalPrice !== 0 ? totalPrice  + 100: 0}</p>
            </div>
            <button className="continuo" onClick={continouToPay}> Continuo </button>
         </div>
      </div>
    )
  }