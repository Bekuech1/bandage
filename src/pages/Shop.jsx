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
    <Breadcrumbs isShop={true}/>
    <ShopProduct/>
    <Description />
    <ProductListing header='bestseller products'/>
    <Clients/>
    </>
  )
}

export default Shop