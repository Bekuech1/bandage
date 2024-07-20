import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/home' element = {<Home />} />
      <Route path = '/shop' element = {<Shop/>} />
      <Route path = '/cart' element = {<Cart/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
