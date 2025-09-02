import React, { useState } from 'react'
import { Button, ButtonGroup, Form, TextField, defaultTheme, Provider } from '@adobe/react-spectrum';

import axios from 'axios';
/*
// controlled Components
// too many events are happening
export default function ProductForm() {
  let [name,setName] = useState('');
  let [price, setPrice] = useState(0);
  let [category, setCategory] = useState('');

  function addProduct() {
    let product = {
        name,
        price,
        category
    }
    axios.post("http://localhost:1234/products", product).then(response => {
      console.log("Product added!!");
    })
  }

  return (
    <div>
        <h1>ProductForm</h1>    
        <form>
            <input type="text" placeholder='Product Name'  onChange={(evt) => setName(evt.target.value)}/>
            <br />
            <input type="number" placeholder='Price' onChange={(evt) => setPrice(+evt.target.value)}/>
            <br />
            <input type="text" placeholder='Category' onChange={(evt) => setCategory(evt.target.value)}/>
            <br />
            <input type="text" placeholder='Company' />
            <br />
            <button type='button' onClick={addProduct}>Add Product</button>  
        </form>
    </div>
  )
}
  */

// uncontrolled Components
// less events are happening
// export default function ProductForm() {
//   let nameRef = React.createRef(); // references as in pointers
//   let priceRef = React.createRef();
//   let categoryRef = React.createRef();

//   // handling only one event
//   function addProduct() {
//     let product = {
//         name: nameRef.current?.value,
//         price: priceRef.current?.value,
//         category: categoryRef.current?.value
//     }
//     axios.post("http://localhost:1234/products", product).then(response => {
//       console.log("Product added!!");
//     })
//   }
//   return (
//     <div>
//         <h1>ProductForm</h1>    
//         <form>
//             <input type="text" placeholder='Product Name' ref={nameRef}/>
//             <br />
//             <input type="number" placeholder='Price' ref={priceRef}/>
//             <br />
//             <input type="text" placeholder='Category' ref={categoryRef} />
//             <br />
//             <input type="text" placeholder='Company' />
//             <br />
//             <button type='button' onClick={addProduct}>Add Product</button>  
//         </form>
//     </div>
// }

// using Adobe React Spectrum for ProductForm
// https://react-spectrum.adobe.com/react-spectrum/forms.html
export default function ProductForm() {
  let [submitted, setSubmitted] = React.useState(null);
  function onSubmit(e) {
    e.preventDefault();
    // Get form data as an object.
    let data = Object.fromEntries(new FormData(e.currentTarget));

    // Submit to your backend API...
    setSubmitted(data);

    data.image = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"

    axios.post("http://localhost:1234/products", data).then(response => {
      console.log("Product added!!");
    });
  }
  return (
    <Provider theme={defaultTheme}>
      <Form onSubmit={onSubmit} maxWidth="size-3000">
        <TextField name="title" label="Title" />
        <TextField name="price" label="price" />
        <TextField name="category" label="category" />
        <ButtonGroup>
          <Button type="submit" variant="primary">Submit</Button>
          <Button type="reset" variant="secondary">Reset</Button>
        </ButtonGroup>
        {submitted && (
          <div>
            You submitted: <code>{JSON.stringify(submitted)}</code>
          </div>
        )}
      </Form>
    </Provider>
  );


}