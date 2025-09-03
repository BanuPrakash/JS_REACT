import React from 'react'
// import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
// import { useContext } from 'react';
// import { CartContext } from '../context/CartContextProvider';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice';

export default function ProductCard({ product }) {
  // let {addToCart} = useContext(CartContext)

  let dispatch = useDispatch();

  let { title, price, category, image } = product;
  return (
    <div className='col-md-4 mb-3'>
      <Card style={{ width: '18rem' }}>
        <Link to={`/details/${product.id}`} as={Link}>
          <Card.Img variant="top" src={image} />
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {category}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{category} | ${price}</small>
          {/* <Button variant="primary" className='float-end'>Buy Now</Button> */}
          &nbsp; &nbsp;
          <FontAwesomeIcon icon={faHeart} color='red' />
          &nbsp; &nbsp;
          <FontAwesomeIcon
            icon={faCartShopping}
            color='blue'
            onClick={() => dispatch(addToCart({
              ...product,
              qty: 1,
              amount: price
            }))}
          />
        </Card.Footer>
      </Card>
    </div>

  )
}
