import React from 'react'
import './ShoppingCart.css'

const ShoppingCart = () => {
  return (
    <div className='greyBackground'>
        <div className='shopping-cart auto gridFlex'>
            <section className='cart grid'>
              <div className='cart-heading'>
                <h3 className='h3Text noMargin capitalize blue'>shopping cart</h3>
              </div>
              <div className='cart-items grid'>
                <div className='cart-items-top flex'>
                  <h6 className='h6Text white noMargin capitalize'>item details</h6>
                  <div>
                      <h6 className='h6Text white noMargin capitalize' id='cart-item-top1'>quantity</h6>
                  </div>
                  <div>
                      <h6 className='h6Text white noMargin capitalize' id='cart-item-top2'>price</h6>
                  </div>
                </div>
                <MainCart/>
                <MainCart/>
                <MainCart/>
                <MainCart/>

              </div>
            </section>
            <section className='order-summary grid'>
              <div className='order-summary1 flex spaceBetween'>
                <h4 className='noMargin blue h4Text capitalize'>order summary</h4>
                <p className='noMargin grey pText capitalize'>4 items</p>
              </div>
              <div className='order-summary2 flex spaceBetween'>
                <h5 className='noMargin grey h5Text capitalize'>delivery charges</h5>
                <p className='noMargin red sText capitalize'>Add your delivery address to checkout to see delivery charges.</p>
              </div>
              <div className='order-summary-line'></div>
              <div className='order-summary3 flex spaceBetween'>
                <h5 className='noMargin grey h5Text capitalize'>subtotal</h5>
                <h5 className='noMargin grey h5Text capitalize'>$67,454</h5>
              </div>
              <div className='order-summary-line'></div>
              <div className='order-summary3 flex spaceBetween'>
                <h4 className='noMargin blue h4Text capitalize'>total</h4>
                <h4 className='noMargin blue h4Text capitalize'>$67,454</h4>
              </div>
              <div className='order-summary4'>
                <p className='noMargin red sText capitalize'>Excluding Delivery Charges</p>
              </div>
              <div className='order-summary5 grid'>
                <button className='filledButton normalButton'>proceed to checkout</button>
                <div className='order-summary-line'></div>
                <section className='flex'>
                  <img src="images/paystack.jpg" alt="" />
                  <img src="images/mastercard.jpg" alt="" />
                  <img src="images/visa.jpg" alt="" />
                </section>
              </div>
            </section>
        </div>
    </div>
  )
}

const MainCart = () => {
  return (
    <div className='cart-container grid'>
      <div className='maincart spaceBetween flex'>
        <div className='maincart1 flex'>
          <img className='cart-img'src="images/cart-img.jpg" alt="" />
          <div className='maincart1-1 grid auto'>
            <p className='pText noMargin capitalize blue'>Graphic Design</p>
            <p className='sText noMargin capitalize green'>in stock</p>
            <div className='flex noMargin'>
              <div className='flex'>
                  <img src="icons/cart-star-full.svg" alt="" />
                  <img src="icons/cart-star-full.svg" alt="" />
                  <img src="icons/cart-star-full.svg" alt="" />
                  <img src="icons/cart-star-full.svg" alt="" />
                  <img src="icons/cart-star-full.svg" alt="" />
              </div>
              <p className='sText noMargin capitalize grey'>10 reviews</p>
            </div>
          </div>
        </div>
        <div className='maincart2 auto flex'>
          <button className='cart-button1 auto'>-</button>
          <div className='auto'>1</div>
          <button className='cart-button2 auto'>+</button>
        </div>
        <div className='maincart3 grid'>
          <h4 className='h4Text noMargin capitalize blue'>$3000</h4>
          <h6 className='h6Text noMargin capitalize feint'>$3000 x 1 item</h6>
        </div>
      </div>
      <div className='remove-btn flex'>
        <img className='auto' src="icons/remove.svg" alt="" />
        <h6 className='sText uppercase noMargin sky'>remove</h6>
      </div>
    </div>
  )
}

export default ShoppingCart