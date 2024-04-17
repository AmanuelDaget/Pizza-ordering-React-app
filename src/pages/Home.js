import { imageData } from "../images/imageAssets";
import footerImage  from '../images/logo/shef.jpg';
import { orderPrice } from "../images/imageAssets";
import "./home.css";
import { UserContext } from "../App"
import { createContext, useContext, useState } from "react";
import { FoodItem } from "../components/FoodItem";
import { StoreContext } from "../components/StoreContext";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube,FaWhatsapp} from 'react-icons/fa';

export const OrderContext = createContext({});

export function Home() {
   const {username,password} = useContext(UserContext);

   
  return (
    <div className="allHomeElements">
       <div className="first-container">
          <div className="first-container-contents">
            <h1> Order your favourite food here.</h1>
            <p> Choose from diverse food items to enjoy your meal and have a good day</p>
            <button> View Menu </button>
          </div>
       </div>
       <div className="second-container" >
           <h3 > Explore our menu </h3>
           <p> Choose from diverse foods we present to you with greate qulity and low price .</p>
           <div className="menu_items" >
              {imageData.map((food) =>{
                 return(
                    <div className="eachFood">
                       <img src={food.img} />
                       <p>{food.name}</p>
                    </div>
                 )
              })}
           </div>
       </div>
       <div className="third-container" >
          <h2>Top dishes</h2>
          <div className="order_price" >
              {orderPrice.map((order) =>{
                 return (
                     <OrderContext.Provider value={{id:order.id,foodName:order.name,price:order.price,image:order.img}} >
                         <StoreContext />
                     </OrderContext.Provider>

                 )
                 
                 
              })}
           </div>
       </div>
       <div className="footer">
         <hr className="horizontalLine"/>
         <div className="footerContent" >
            <div className="footerText">
            <img src={footerImage} className="footerImage" /> 
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Accusantium, molestiae reprehenderit eius, veritatis voluptates,
                   nisi sequi perspiciatis ex numquam ducimus suscipit saepe asperiores.
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Accusantium, molestiae reprehenderit eius, veritatis voluptates,
                   nisi sequi perspiciatis ex numquam ducimus suscipit saepe asperiores.
                    Necessitatibus incidunt libero rem, perferendis optio ullam.
               </p>
            </div>
            <div className="linkSection">
                <h2> Useful Links</h2>
                <div className='allLinks'>
                  <a href="/">Home</a>
                  <a href="./cart">Cart</a>
                  <a href="./admin">Contact us</a>
                  <a href="./login">Login</a>
                </div>
            </div>
            
         </div>
         <div className="socialIcons" >
               <h2>Follow Us</h2>
               <div className="allIcons"> 
                  <a href="www.facebook.com" ><FaFacebook className="icons facebook" /> </a>
                  <a href="www.twitter.com" ><FaTwitter className="icons twitter" /> </a>
                  <a href="www.instagram.com" ><FaInstagram className="icons instagram" />  </a>
                  <a href="www.whatsapp.com" ><FaWhatsapp className="icons whatsapp" />  </a>
                  <a href="https://www.youtube.com/channel/UCYeLNPiJbnE7YNhSnp6PrwA" ><FaYoutube className="icons youtube" /> </a>
               </div>
            </div>
         <div className="copyright">
            <h3> Copyright &copy; &nbsp; 2024. &nbsp;&nbsp; All rights reserved ! </h3>
         </div>
       </div>
    </div>
  )
}
