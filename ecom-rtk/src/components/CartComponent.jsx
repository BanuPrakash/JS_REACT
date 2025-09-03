import React from 'react'
// import { CartContext } from '../context/CartContextProvider'
import { Button } from 'react-bootstrap'
import CartRow from './CartRow';

export default function CartComponent() {
  // let { cartItems, total, clearCart } = React.useContext(CartContext)
  return (
    <div>
      {/* {
        cartItems.map(item => <CartRow product={item} key={item.id}/>)
      } */}
      <div className='row'>
        <div className='col-md-8'>&nbsp;</div>
        <div className='col-md-4'>Total {0}</div>
      </div>
      <div className='row'>
        <div className='col-md-8'>&nbsp;</div>
        <div className='col-md-4'>
          <Button variant='success' >Checkout</Button>
        </div>
      </div>
    </div>

  )
}
