import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom'

export default function Details() {
  let [product, setProduct] = React.useState(null);
  // useSearchParams() --> query parameters --> ?key=value&key2=value2
  // useParams() --> path parameters --> /details/1 , /details/2
  // http://localhost:5173/details/2
  let { id } = useParams(); // PathParameter
  // componentDidUpdate() --> api calls for dependent data
  React.useEffect(() => {
    axios.get(`http://localhost:1234/products/${id}`)
      .then(response => setProduct(response.data));
  }, [id]);

  return (
    <div>
      <h1>Details of {id}</h1>
      <image src={product?.image} alt={product?.title} height='200px' />
      <h3>{product?.title}</h3>
      <p>{product?.description}</p>
      <h3>Price : ${product?.price}</h3>
      <h3>Category : {product?.category}</h3>
      <h3>Rating : {product?.rating.rate} ({product?.rating.count} reviews)</h3>
    </div>
  )
}
