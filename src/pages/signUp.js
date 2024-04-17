import React from 'react'
import './signup.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; 
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

export const SignUp = () => {
    const navigate = useNavigate();
   const schema = yup.object().shape({
       fName: yup.string().required("First name is required"),
       lName: yup.string().required("Last name is required"),
       email: yup.string().required("Email address is required"),
       username: yup.string().required("Username is required"),
       password: yup.string().min(6).required("Password is required"),
       confirmPassword: yup.string().oneOf([yup.ref("password"),null],"Please match the password").required("Confirm password "),

   })
   const {register,handleSubmit,formState:{ errors }} = useForm({
      resolver: yupResolver(schema),
   });
   const signUpRef = collection(db,'users');

   const formSubmit = async (data) => {
      await addDoc(signUpRef,{
          firstName: data.fName,
          lastName: data.lName,
          email: data.email,
          username: data.username,
          password: data.password,
      });
      
      navigate("../login");
   }
   
  return (
     
     <div className='signUpContainer'>
        <div className='signUpBox' >
          <div className='signUpTitle'>
             <h1>Sign Up</h1>
             <a href='../Login' className='removePopUp' >&times;</a>
          </div>
          <form className='signUpForm' onSubmit={handleSubmit(formSubmit)}>
             <input type='text' className={ errors.fName ? "errorMessages" : 'fName'} placeholder='first name' {...register("fName")} />
             <input type='text' className={ errors.lName ? "errorMessages" : 'lName'} placeholder='last name' {...register("lName")} />
             <input type='text' className={ errors.email ? "errorMessages" : 'email'} placeholder='email' {...register("email")} />
             <input type='text' className={ errors.username ? "errorMessages" : 'username'} placeholder='username' {...register("username")} />
             <input type='text' className={ errors.password ? "errorMessages" : 'password'} placeholder='password' {...register("password")} />
             <input type='text' className={ errors.confirmPassword ? "errorMessages" : 'password'} placeholder='confirm password' {...register("confirmPassword")} />
             <div className='buttons'>
                <button type='submit' className='submit'> Submit </button>
                <a href='../Login' className='cancelSignUp'> Cancel </a>
             </div>
          </form>
        </div> 
     </div>

  )

}




