import {Container} from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import CartComponent from './components/CartComponent'
import ProductForm from './components/ProductForm'
import Details from './components/Details'
import Default from './components/Default'

import './App.css'

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<ProductList />}></Route>
        <Route path='/products' element={<ProductList />}></Route>
        <Route path='/cart' element={<CartComponent />}></Route>
        <Route path='/details/:id' element={<Details />}></Route>
        <Route path='/form' element={<ProductForm />}></Route>
        <Route path='*' element={<Default />}></Route>
      </Routes>
    </Container>
  )
}

export default App
