import React from 'react'
// import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';

export default function ProductCard({ product }) {
  let { title, price, category, image } = product;
  return (
    <div className='col-md-4 mb-3'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
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
          <FontAwesomeIcon icon={faCartShopping} color='blue' />
        </Card.Footer>
      </Card>
    </div>

  )
}
