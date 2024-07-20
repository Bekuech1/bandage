import React from 'react'
import './BestSellerCard.css'
import { Link } from 'react-router-dom'

const BestSellerCard = ({classes, cardText}) => {
  return (
    <section className={`grid ${classes}`}>
        <img src="images\bestseller.png" alt="" />
        <div className={`${cardText} grid justifyCenter centerText`}>
            <h5 className='capitalize h5Text noMargin blue'>graphic design</h5>
            <Link className='capitalize noDeco pText noMargin grey' to="/shop">english department</Link>
            <h5 className='h5Text noMargin feint'>$14.48 <span>$6.48</span></h5>
        </div>
    </section>
  )
}

export default BestSellerCard