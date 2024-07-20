import React from 'react'
import './Breadcrumbs.css'
import { Link } from 'react-router-dom'

const Breadcrumbs = () => {
  return (
    <div className='breadcrumbs'>
        <section className='breadcrumbs-inner auto'>
            <section className='breadcrumbs-main flex'>
                <Link to='/' className='noDeco capitalize h6Text blue'>home</Link>
                <img src="icons/breadcrumb-active.svg" alt="" />
                <Link to='/shop' className='noDeco capitalize h6Text feint'>shop</Link>
            </section>
        </section>
    </div>
  )
}

export default Breadcrumbs