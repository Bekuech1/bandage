import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import ProductListing from '../components/productlisting/ProductListing'
import ShoppingCart from '../components/shoppingcart/ShoppingCart'

const Cart = () => {
  return (
    <>
    <Breadcrumbs isShop={false}/>
    <ShoppingCart/>
    <ProductListing header='products related to items in your cart'/>
    </>
  )
}

export default Cart