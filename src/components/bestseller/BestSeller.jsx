import React from 'react'
import './BestSeller.css'
import BestSellerCard from '../bestsellercard/BestSellerCard'
import ComponentHeading from '../ComponentHeading'
import { Link } from 'react-router-dom'
import products from '../../products.json'



const BestSeller = () => {
  const recentProducts1 = products.slice(0, 5);
  const recentProducts2 = products.slice(6, 11);

  return (
    <section className='grid bestseller'>
        <div className='grid bestseller-text auto centerText ' >
            <ComponentHeading text="BESTSELLER PRODUCTS" subtext='Problems trying to resolve the conflict between' id='grey'/>
        </div>
        <section className='bestseller-row auto grid'>
            <div className='gridFlex spaceBetween mobileAuto auto'>
                {recentProducts1.map((item) => (
                    <BestSellerCard key={item.id} item={item} classes='bestsellercard' cardText='bestseller-cardtext'/>
                ))}
            </div>
            <div className='gridFlex spaceBetween noMobile auto'>
                {recentProducts2.map((item) => (
                    <BestSellerCard key={item.id} item={item} classes='bestsellercard' cardText='bestseller-cardtext'/>
                ))}
            </div>
            <button className='uppercase capitalButton auto transparentButton'>load more products</button>
        </section>
    </section>
  )
}

export default BestSeller