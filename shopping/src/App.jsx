import { useState } from 'react'
import './App.css'
import Register from './components/Register'
import PerDetails from './components/PerDetails'
import Shopping from './Shopping'
import NavBar from './components/NavBar'
import Products from './components/Products'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Shopping />} />
        <Route path='/register' element={<Shopping />} />
      </Routes>
    </>
  )
}

export default App
