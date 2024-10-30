import React, { Fragment } from 'react'
import "./Cart.css"
import CardItems from "./CardItems"

const Cart = () => {

    const item = {
        product: "apple",
        price: 300,
        name: "red",
        quantity: 1,
        image: "https://i.ibb.co/DRST11n/1.webp"
    }



    return (
        <Fragment>
            <div className='cartpage'>
                <div className="carthead">
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
                <div className="container">
                    <CardItems item={item} />
                    <div className="input">
                        <button>-</button>
                        <input type="number" value={item.quantity} readOnly />
                        <button>+</button>
                    </div>
                    <p className="subtotal">{`${item.price * item.quantity}`}</p>
                </div>
                <div className="container">
                    <CardItems item={item} />
                    <div className="input">
                        <button>-</button>
                        <input type="number" value={item.quantity} readOnly />
                        <button>+</button>
                    </div>
                    <p className="subtotal">{`${item.price * item.quantity}`}</p>
                </div>
                <div className="container">
                    <CardItems item={item} />
                    <div className="input">
                        <button>-</button>
                        <input type="number" value={item.quantity} readOnly />
                        <button>+</button>
                    </div>
                    <p className="subtotal">{`${item.price * item.quantity}`}</p>
                </div>

                <div className="profit">
                    <div></div>
                    <div className="profitcart">
                        <p>Gross Total</p>
                        <p>{`$900   `}</p>
                    </div>
                    <div></div>
                    <div className="check">
                        <button >Check out</button>
                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default Cart
