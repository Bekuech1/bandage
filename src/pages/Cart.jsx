import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import ProductListing from '../components/productlisting/ProductListing'
import ShoppingCart from '../components/shoppingcart/ShoppingCart'

const Cart = () => {
  return (
    <>
    <Navbar navClass='nav-right-alt' navMarginAuto='nav-alt' />
    <Breadcrumbs/>
    <ShoppingCart/>
    <ProductListing header='products related to items in your cart'/>
    <Footer footerClass='footer-top-alt'/>

    </>
  )
}

export default Cart