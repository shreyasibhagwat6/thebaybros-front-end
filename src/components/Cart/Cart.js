import React, { useParams, useState, useEffect } from 'react'
import { BsPlus } from 'react-icons/bs'
import { HiOutlineMinusSm } from 'react-icons/hi';
import './Cart.scss'

export const Cart = () => {

    const image = "http://localhost:8080/image/jeans_jeans1.jpg";

    const [number, setNumber] = useState(1);

    const addOne = () => {
        setNumber(number+1);
    }

    const minusOne = () => {
        setNumber(number-1)
    }

  return (
    <div>
        <div className='cart'>My Bag</div>
        <div className='cart__header'>
            <p>PURCHASE(1)</p>
            <p>WISHLIST</p>
        </div>
        <div>Sold by The Bay</div>
        <div className= 'cart__cart'>
            <img className='cart__img' src={image}></img>
            <div className='cart__info'>
                <h5>Free People</h5>
                <p>izzy Mid-Rise Raw Edge Flare Jeans</p>
                <p>THE WEST, 26</p>
                <p>$ 198</p>
                <p>Return Policy</p>
                <div className='qty'>
                    <HiOutlineMinusSm onClick={minusOne} className='qty__minus' fontSize='2rem'/>
                    <div className='qty__item'>{number}</div>
                    <BsPlus onClick={addOne} className='qty__plus' fontSize='2rem'/>
                </div>
                <div>$198</div>
            </div>
        </div>
        <div className='cart__ship'>
            <div className='cart__one'>
                <input className='cart__input' type="radio"></input>
                <label className='cart__label'>Ship It</label>
            </div>
            <div className='cart__two'>
                <input className='cart__input' type="radio"></input>
                <label className='cart__label'>Free pickup in store</label>
            </div>
        </div>
        <div className='cart__promo'>
            <div className='cart__code'>
                <button className='cart__button'>+ PROMO CODE</button>
            </div>
            <p className='cart__total'>Subtotal: $198.00</p>
        </div>
        <button className='cart__checkout'>CHECKOUT</button>
    </div>
  )
}

export default Cart;

