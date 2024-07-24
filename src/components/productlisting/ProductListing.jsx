import React from 'react'
import './ProductListing.css'
import BestSellerCard from '../bestsellercard/BestSellerCard'
import products from '../../products.json'

const ProductListing = (prop) => {
    const moreProducts1 = products.slice(0, 4);
    const moreProducts2 = products.slice(5, 9);
  return (
    <div className='greyBackground'>
        <div className='product-listing grid'>
            <div className='listing-heading'>
                <h3 className='noMargin h3Text blue uppercase'>{prop.header}</h3>
            </div>
            <div id='listing-line'></div>
            <div className='listing-row flex auto spaceBetween'>
                {moreProducts1.map((item) => (
                    <BestSellerCard key={item.id} item={item}  classes='bestsellercard-alt' cardText='bestseller-cardtext-alt'/>
                ))}
            </div>
            <div className='listing-row flex auto spaceBetween'>
                {moreProducts2.map((item) => (
                    <BestSellerCard key={item.id} item={item}  classes='bestsellercard-alt' cardText='bestseller-cardtext-alt'/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductListing