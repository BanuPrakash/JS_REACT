import { lazy, Suspense } from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'

import Default from './components/Default'
import NavbarComponent from './components/NavbarComponent'
import './App.css'

const CartComponent = lazy(() => import('./components/CartComponent'));
const ProductForm = lazy(() => import('./components/ProductForm'))
const Details = lazy(() => import('./components/Details'));


function App() {
  return (
    <Container>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<ProductList />}></Route>
        <Route path='/products' element={<ProductList />}></Route>
        <Route path='/cart' element={
          <Suspense fallback={<div>Loading Cart...</div>}>
            <CartComponent />
          </Suspense>
        }></Route>
        <Route path='/details/:id' element={
          <Suspense fallback={<div>Loading Details...</div>}>
            <Details />
          </Suspense>
        }></Route>
        <Route path='/form' element={
          <Suspense fallback={<div>Loading Form...</div>}>
            <ProductForm />
          </Suspense>
        }></Route>
        <Route path='*' element={<Default />}></Route>
      </Routes>
    </Container>
  )
}

export default App
