import React from 'react'
import './ProductListing.css'
import BestSellerCard from '../bestsellercard/BestSellerCard'

const ProductListing = (prop) => {
  return (
    <div className='greyBackground'>
        <div className='product-listing grid'>
            <div className='listing-heading'>
                <h3 className='noMargin h3Text blue uppercase'>{prop.header}</h3>
            </div>
            <div id='listing-line'></div>
            <div className='listing-row flex auto spaceBetween'>
                <BestSellerCard classes='bestsellercard-alt' cardText='bestseller-cardtext-alt'/>
                <BestSellerCard classes='bestsellercard-alt' cardText='bestseller-cardtext-alt'/>
                <BestSellerCard classes='bestsellercard-alt' cardText='bestseller-cardtext-alt'/>
                <BestSellerCard classes='bestsellercard-alt' cardText='bestseller-cardtext-alt'/>
            </div>
            <div className='listing-row flex auto spaceBetween'>
                <BestSellerCard classes='bestsellercard-alt' cardText='bestseller-cardtext-alt'/>
                <BestSellerCard classes='bestsellercard-alt' cardText='bestseller-cardtext-alt'/>
                <BestSellerCard classes='bestsellercard-alt' cardText='bestseller-cardtext-alt'/>
                <BestSellerCard classes='bestsellercard-alt' cardText='bestseller-cardtext-alt'/>
            </div>
        </div>
    </div>
  )
}

export default ProductListing