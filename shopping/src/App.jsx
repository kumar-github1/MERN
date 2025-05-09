import './App.css'
import Shopping from './Shopping'
import { CartProvider } from './components/CartProvider'
import Products from './components/Products';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Cart from './components/Cart'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/" element={<Shopping />} />
            <Route path='/register' element={<Shopping />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
