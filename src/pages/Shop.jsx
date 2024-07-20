import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import ShopProduct from '../components/shopproduct/ShopProduct'
import Description from '../components/description/Description'
import ProductListing from '../components/productlisting/ProductListing'
import Clients from '../components/clients/Clients'

const Shop = () => {
  return (
    <>
    <Navbar navClass='nav-right-alt' navMarginAuto='nav-alt' />
    <Breadcrumbs/>
    <ShopProduct/>
    <Description />
    <ProductListing header='bestseller products'/>
    <Clients/>
    <Footer footerClass='footer-top-alt'/>
    
    </>
  )
}

export default Shop