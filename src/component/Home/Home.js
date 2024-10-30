import React, { Fragment,useEffect } from 'react'
import {CgMouse} from "react-icons/cg"
import "./Home.css"
import Product from "./Product.js"
import MetaData from "../layout/MetaData"
import {getProduct} from "../../action/productAction.js"
import {useDispatch} from "react-redux"



const product={
    name:"my Img",
    images: [{ url:"https://i.ibb.co/DRST11n/1.webp"}],
    // images :[{url:img}] ,className:"ali",
    price:"399",
  _id:"shah@ali.com"
}

const Home = () => {

    const dispatch=useDispatch()

    useEffect(()=>{
      dispatch(getProduct())
    },[dispatch])


  return (
    <Fragment>
    <MetaData title="ECOMMERCE"/>

    <div className="banner">
        <p>Welcome to my Ecommerce Website</p>
        <h1>Amazing products are given below</h1>
        <a href="#container">
        <button>Scroll <CgMouse/></button>
        </a>

    </div>
 
    <div className="feature">Feature Product</div>

    <div className="container" id='container'>
        <Product product={product}/>
              {/* <Product product={product} /> */}
              {/* <Product product={product} />
              <Product product={product} /> */}

              {/* <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} /> */}
             
              
              
             
    </div>

    </Fragment>
  )
}

export default Home
