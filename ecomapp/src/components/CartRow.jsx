import React, { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'

export default function CartRow({ product }) {
  let { increment } = useContext(CartContext);
  let {id, title, image, price, amount, qty} = product; // cartItem
  return (
    <div className='row'>
      <div className='col-md-2'>
        <img src={image} alt={title} height='50px' />
      </div>
      <div className='col-md-2'>
        {title}
      </div>
      <div className='col-md-4'>
         <button className='btn btn-info btn-sm'>-</button>
          &nbsp; {qty} &nbsp;
         <button className='btn btn-info btn-sm' onClick={() => increment(id)}>+</button>
      </div>
      <div className='col-md-2'>
        Price : {price}
      </div>
      <div className='col-md-2'>
        Amount : {amount}
      </div>
    </div>
  )
}
