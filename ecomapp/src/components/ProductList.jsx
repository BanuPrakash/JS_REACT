import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';

import ProductCard from './ProductCard';

export default function ProductList() {
  let [products, setProducts] = useState(null);
  // componentDidMount
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=5")
    .then(response => setProducts(response.data));
  }, []);
  return (
    <div>
      {
        products && products.map(product => <ProductCard  
            key ={product.id} product={product}/>)
      }
    </div>
  )
}
