
import './BestSellerCard.css'
import { Link } from 'react-router-dom'

const BestSellerCard = ({item, classes, cardText}) => {
  return (
    <section className={`grid ${classes}`}>
        <img src={item.images} alt={item.title} />
        <div className={`${cardText} grid justifyCenter centerText`}>
            <h5 className='capitalize h5Text noMargin blue'>{item.title}</h5>
            <Link className='capitalize noDeco pText noMargin grey' to={`/shop/${item.id}`}>{item.category}</Link>
            <h5 className='h5Text noMargin feint'>${item.price} <span>${item.discountPercentage}</span></h5>
        </div>
    </section>
  )
}

export default BestSellerCard