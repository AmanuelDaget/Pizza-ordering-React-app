import './login.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { SocialIcon } from 'react-social-icons';
import { auth, provider,db } from '../config/firebase.js';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {  useContext } from 'react';
 import { UserContext } from "../App.js";
import { collection, doc, getDocs } from 'firebase/firestore';

export function Login() {
  const {username,password,setUserData} =useContext(UserContext);
  const navigate=useNavigate();

  const signInWithGoogle = async () => {
     await signInWithPopup(auth,provider);
     navigate("/");
  }
  const schema= yup.object().shape({
       username: yup.string().required("Username is required ..."),
       password: yup.string().min(5).required("Password is required ...")
  });
  const {register,handleSubmit,formState:{errors}}=useForm({
      resolver: yupResolver(schema),
  });

  const loginRef = collection(db,'users');
  const onSubmit = async (data) =>{
       let userFound = false ;
      const snapshots = await getDocs(loginRef);
      snapshots.forEach((user) => {
        if(user.data().username === data.username && user.data().password === data.password ){
          userFound = true ;
          setUserData({username: user.data().username , password : user.data().password});
          navigate("/");
         
        }
      });
      if (!userFound) {
        alert("Incorrect username or password !");
        userFound = false;
     }
  }
  return (
    <>
    <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
      <h2 className='Login'> Log in </h2>
      <label> Username</label>
      <input type='text' className='username' {...register("username")}/>
      <p className='error'>{errors.username?.message}</p>
      <label> Password</label>
      <input type='password' className='password' {...register("password")}/>
      <p className='error'>{errors.password?.message}</p>
      <button type='submit'> Login </button>
      <div className='otherButtons'>
        <a href='' className='forgetPassword'> Forget Password ?</a>
        <a href='../SignUp' className='gotoSignUp'> Sign Up</a>
      </div>
      <div class="social">
          <div class="google" onClick={signInWithGoogle}><SocialIcon  network='google' bgColor='white' fgColor='red'/> Sign in with Google</div>
      </div>
    </form>
    </>
  )
}
