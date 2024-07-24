import React from 'react'
import { 
  BrowserRouter,
  Route,
  Routes 
} from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import './App.css'
import NotFound from './pages/NotFound'



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element = {<Home />} />
        <Route path = '/home' element = {<Home />} />
        <Route path = '/shop' element = {<Shop/>} />
        <Route path = '/cart' element = {<Cart/>} />
        <Route path = '*' element = {<NotFound/>} />

    </Routes>
  </BrowserRouter>
  )
}

export default App
