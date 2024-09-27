import React from 'react'
import './ShoppingCart.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity } from '../CartSlice';
import MainCart from '../Maincart';

const ShoppingCart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const totalItemsInCart = cartItems.length;

  const handleRemoveItem = itemId => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleIncreaseQuantity = itemId => {
    dispatch(increaseItemQuantity(itemId));
  };

  const handleDecreaseQuantity = itemId => {
    dispatch(decreaseItemQuantity(itemId));
  };

  return (
    <div className='greyBackground'>
        <div className='shopping-cart auto gridFlex'>
            <section className='cart grid'>
              <div className='cart-heading '>
                <h3 className='h3Text noMargin capitalize blue'>shopping cart</h3>
              </div>
              <div className='cart-items grid'>
                
                {cartItems.map(item => (
                    <MainCart
                        key={item.id}
                        item={item}
                        handleDecreaseQuantity={handleDecreaseQuantity}
                        handleIncreaseQuantity={handleIncreaseQuantity}
                        handleRemoveItem={handleRemoveItem}
                    />
                ))}
              </div>
            </section>
            <section className='order-summary grid'>
              <div className='order-summary1 flex spaceBetween'>
                <h4 className='noMargin blue h4Text capitalize'>order summary</h4>
                <p className='noMargin grey pText capitalize'>{totalItemsInCart > 0 ? totalItemsInCart : 'No'} item{totalItemsInCart > 1 && 's'}</p>
              </div>
              <div className='order-summary2 flex spaceBetween'>
                <h5 className='noMargin grey h5Text capitalize'>delivery charges</h5>
                <p className='noMargin red sText capitalize'>Add your delivery address to checkout to see delivery charges.</p>
              </div>
              <div className='order-summary-line'></div>
              <div className='order-summary3 flex spaceBetween'>
                <h5 className='noMargin grey h5Text capitalize'>subtotal</h5>
                <h5 className='noMargin grey h5Text capitalize'>{totalAmount > 0 ? totalAmount.toFixed(2) : 'No item'}</h5>
              </div>
              <div className='order-summary-line'></div>
              <div className='order-summary3 flex spaceBetween'>
                <h4 className='noMargin blue h4Text capitalize'>total</h4>
                <h4 className='noMargin blue h4Text capitalize'>{totalAmount > 0 ? totalAmount.toFixed(2) : 'No item'}</h4>
              </div>
              <div className='order-summary4'>
                <p className='noMargin red sText capitalize'>Excluding Delivery Charges</p>
              </div>
              <div className='order-summary5 grid'>
                <button className='filledButton normalButton'>proceed to checkout</button>
                <div className='order-summary-line'></div>
                <section className='flex noMobile'>
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

export default ShoppingCart