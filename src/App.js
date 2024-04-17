import './App.css';
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { Cart } from "./pages/Cart";
import { MyOrders } from './pages/MyOrders';
import { Login } from "./pages/Login";
import { Root } from "./pages/Root";
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from 'react-router-dom';
import { createContext, useState } from 'react';
import { FoodItem } from './components/FoodItem';
import { StoreContext } from './components/StoreContext';
import { SignUp } from './pages/signUp';
import { Admin } from './pages/Admin';

export const UserContext = createContext(null);

function App() {
   let [cartItems,setCartItems] = useState({});
   const [userInfo,setUserData]=useState({username:"" , password: "" });
   let [totalPrice,setTotalPrice]=useState(0);
   let [deliveryStatus,setDeliveryStatus] = useState("No Request yet...");

   const router = createBrowserRouter(
      createRoutesFromElements(
            <Route path='/' element={<Root />} >
               <Route index element={<Home />} />
               <Route path='/order' element={<Order />} />
               <Route path='/myorders' element={<MyOrders />} /> 
               <Route path='/cart' element={<Cart />} />
               <Route path='/login' element={<Login />} />
               <Route path='/signup' element={<SignUp />} />
               <Route path='/fooditem' element={<FoodItem />} />
               <Route path='/storecontext' element={<StoreContext />} />
               <Route path='/admin' element={<Admin />} />
               <Route path='*' element={<h2> Page not found...</h2>} />
            </Route>
        
      )
   );
  return (
    <div className="App">
       <UserContext.Provider value={{username:userInfo.username,password:userInfo.password,setUserData,cartItems,setCartItems,totalPrice,setTotalPrice,deliveryStatus,setDeliveryStatus}}>
          <RouterProvider router={router} />
       </UserContext.Provider>
      
    </div>
  );
}


export default App;

 