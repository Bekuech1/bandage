import React from 'react'
import './BestSellerCard.css'
import { Link } from 'react-router-dom'

const BestSellerCard = ({item, classes, cardText}) => {
  return (
    <Link to={`/shop/${item.id}`}>
        <section className={`grid ${classes}`}>
            <img src={item.images} alt={item.title}/>
            <div className={`${cardText} grid justifyCenter centerText`}>
                <h5 className='capitalize h5Text noMargin blue'>{item.title}</h5>
                <div className='capitalize noDeco pText noMargin grey'>{item.category}</div>
                <h5 className='h5Text noMargin feint'>
                  ${item.price.toFixed(2)}   
                  <span>
                  ${(item.price - item.price * (item.discountPercentage / 100)).toFixed(2)}
                  </span>
                </h5>
            </div>
        </section>
    </Link>
  )
}

export default BestSellerCard