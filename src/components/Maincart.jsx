import React from 'react'
import '../components/shoppingcart/ShoppingCart.css'
import fullstar  from '/icons/full-star.svg'
import star from '/icons/star.svg'


const MainCart = ({ item, handleDecreaseQuantity, handleIncreaseQuantity, handleRemoveItem }) => {

  const fullStarsCount = Math.floor(item.rating);
  const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < fullStarsCount) {
            stars.push(<img key={i} src={fullstar} alt="Full Star" />);
        } else {
            stars.push(<img key={i} src={star} alt="Empty Star" />);
        }
    }


    return (
      <div className='cart-container grid'>
        <div className='maincart flex auto'>
          <div className='maincart1 flex'>
            <img className='cart-img'src={item.images} alt="" />
            <div className='maincart1-1 grid auto'>
              <p className='pText noMargin capitalize blue'>{item.title}</p>
              <p className='sText noMargin capitalize green'>{item.availability}</p>
              <div className='flex noMargin maincart1-1'>
                <div className='flex'>
                  {stars}
                </div>
                <p className='sText capitalize grey'>{item.reviews.length} reviews</p>
              </div>
            </div>
          </div>
          <div className='maincart2 auto flex'>
            <button 
              className='cart-button1 auto'
              onClick={() => handleDecreaseQuantity(item.id)}
            >
              -
            </button>
            <div className='auto'>{item.quantity}</div>
            <button 
              className='cart-button2 auto'
              onClick={() => handleIncreaseQuantity(item.id)}
            >
              +
            </button>
          </div>
        </div>
        <div className='maincart3 grid'>
          <h4 className='h4Text noMargin capitalize blue'>${(item.price * item.quantity).toFixed(2)}</h4>
          <h6 className='h6Text noMargin capitalize feint'>${item.price} X {item.quantity}</h6>
        </div>
        <div className='remove-btn flex'>
          <img className='auto' src="icons/remove.svg" alt="" />
          <h6 
            className='sText uppercase noMargin sky'
            onClick={() => handleRemoveItem(item.id)}
          >
            remove
          </h6>
        </div>
      </div>
    )
  }

  export default MainCart