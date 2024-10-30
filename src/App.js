
import './App.css';
import Header from "./component/Header/Header"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import WebFont from "webfontloader"
import React from 'react';
import Footer from "./component/Footer/Footer.js"
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/productDetail"
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import Login from './component/login/login.js';
import UserOptions from "./component/Header/UserOptions.js"
import { useSelector } from 'react-redux';
import Cart from "./component/Cart/Cart"


function App() {

  const user= useSelector((state)=> state.user)
  const isAuthenticated= useSelector((state)=> state.user.isAuthenticated)

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, [])

  return (
    <>
      <BrowserRouter>
       <Header />
    {isAuthenticated && <UserOptions user={user}/>}
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product/:id' element={ProductDetails} />
    <Route path='/product' element={<Products/>}/>
          <Route path="/products/:keyword" component={Products} />


          <Route path='/search' element={<Search/>} />
          <Route path='/login' element={<Login/>}/>
          {/* <Route path='/password/forget' element={<ForgetPassword/>}/> */}
          <Route path='/cart' element={<Cart/>}/>
   </Routes>


      <Footer /> 

      </BrowserRouter>
      
    </>

  );
}

export default App;
