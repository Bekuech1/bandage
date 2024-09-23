import React, { useState } from 'react';
import './ShopProduct.css'
import { useParams, useNavigate } from 'react-router-dom'
import items from '../../products.json'
import heart from '/icons/btn-heart.svg'
import cart from '/icons/btn-cart.svg'
import eye from '/icons/btn-eye.svg'
import right from '/icons/ChevronRight.svg'
import left from '/icons/ChevronLeft.svg'
import fullstar  from '/icons/full-star.svg'
import star from '/icons/star.svg'

const ShopProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const itemIndex = items.findIndex((item) => item.id === parseInt(id)); 
    const item = items[itemIndex];
    
    const nextItem = items[itemIndex + 1] || null;
    const prevItem = items[itemIndex - 1] || null;

    const handleNext = () => {
        if (nextItem) {
            navigate(`/shop/${nextItem.id}`);
        }
    };

    const handlePrevious = () => {
        if (prevItem) {
            navigate(`/shop/${prevItem.id}`);
        }
    };

    const fullStarsCount = Math.floor(item.rating);  // Get the integer part of the rating

    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < fullStarsCount) {
            stars.push(<img key={i} src={fullstar} alt="Full Star" />);
        } else {
            stars.push(<img key={i} src={star} alt="Empty Star" />);
        }
    }

    const [liked, setLiked] = useState(false);

    const handleLike = () => {
      if (!liked) {
        setLiked(true);
        incrementLikedProductsCount();
        updateTotalLikedCount(1); 
      } else {
        setLiked(false);
        decrementLikedProductsCount();
        updateTotalLikedCount(-1);
      }
    };

  return (
    <div className='greyBackground'>
        <div className='auto shopproduct gridFlex'>
            <section className='shop-left relative grid '>
                <img src={item.images} className='carousel-img auto' alt="" />
                <img 
                    className='absolute carousel-img1'
                    src={left} 
                    alt="" 
                    onClick={handlePrevious}
                    disabled={!prevItem}
                />
                <img 
                    className='absolute carousel-img2' 
                    src={right} 
                    alt="" 
                    onClick={handleNext}
                    disabled={!nextItem}
                />
                <div className='carousel-indicator flex'>
                    <img 
                        onClick={handleNext}
                        src={nextItem.images} 
                        alt="" 
                    />
                </div>
            </section>
            <div className='shop-right grid fix'>
                <h4 className='noMargin h4Text capitalize blue'>{item.title}</h4>
                <section className='star-row flex'>
                    <div className=''>
                        {stars}
                    </div>
                    <p className='noMargin pText capitalize grey'>{item.reviews.length} reviews</p>
                </section>
                <h3 className='noMargin h3Text capitalize blue'>${item.price}</h3>
                <p className='noMargin pText capitalize grey'>availability : <span className='sky'>{item.availabilityStatus}</span></p>
                <p className='noMargin pText capitalize grey' id='shop-product-txt'>{item.description}</p>
                <div className='line'></div>
                <section className="shop-colors flex">
                    <div id="color1"></div>
                    <div id="color2"></div>
                    <div id="color3"></div>
                    <div id="color4"></div>
                </section>
                <section className='flex  shop-buttons'>
                    <button className='filledButton normalButton'>select options</button>
                    <button 
                        className='circleButton auto'
                        onClick={handleLike}> 
                        <img src={heart} alt="" /> 
                    </button>
                    <button className='circleButton auto'> <img src={cart} alt="" /> </button>
                    <button className='circleButton auto'> <img src={eye} alt="" /> </button>
                </section>
            </div>
        </div>
    </div>
  )
}

export default ShopProduct