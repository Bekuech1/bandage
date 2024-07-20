import React from 'react'
import './ShopProduct.css'

const ShopProduct = () => {
  return (
    <div className='greyBackground'>
        <div className='auto shopproduct gridFlex'>
            <section className='shop-left relative grid '>
                <img src="images/carousel-inner.png" alt="" />
                <img className='absolute carousel-img1' src="icons/ChevronLeft.svg" alt="" />
                <img className='absolute carousel-img2' src="icons/ChevronRight.svg" alt="" />
                <div className='carousel-indicator flex'>
                    <img src="images/carouselCaptions.png" alt="" />
                    <img src="images/carouselCaptions.png" alt="" />
                </div>
            </section>
            <div className='shop-right grid'>
                <h4 className='noMargin h4Text capitalize blue'>floating phone</h4>
                <section className='star-row flex'>
                    <div className=''>
                        <img src="icons/full-star.svg" alt="" />
                        <img src="icons/full-star.svg" alt="" />
                        <img src="icons/full-star.svg" alt="" />
                        <img src="icons/full-star.svg" alt="" />
                        <img src="icons/star.svg" alt="" />
                    </div>
                    <p className='noMargin pText capitalize grey'>10 reviews</p>
                </section>
                <h3 className='noMargin h3Text capitalize blue'>$14,843.99</h3>
                <p className='noMargin pText capitalize grey'>availability : <span className='sky'>in stock</span></p>
                <p className='noMargin pText capitalize grey notVisible' id='shop-product-txt'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                <div className='line'></div>
                <section className="shop-colors flex">
                    <div id="color1"></div>
                    <div id="color2"></div>
                    <div id="color3"></div>
                    <div id="color4"></div>
                </section>
                <section className='flex  shop-buttons'>
                  <button className='filledButton normalButton'>select options</button>
                  <button className='circleButton'> <img src="icons/btn-heart.svg" alt="" /> </button>
                  <button className='circleButton'> <img src="icons/btn-cart.svg" alt="" /> </button>
                  <button className='circleButton'> <img src="icons/btn-eye.svg" alt="" /> </button>
                </section>
            </div>
        </div>
    </div>
  )
}

export default ShopProduct