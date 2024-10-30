import React from 'react'
import "./CartItem.css"
import { Link } from 'react-router-dom'

const CardItems = ({item}) => {
  return (
    <div className='carditemcard'>
    <img src={item.image} alt="else" />
    <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ${item.price}`}</span>
        <p>Remove</p>
    </div>
      
    </div>
  )
}

export default CardItems
