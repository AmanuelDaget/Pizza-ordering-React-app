import { UserContext } from "../App";
import "./order.css";
import { useContext, useEffect } from "react";
import { imageAssets } from "../images/imageAssets";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Order() {
   let { cartItems,setCartItems,totalPrice,setTotalPrice,deliveryStatus,setDeliveryStatus } = useContext( UserContext );
   const navigate = useNavigate();


   const schema = yup.object().shape({
        fName: yup.string().required("Please enter First name"),
        lName: yup.string().required("Please enter Last name"),
        email: yup.string().required("Please enter email address"),
        city: yup.string().required("Please enter Location city"),
        kifleketema: yup.string().required("Please enter your kifleketema"),
        woreda: yup.string().required("Please enter Woreda"),
        kebele: yup.string().required("Please enter your Kebele"),
        houseNumber: yup.number().required("Please enter your house number"),
        phoneNumber: yup.number().required("Please enter Phone number"),
   });
   
   const {register,handleSubmit,formState:{errors}} = useForm({
      resolver : yupResolver(schema),
   })
   const onSubmit = (data) => {
       setDeliveryStatus("Waiting...");
       navigate("../myorders");
   }
    return (
      <div className="allDeliveryInfo">
         <div className="userInfo">
            <h1>Customer info </h1>
            <form className="customerInfoForm" >
               <div className="two-inputs">
                  <input type="text" className={errors.fName ? "errorMessages":"fName"} placeholder="first name" {...register("fName")}/>
                  <input type="text" className={errors.lName ? "errorMessages":"lName"} placeholder="last name" {...register("lName")}/>
               </div>
               <input type="email" className={errors.email ? "errorMessages":"email"} placeholder="email" {...register("email")}/>
               <div className="two-inputs">
                  <input type="text" className={errors.city ? "errorMessages":"city"} placeholder="city" {...register("city")}/>
                  <input type="text" className={errors.kifleketema ? "errorMessages":"kifleketema"} placeholder="kifleketema" {...register("kifleketema")}/>
               </div>
              
               <div className="two-inputs">
                  <input type="text" className={errors.woreda ? "errorMessages":"woreda"} placeholder="woreda" {...register("woreda")}/>
                  <input type="text" className={errors.kebele ? "errorMessages":"kebele"} placeholder="kebele" {...register("kebele")}/>
               </div>
               
               <div className="two-inputs">
                  <input type="text" className={errors.houseNumber ? "errorMessages":"houseNumber"} placeholder="houseNumber" {...register("houseNumber")}/>
                  <input type="tel" className={errors.phoneNumber ? "errorMessages":"phoneNumber"} placeholder="phone number" {...register("phoneNumber")}/>
               </div>
               
          </form>
         </div>
         <div className="totalInfo">
            <h2> Total </h2>
            <div className="priceOfGoods">
               <p>Price of goods</p>
               <p className="price">${totalPrice}</p>
            </div>
            <hr />
            <div className="deliveryFee">
               <p>Delivery Fee</p>
               <p className="deliveryPrice">${totalPrice > 0 ? 100 : 0}</p>
            </div>
            <hr />
            <div className="totalPrice">
               <p>Total Price</p>
               <p className="totPrice">${totalPrice > 0 ? totalPrice + 100 : 0}</p>
            </div>
            <button className="continuo" onClick={handleSubmit(onSubmit)}> Continuo to check to pay</button>
         </div>
      </div>
    )
  }