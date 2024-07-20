import React from 'react'
import './BestSeller.css'
import BestSellerCard from '../bestsellercard/BestSellerCard'
import ComponentHeading from '../ComponentHeading'

const BestSeller = () => {
  return (
    <section className='grid bestseller auto'>
        <div className='grid bestseller-text auto centerText' >
            <ComponentHeading text="BESTSELLER PRODUCTS" subtext='Problems trying to resolve the conflict between' id='grey'/>
        </div>
        <section className='bestseller-row auto grid'>
            <div className='gridFlex spaceBetween'>
                <BestSellerCard classes='bestsellercard' cardText='bestseller-cardtext'/>
                <BestSellerCard/>
                <BestSellerCard/>
                <BestSellerCard/>
                <BestSellerCard/>
            </div>
            <div className='gridFlex spaceBetween'>
                <BestSellerCard/>
                <BestSellerCard/>
                <BestSellerCard/>
                <BestSellerCard/>
                <BestSellerCard/>
            </div>
            <button className='uppercase capitalButton auto transparentButton'>load more products</button>
        </section>
    </section>
  )
}

export default BestSeller