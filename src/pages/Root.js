import "../App.css";
import logo from "../images/logo/logo2.jpg";
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink,Outlet } from "react-router-dom";
import { auth } from '../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { UserContext } from "../App";
import { FaCartPlus } from 'react-icons/fa';

export const Root= () => {
  const [user] = useAuthState(auth);
  const {username,password,setUserData}=useContext(UserContext);
  const menuRef = useRef(null);
  const closeMenuRef = useRef(null);

  const logout = () => {
    auth.signOut();
    setUserData({username:"",password: ""});
  }
  let myStyle = {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'start',
 }
  
  const displayMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.display =  "flex";
      menuRef.current.style.flexDirection= 'column';
      menuRef.current.style.justifyContent= 'start';
      closeMenuRef.current.style.display='block';
    }
   
  }
  const closeMenuBar = () => {
     document.getElementById("menuItems").style.display = 'none';
     document.getElementById("closeMenuBar").style.display = 'none';
  }
  
     return (
        <>
          <div className="allNavs">
             <img src={logo} className="logo" />
             <div className="navlinks">
                  <button className="hambergerMenu" onClick={displayMenu}>☰</button>
                  <button ref={closeMenuRef} className='closeMenuBar' id='closeMenuBar'  onClick={closeMenuBar} > &times; </button>
                  <div ref={menuRef} className="menuItems" id="menuItems" >
                      <NavLink className="navLink"  to="/" > Home </NavLink>
                      { ( user?.displayName || (username !== "" && password !== ""))  && 
                        <>
                          <NavLink className="navLink" to="/order" > Order </NavLink>
                          <NavLink className="navLink" to="/myorders" > My orders </NavLink>
                        </>
                      }
                      <NavLink className="navLink"  to="/admin" > Admin </NavLink>
                      <NavLink className="navLink" to="/cart" > <FaCartPlus className="cartIcon" /> </NavLink>
                      { ( user || (username !== "" && password !== "") ) ? <NavLink to="/login" className="navLink" onClick={logout}> Logout</NavLink> : <NavLink className="navLink" to="/login" > Login </NavLink> }
                  </div>
              </div>
         </div>
         <div>
             <Outlet />
         </div>
      </>
   )
  }
  