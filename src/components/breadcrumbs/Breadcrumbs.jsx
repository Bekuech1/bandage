import React from 'react'
import './Breadcrumbs.css'
import { NavLink } from 'react-router-dom'

const Breadcrumbs = ( {isShop = true} ) => {
  const isActive = isShop ? "nothing" : 'noDeco capitalize h6Text feint'
  const src = isShop ? 'icons/breadcrumb-feint.svg' : 'icons/breadcrumb.svg'


  return (
    <div className='breadcrumbs'>
        <section className='breadcrumbs-inner auto'>
            <section className='breadcrumbs-main flex'>
                <NavLink to='/' className='noDeco capitalize h6Text blue'>home</NavLink>
                <img src={src} alt="" />
                <NavLink to='/shop' className='noDeco capitalize h6Text feint'>shop</NavLink>
                <img src="icons/breadcrumb-feint.svg" className={isActive} alt="" />
                <NavLink to='/cart' className={isActive}>
                  cart</NavLink>
            </section>
        </section>
    </div>
  )
}

export default Breadcrumbs